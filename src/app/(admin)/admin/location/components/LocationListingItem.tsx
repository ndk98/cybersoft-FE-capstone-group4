import React from "react";

interface Location {
    id: number;
    tenViTri: string;
    tinhThanh: string;
    quocGia: string;
    hinhAnh: string;
}

export default function LocationListingItem({
    location,
}: {
    location: Location;
}) {
    return (
        <tr className="bg-white border-b">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                    >
                        checkbox
                    </label>
                </div>
            </td>
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
                {location.id}
            </th>
            <td className="px-6 py-4">{location.tenViTri}</td>
            <td className="px-6 py-4">{location.tinhThanh}</td>
            <td className="px-6 py-4">{location.quocGia}</td>
            <td className="px-6 py-4 flex gap-2">
                <a
                    href="#"
                    className="font-medium text-blue-600 px-2 py-2 border border-gray-200 rounded"
                >
                    Sửa
                </a>
                <button className="font-medium text-red-600 px-2 py-2 border border-gray-200 rounded">
                    Xoá
                </button>
            </td>
        </tr>
    );
}
