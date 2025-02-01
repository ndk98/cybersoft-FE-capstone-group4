import { api } from "app/utils/api/axios";
import { useEffect, useState } from "react";

export default function ListRoomPaginate({
    pageIndex,
    pageSize,
}: {
    pageIndex: number;
    pageSize: number;
}) {
    const [total, setTotal] = useState(0);
    const [pageTotal, setPageTotal] = useState(0);

    useEffect(() => {
        const getTotal = async () => {
            try {
                const res = await api.get("/phong-thue");
                const resData = res.data.content;
                setTotal(resData.length);
                setPageTotal(Math.ceil(resData.length / pageSize));
            } catch (error) {
                console.error(error);
            }
        };

        getTotal();
    }, []);

    const maxPage = 5;

    const pageItems = () => {
        const items = [];

        if (pageIndex > maxPage) {
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

        for (let i = 1; i <= pageTotal; i++) {
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
                    >
                        {i}
                    </a>
                </li>,
            );
        }
        return items;
    };

    return (
        <nav
            className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
            aria-label="Table navigation"
        >
            <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Hiển thị{" "}
                <span className="font-semibold text-gray-900">
                    {pageIndex}-{pageIndex * pageSize}
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
