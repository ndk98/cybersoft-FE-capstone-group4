"use client";

import { api } from "app/utils/api/axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import UserListItem from "../components/UserListItem";
import ListingPaginate from "../../components/ListingPaginate";
import { getAdminUser } from "app/(admin)/admin/services/authService";
import Spinner from "app/(admin)/admin/components/Spinner";
import debounce from "app/libs/debounce";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    birthDate: string;
    gender: boolean;
}

export default function UserListPage() {
    const searchParams = useSearchParams();

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [userList, setUserList] = useState<React.ReactNode[]>([]);
    const [totalRow, setTotalRow] = useState(0);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const pageSize = 10;
    const pageIndex = searchParams.get("p")
        ? parseInt(searchParams.get("p") as string)
        : 1;

    useEffect(() => {
        const getUserList = async () => {
            setLoading(true);
            try {
                const currentUser = await getAdminUser();
                if (currentUser) {
                    setCurrentUser(currentUser);
                }

                const res = await api.get("/users/phan-trang-tim-kiem", {
                    params: {
                        pageIndex,
                        pageSize,
                        keyword,
                    },
                });
                const resData = res.data;
                const userList = resData.content.data.map((user: User) => {
                    return (
                        <UserListItem
                            disabled={currentUser && currentUser.id === user.id}
                            user={user}
                            key={user.id}
                        />
                    );
                });
                setUserList(userList);
                setTotalRow(resData.content.totalRow);
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch user list");
            } finally {
                setLoading(false);
            }
        };

        getUserList();
    }, [pageIndex, pageSize, keyword]);

    const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }, 700);

    return (
        <>
            <h1 className="text-xl font-extrabold">Danh Sách Người Dùng</h1>
            <div className="my-10">
                <div className="flex flex-col gap-2 my-6 lg:mx-10 lg:flex-row lg:gap-0 justify-between">
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
                                placeholder="Tìm kiếm user theo tên"
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                    <div></div>
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
                                    Tên
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Số điện thoại
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ngày sinh
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Giới tính
                                </th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>{loading ? <Spinner /> : userList}</tbody>
                    </table>

                    {
                        <ListingPaginate
                            pageIndex={pageIndex}
                            pageSize={pageSize}
                            totalRow={totalRow}
                        />
                    }
                </div>
                {error && <div className="text-red-500">{error}</div>}
            </div>
        </>
    );
}
