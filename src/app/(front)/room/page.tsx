

export default function Room() {
  return (
    <div className="max-w-screen-xl mx-auto p-4 my-4">
      <h1 className="text-4xl font-semibold p-2">NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!</h1>
      <img
              className="my-4"
              src="https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg"
              alt=""
            />
      <div className="grid grid-cols-2 mt-4">
        <div id="detailInformation">
          <h2 className="font-semibold text-xl py-4">Giới thiệu về chỗ ở này</h2>
          <p className="mb-8">NewApt D1 - Cozy studio - NU apt - 500m Bui Vien offers an unparalleled view of the city and a rich history of local cuisine. This cozy studio is perfect for those looking for a perfect escape from the daily commute. The 500m walk to the city center is perfect for walking or cycling, making it a great choice for those who enjoy a nice break from their daily routine.</p>
          <h2 className="font-semibold text-xl py-4 mb-4">Nơi này có những gì cho bạn</h2>
          <div className="grid grid-cols-2">
            <div className="">
                <div className="flex mb-4">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#FF385C" d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z"/></svg>
                  <p className="ml-2 mr-4 font-medium">Khách:</p>
                  <h3>1</h3>
                </div>
                <div className="flex mb-4">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#FF385C" d="M32 32c17.7 0 32 14.3 32 32l0 256 224 0 0-160c0-17.7 14.3-32 32-32l224 0c53 0 96 43 96 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-224 0-32 0L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>
                  <p className="ml-2 mr-4 font-medium">Giường:</p>
                  <h3>1</h3>
                </div>
                <div className="flex mb-4">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FF385C" d="M288 96c0-17.7 14.3-32 32-32s32 14.3 32 32s14.3 32 32 32s32-14.3 32-32c0-53-43-96-96-96s-96 43-96 96l0 192-64 0 0-24c0-30.9-25.1-56-56-56l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c4.4 0 8 3.6 8 8l0 24-80 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l224 0 224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 0-24c0-4.4 3.6-8 8-8l56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0c-30.9 0-56 25.1-56 56l0 24-64 0 0-192zM480 416l0-32L32 384l0 32c0 53 43 96 96 96l256 0c53 0 96-43 96-96z"/></svg>                  
                  <p className="ml-2 mr-4 font-medium">Phòng tắm:</p>
                  <h3>1</h3>
                </div>
                <div className="flex mb-4 may__giac">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path  fill="#FF385C" d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z"/></svg>
                  <p className="ml-2 mr-4 font-medium">Máy giặt:</p>
                  <h3>Có</h3>
                </div>
                <div className="flex mb-4 ban__la">
                <svg width="28px" height="28px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FF385C" fill-rule="evenodd" clip-rule="evenodd" d="M19.5 17.0001L18.377 11.5291H8.553C7.505 11.5291 7.114 12.1291 6.653 13.3761L5.5 17.0001H19.5Z" stroke="#FF385C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill="#FF385C" d="M18.3771 11.529L17.5281 7H12.1531" stroke="#FF385C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className="ml-2 mr-4 font-medium">Bàn là:</p>
                <h3>Có</h3>
                </div>
                <div className="flex mb-4">
                <svg className="w6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#FF385C" d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>                  
                  <p className="ml-2 mr-4">Tivi:</p>
                  <h3>Có</h3>
                </div>
            </div>
            <div>
              <div className="flex mb-2">
                <svg fill="#FF385C" width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,2.5H3a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1v-8A1,1,0,0,0,21,2.5Zm-3,8H6a1,1,0,0,1,0-2H18a1,1,0,0,1,0,2Zm0-4H17a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"/><path d="M12.793,14.793l-2,2a1,1,0,0,0,0,1.414l.293.293L9.793,19.793a1,1,0,1,0,1.414,1.414l2-2a1,1,0,0,0,0-1.414l-.293-.293,1.293-1.293a1,1,0,0,0-1.414-1.414Z"/><path d="M18.293,14.793l-2,2a1,1,0,0,0,0,1.414l.293.293-1.293,1.293a1,1,0,1,0,1.414,1.414l2-2a1,1,0,0,0,0-1.414l-.293-.293,1.293-1.293a1,1,0,0,0-1.414-1.414Z"/><path d="M7.293,14.793l-2,2a1,1,0,0,0,0,1.414l.293.293L4.293,19.793a1,1,0,1,0,1.414,1.414l2-2a1,1,0,0,0,0-1.414L7.414,17.5l1.293-1.293a1,1,0,0,0-1.414-1.414Z"/></svg>
                <p className="ml-2 mr-4">Điều hoà:</p>
                <h3>Có</h3>
              </div>
              <div className="flex mb-4">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#FF385C" d="M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>                  
                <p className="ml-2 mr-4 font-medium">Wifi:</p>
                <h3>Có</h3>
              </div>
              <div className="flex mb-4">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#FF385C" d="M345.7 48.3L358 34.5c5.4-6.1 13.3-8.8 20.9-8.9c7.2 0 14.3 2.6 19.9 7.8c19.7 18.3 39.8 43.2 55 70.6C469 131.2 480 162.2 480 192.2C480 280.8 408.7 352 320 352c-89.6 0-160-71.3-160-159.8c0-37.3 16-73.4 36.8-104.5c20.9-31.3 47.5-59 70.9-80.2C273.4 2.3 280.7-.2 288 0c14.1 .3 23.8 11.4 32.7 21.6c0 0 0 0 0 0c2 2.3 4 4.6 6 6.7l19 19.9zM384 240.2c0-36.5-37-73-54.8-88.4c-5.4-4.7-13.1-4.7-18.5 0C293 167.1 256 203.6 256 240.2c0 35.3 28.7 64 64 64s64-28.7 64-64zM32 288c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64 448 0 0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l0-96zM320 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                              
                <p className="ml-2 mr-4 font-medium">Nhà bếp:</p>
                <h3>Có</h3>
              </div>
              <div className="flex mb-4">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#FF385C" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM192 256l48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-48 0 0 64zm48 64l-48 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64 0-120c0-22.1 17.9-40 40-40l72 0c53 0 96 43 96 96s-43 96-96 96z"/></svg>                    
                <p className="ml-2 mr-4 font-medium">Đỗ xe:</p>
                <h3>Có</h3>
              </div>
              <div className="flex mb-4">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#FF385C" d="M128 127.7C128 74.9 170.9 32 223.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7l0 96.3 192 0 0-96.3C384 74.9 426.9 32 479.7 32c48.3 0 89 36 95 83.9l1 8.2c2.2 17.5-10.2 33.5-27.8 35.7s-33.5-10.2-35.7-27.8l-1-8.2c-2-15.9-15.5-27.8-31.5-27.8c-17.5 0-31.7 14.2-31.7 31.7L448 361c-1.6 1-3.3 2-4.8 3.1c-18 12.4-40.1 20.3-59.2 20.3c0 0 0 0 0 0l0-96.5-192 0 0 96.5c-19 0-41.2-7.9-59.1-20.3c-1.6-1.1-3.2-2.2-4.9-3.1l0-233.3zM306.5 389.9C329 405.4 356.5 416 384 416c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 469.7 417 480 384 480c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 405.2 165.1 416 192 416c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"/></svg>                  
                <p className="ml-2 mr-4 font-medium">Hồ bơi:</p>
                <h3>Có</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="booking" className="ml-32 mt-16">
          

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
              
              <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">200.000d/ đêm</h5>

              <div id="date-range-picker" date-rangepicker className="flex items-center mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input id="datepicker-range-start" name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhận phòng" />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input id="datepicker-range-end" name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Trả phòng" />
                </div>
              </div>

              <h5 className="mb-4 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Khách:</h5>
              
              <button type="button" className=" py-2.5 px-32 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-pink-400 rounded-lg border border-gray-200 hover:bg-pink-600 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100  ">Đặt phòng</button>

              
            
            </div>

          </div>


        </div>
      </div>

    </div>
  )
}
