"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./style.scss";
interface IRoom {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean;
  dieuHoa: boolean;
  wifi: boolean;
  bep: boolean;
  doXe: boolean;
  hoBoi: boolean;
  banUi: boolean;
  maViTri: number;
  hinhAnh: string;
}

export default function Home() {
  // const [data, setData] = useState<IRoom[]>([]);
  // const fetchData = async () => {
  //   try {
  //     const result = await fetch(
  //       "https://airbnbnew.cybersoft.edu.vn/api/phong-thue"
  //     );
  //     const data = await result.json();
  //     setData(data.content);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const renderData = () => {
  //   return data.map((rooms) => (
  //     <div
  //       key={rooms.id}
  //       className="my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  //     >
  //       <a href="#">
  //         <img className="rounded-t-lg" src={rooms.hinhAnh} alt="" />
  //       </a>
  //       <div className="p-5">
  //         <a href="#">
  //           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  //             {rooms.tenPhong}
  //           </h5>
  //         </a>
  //         <a
  //           href="#"
  //           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //         >
  //           Read more
  //           <svg
  //             className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
  //             aria-hidden="true"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 14 10"
  //           >
  //             <path
  //               stroke="currentColor"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M1 5h12m0 0L9 1m4 4L9 9"
  //             />
  //           </svg>
  //         </a>
  //       </div>
  //     </div>
  //   ));
  // };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
          <div className="">
            <img
              className="rounded-t-lg cardImage"
              src="https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg"
              alt=""
            />
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              &#8363;27
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
          <div className="">
            <img
              className="rounded-t-lg cardImage"
              src="https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg"
              alt=""
            />
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              &#8363;27
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
          <div className="">
            <img
              className="rounded-t-lg cardImage"
              src="https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg"
              alt=""
            />
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              &#8363;27
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
          <div className="">
            <img
              className="rounded-t-lg cardImage"
              src="https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg"
              alt=""
            />
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              &#8363;27
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow">
          <div className="">
            <img
              className="rounded-t-lg cardImage"
              src="https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg"
              alt=""
            />
          </div>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              &#8363;27
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
