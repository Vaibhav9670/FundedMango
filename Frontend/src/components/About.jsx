import React from 'react'

const About = () => {
  return (
  <>
    <div className='dark:bg-slate-900 dark:text-white'>
       {/* About section */}
       <div className="about  max-w-screen-2xl container mx-auto  md:px-20 px-4">
          <h1 className="text-left text-5xl mt-12">About</h1>
          <div className="about-content md:flex  items-center">
            <div className="about-text p-5  order-2 md:order-1 w-full md:w-1/2">
              <h2 className="mb-5">Our Mission</h2>
              <p>Funded Mango is a leading financial consulting firm dedicated to providing exceptional investment and trading opportunities, education, and alerts. Our goal is to empower individuals to achieve financial success through our funded account trading services and comprehensive resources</p>
              <button className="bg-green-600 text-white border-none px-5 py-2 mt-12 cursor-pointer hover:bg-green-700">Learn More</button>
            </div>
            <div className='About-img order-1 justify-center w-full md:w-1/2'>

            
            <img
              src="https://static.wixstatic.com/media/11062b_af4669cb563c48329d2139ee35c8d488~mv2.jpg/v1/crop/x_0,y_567,w_3400,h_3400/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portrait.jpg"
              alt=""
              className="mx-7 w-80 h-88"
              />
              </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="testimonials max-w-screen-2xl container mx-auto  md:px-20 px-4 dark:bg-slate-900 dark:text-whitedark:bg-slate-900 dark:text-white">
          <h1 className="text-left text-5xl mt-12 text-gray-800 dark:bg-slate-900 dark:text-white">Testimonials</h1>
          <h2 className="text-center mt-5 text-2xl text-orange-500 dark:text-blue-600">John Doe</h2>
          <h3 className="text-center my-2">I have significantly increased my trading profits since I started using Funded Mango's services. Their educational resources are invaluable.</h3>

          <div className="founder-1 my-5 ">
            <div className="separator h-0.5 bg-orange-500 dark:bg-blue-600 my-5"></div>
            <div className="founder-details  p-5 shadow-md">
              <div className="fonder-name font-semibold">Sara Smith</div>
              <div className="founder-role">Funded Mango guided me through the investment process and helped me secure my financial future.</div>
            </div>
          </div>

          <div className="founder-2 my-5 dark:bg-slate-900 dark:text-white">
            <div className="separator h-0.5 bg-orange-500 dark:bg-blue-600 my-5"></div>
            <div className="founder-details  p-5 shadow-md">
              <div className="fonder-name font-semibold">Ahmed Khan</div>
              <div className="founder-role">As an unemployed individual, Funded Mango provided me with the opportunity to generate extra income through trading.</div>
            </div>
          </div>

          <div className="founder-3 my-5">
            <div className="separator h-0.5 bg-orange-500 dark:bg-blue-600 my-5"></div>
            <div className="founder-details  p-5 shadow-md">
              <div className="fonder-name font-semibold">Maria Lopez</div>
              <div className="founder-role">I highly recommend Funded Mango to anyone looking to invest wisely and grow their wealth.</div>
            </div>
          </div>
        </div>
    </div>
  </>
  )
}

export default About
