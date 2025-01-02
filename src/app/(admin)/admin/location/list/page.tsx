export default function LocationListPage() {
    return (
        <>
            <h1 className="text-xl font-extrabold">Danh Sách Vị Trí</h1>
            <div className="my-10">
                <div className="my-6 mx-10 flex flex-col lg:flex-row justify-between">
                    <div>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div
                                className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="search-input"
                                   className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                   placeholder="Tìm kiếm đặt phòng"/>
                        </div>
                    </div>
                    <div>
                        <button className="px-4 py-1 bg-secondary text-white rounded font-semibold">Tạo mới</button>
                    </div>
                </div>


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
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
                        <tr className="bg-white border-b">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                1
                            </th>
                            <td className="px-6 py-4">
                                Quận 1
                            </td>
                            <td className="px-6 py-4">
                                Hồ Chí Minh
                            </td>
                            <td className="px-6 py-4">
                                Việt Nam
                            </td>
                            <td className="px-6 py-4 flex gap-2">
                                <a href="#"
                                   className="font-medium text-blue-600 px-2 py-2 border border-gray-200 rounded">Sửa</a>
                                <button
                                    className="font-medium text-red-600 px-2 py-2 border border-gray-200 rounded">Xoá
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
                         aria-label="Table navigation">
                        <span
                            className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Hiển thị <span
                            className="font-semibold text-gray-900">1-10</span> của <span
                            className="font-semibold text-gray-900">1000</span></span>
                        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                            <li>
                                <a href="#"
                                   className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Trước</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Tiếp</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}