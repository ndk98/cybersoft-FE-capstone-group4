import Link from "next/link";
import React from "react";

export default function Sidebar() {
    return (
        <aside id="logo-sidebar"
               className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-primary-light sm:translate-x-0"
               aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-white rounded-lg hover:bg-slate-700 group">
                            <svg
                                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 22 21">
                                <path
                                    d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                <path
                                    d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                            </svg>
                            <span className="ms-3">Tổng quan</span>
                        </a>
                    </li>
                    <li>
                        <button type="button"
                                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-slate-700"
                                aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <span
                                className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Vị trí</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <ul id="dropdown-example" className="hidden py-2 space-y-2">
                            <li>
                                <Link href="/admin/location/list"
                                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-slate-700">Danh
                                    sách vị trí</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button type="button"
                                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-slate-700"
                                aria-controls="dropdown-user" data-collapse-toggle="dropdown-user">
                            <span
                                className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Người dùng</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <ul id="dropdown-user" className="hidden py-2 space-y-2">
                            <li>
                                <Link href="/admin/user/list"
                                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-slate-700 ">Danh
                                    sách người dùng</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button type="button"
                                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-slate-700"
                                aria-controls="dropdown-room" data-collapse-toggle="dropdown-room">
                            <span
                                className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Phòng</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <ul id="dropdown-room" className="hidden py-2 space-y-2">
                            <li>
                                <Link href="/admin/room/list"
                                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-slate-700">Danh
                                    sách phòng</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button type="button"
                                className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-slate-700"
                                aria-controls="dropdown-booking" data-collapse-toggle="dropdown-booking">
                            <span
                                className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Đặt phòng</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <ul id="dropdown-booking" className="hidden py-2 space-y-2">
                            <li>
                                <Link href="/admin/booking/list"
                                      className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-slate-700">Danh
                                    sách đặt phòng</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    );
}