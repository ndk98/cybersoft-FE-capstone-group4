import { api } from "app/utils/api/axios";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function UserListPaginate({
    pageIndex,
    pageSize,
}: {
    pageIndex: number;
    pageSize: number;
}) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const [total, setTotal] = useState(0);
    const [pageTotal, setPageTotal] = useState(0);

    useEffect(() => {
        const getTotal = async () => {
            try {
                const res = await api.get("/users");
                const resData = res.data.content;
                setTotal(resData.length);
                setPageTotal(Math.ceil(resData.length / pageSize));
            } catch (error) {
                console.error(error);
            }
        };

        getTotal();
    }, []);

    const handleChangePage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const index = e.currentTarget.getAttribute("data-index");
        if (index) {
            let query = searchParams.toString();
            if (query) {
                if (query.includes("p=")) {
                    query = query.replace(/p=\d+/, `p=${index}`);
                }
            } else {
                query = `p=${index}`;
            }
            router.push(`${pathname}?${query}`);
        }
    };

    const currentPage = searchParams.get("p")
        ? parseInt(searchParams.get("p") as string)
        : 1;
    let maxPage = 5;
    const pageItems = () => {
        const items = [];

        let i = 1;

        if (currentPage >= maxPage) {
            i = currentPage - 2;
            maxPage = currentPage + 2;
            items.push(
                <li key={1}>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                        ...
                    </a>
                </li>,
            );
        }

        for (i; i <= pageTotal; i++) {
            if (i > maxPage) {
                items.push(
                    <li key={i}>
                        <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                        >
                            ...
                        </a>
                    </li>,
                );
                break;
            }
            items.push(
                <li key={i}>
                    <a
                        href="#"
                        className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                            pageIndex === i
                                ? "bg-gray-100 text-gray-700"
                                : "hover:bg-gray-100 hover:text-gray-700"
                        }`}
                        data-index={i}
                        onClick={handleChangePage}
                    >
                        {i}
                    </a>
                </li>,
            );
        }
        return items;
    };

    const from = (pageIndex - 1) * pageSize + 1;
    const to = pageIndex * pageSize > total ? total : pageIndex * pageSize;

    return (
        <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
            aria-label="Table navigation"
        >
            <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Hiển thị{" "}
                <span className="font-semibold text-gray-900">
                    {from}-{to}
                </span>{" "}
                của <span className="font-semibold text-gray-900">{total}</span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        Trước
                    </a>
                </li>
                {pageItems()}
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                        Tiếp
                    </a>
                </li>
            </ul>
        </nav>
    );
}
