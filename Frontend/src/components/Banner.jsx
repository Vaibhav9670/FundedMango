import React from 'react'

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
      {/* Main-1 start here */}
      <div className="main-1">
        <main className="text-center py-20 ">
          <div className="about-main md:flex items-center py-5 ">
            <div className="welcome-text p-5  order-2 md:order-1 w-full md:w-1/2">
              <h1 className="text-left text-4xl text-gray-800 mt-12 mb-5 dark:bg-slate-900 dark:text-white ">DISCOVER FINANCIAL GROWTH!!!</h1>

              <p className="mb-5">Welcome to Funded Mango, your gateway to financial success. Explore our diverse range of investment opportunities and resources to start your journey towards prosperity.</p>
              
              {/* Input Email */}

              <label className="input input-bordered flex my-6 items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
              {/* Button Start */}
              <button className="bg-orange-500 dark:bg-blue-600 text-white border-none px-5 py-2 cursor-pointer transition-all duration-300 hover:bg-black">Join Now</button>

            </div>
            <div className="main-img order-1 justify-center w-full md:w-1/2">

              <img
                src="https://static.wixstatic.com/media/11062b_6bf209c641ba4b158e793c1f1e2dc58c~mv2.jpg/v1/fill/w_410,h_519,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portrait.jpg"
                alt=""
                className="mx-7 w-80 h-88"
              />
            </div>

          </div>
        </main>

        {/* Services section */}
        <div className="services my-10">
          <h1 className="text-left text-5xl text-gray-800 mt-24 dark:bg-slate-900 dark:text-white">Services</h1>
          <div className="separator h-0.5 bg-orange-500 dark:bg-blue-600 my-5"></div>

          <div className="service-1 grid grid-cols-3 p-5  shadow-md my-2">
            <div className="service-name text-xl mb-2">Trading Signals</div>
            <div className="service-fee text-orange-500 dark:text-blue-600 text-lg mb-2">$100</div>
            <button className="bg-orange-500 dark:bg-blue-600 text-white border-none px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-[#d65c1e]">Book Now</button>
          </div>
          <div className="separator h-0.5 bg-orange-500 dark:bg-blue-600 my-5"></div>

          <div className="service-2 grid grid-cols-3 p-5  shadow-md my-2">
            <div className="service-name text-xl mb-2">Investment Consulting</div>
            <div className="service-fee text-orange-500 dark:text-blue-600 text-lg mb-2">$150</div>
            <button className="bg-orange-500 dark:bg-blue-600 text-white border-none px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-[#d65c1e]">Book Now</button>
          </div>
          <div className="separator h-0.5 bg-orange-500 dark:bg-blue-600 my-5"></div>

          <div className="service-3 grid grid-cols-3 p-5  shadow-md my-2">
            <div className="service-name text-xl mb-2">Trading Education</div>
            <div className="service-fee text-orange-500 dark:text-blue-600 text-lg mb-2">$200</div>
            <button className="bg-orange-500 dark:bg-blue-600 text-white border-none px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-[#d65c1e]">View Course</button>
          </div>
          <div className="separator h-0.5 bg-orange-500 dark:bg-blue-600 my-5"></div>
        </div>

        

        
      </div>

    </div>
  )
}

export default Banner
