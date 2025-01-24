"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "../../../../utils/api/axios";
import LocationListingItem from "../../location/components/LocationListingItem";
import ListingPaginate from "../../components/ListingPaginate";
import Spinner from "app/(admin)/admin/components/Spinner";
import debounce from "../../../../libs/debounce";

interface Location {
    id: number;
    tenViTri: string;
    tinhThanh: string;
    quocGia: string;
    hinhAnh: string;
}

export default function LocationListPage() {
    const searchParams = useSearchParams();

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [locationList, setLocationList] = useState<React.ReactNode[]>([]);
    const [totalRow, setTotalRow] = useState(0);

    const pageSize = 10;
    const pageIndex = searchParams.get("p")
        ? parseInt(searchParams.get("p") as string)
        : 1;

    useEffect(() => {
        const getLocationList = async () => {
            setLoading(true);
            try {
                const res = await api.get("/vi-tri/phan-trang-tim-kiem", {
                    params: {
                        pageIndex,
                        pageSize,
                        keyword,
                    },
                });
                const resData = res.data;
                console.log(resData);
                const locationList = resData.content.data.map(
                    (location: Location) => {
                        return (
                            <LocationListingItem
                                location={location}
                                key={location.id}
                            />
                        );
                    },
                );
                setLocationList(locationList);
                setTotalRow(resData.content.totalRow);
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch location list");
            } finally {
                setLoading(false);
            }
        };

        getLocationList();
    }, [pageIndex, pageSize, keyword]);

    const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }, 700);

    return (
        <>
            <h1 className="text-xl font-extrabold">Danh Sách Vị Trí</h1>
            <div className="my-10">
                <div className="my-6 mx-10 flex flex-col lg:flex-row justify-between">
                    <div>
                        <label htmlFor="table-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="search-input"
                                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Tìm kiếm đặt phòng"
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                    <div>
                        <button className="px-4 py-1 bg-secondary text-white rounded font-semibold">
                            Tạo mới
                        </button>
                    </div>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-all-search"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="checkbox-all-search"
                                            className="sr-only"
                                        >
                                            checkbox
                                        </label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tên vị trí
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tỉnh thành
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Quốc gia
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <Spinner />
                            ) : error ? (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="p-4 text-center text-red-500"
                                    >
                                        {error}
                                    </td>
                                </tr>
                            ) : locationList.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="p-4 text-center">
                                        No location found
                                    </td>
                                </tr>
                            ) : (
                                locationList
                            )}
                        </tbody>
                    </table>
                    <ListingPaginate
                        pageSize={pageSize}
                        pageIndex={pageIndex}
                        totalRow={totalRow}
                    />
                </div>
            </div>
        </>
    );
}
