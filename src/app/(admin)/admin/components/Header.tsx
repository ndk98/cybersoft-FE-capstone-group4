"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import profileImage from "../../../../../public/images/profile-picture-5.jpg";

interface User {
    name: string;
    email: string;
}

export default function Header() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/verify", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });

                if (res.status === 401) {
                    window.location.href = "/admin";
                }

                const data = await res.json();

                setUser(data.user);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            if (res.ok) {
                window.location.href = "/auth/login";
            }
        } catch (error) {
            console.error("Failed to fetch data:", error);
        }
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
            <nav>
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                data-drawer-target="logo-sidebar"
                                data-drawer-toggle="logo-sidebar"
                                aria-controls="logo-sidebar"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            <a href="#" className="flex ms-2 md:me-24">
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    Airbnb
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button
                                        type="button"
                                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                        aria-expanded="false"
                                        data-dropdown-toggle="dropdown-account"
                                    >
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        <Image
                                            className="w-8 h-8 rounded-full"
                                            src={profileImage}
                                            width={32}
                                            height={32}
                                            alt={"user photo"}
                                        />
                                    </button>
                                </div>
                                <div
                                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                                    id="dropdown-account"
                                >
                                    <div className="px-4 py-3" role="none">
                                        {user && user.name && (
                                            <p
                                                className="text-sm text-gray-900 dark:text-white"
                                                role="none"
                                            >
                                                {user.name}
                                            </p>
                                        )}

                                        {user && user.email && (
                                            <p
                                                className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                                                role="none"
                                            >
                                                {user.email}
                                            </p>
                                        )}
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <Link
                                                href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                                role="menuitem"
                                                onClick={handleLogout}
                                            >
                                                Đăng xuất
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
