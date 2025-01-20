export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 ">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Hỗ trợ
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    Trung tâm trợ giúp
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Chống phân biệt đối xử
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Các tuỳ chọn huỷ
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Báo cáo lo ngại của khu dân cư
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Đón tiếp khách
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Cho thuê nhà trên Airbnb
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tài nguyên về đón tiếp khách
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Diễn đàn cộng đồng
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Đón tiếp khách có trách nhiệm
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Airbnb
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Trang tin tức
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Cơ hội nghề nghiệp
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Nhà đầu tư
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
