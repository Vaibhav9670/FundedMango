import React from 'react'

const demo = () => {
  return (
    <div>
         {/* Part-1 */}
    <div className="navbar bg-base-100">
  <div className="flex-1">
    {/* Section-1 */}
    <a className="btn btn-ghost text-xl">
    Funded Mango</a>
    {/* Section-2 */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
      {/* Section-3 */}
      <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    </div>
  </div>
 {/* Part 2 */}
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}
// Aise hi rakhe hai jaruri hai
<div className="end-text grid justify-self-start self-baseline">
              <img
                src="https://static.wixstatic.com/media/11062b_2d2ded120d744731a9d6be869155521d~mv2.jpg/v1/fill/w_160,h_181,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portrait.jpg"
                alt=""
                className="max-w-[70%]"
              />
              <p className="max-w-[80%] px-7 py-2">Invest, trade, and grow with Funded Mango.</p>
            </div>
export default demo
{/* Opportunities section */}
<div className="opportunities my-10">
<h1 className="text-left text-5xl text-gray-800 mt-24">Opportunities</h1>
<div className="separator h-0.5 bg-orange-500 my-5"></div>
<ul id="opp-List" className="flex flex-wrap gap-4 list-none">
  <li>
    <div className="card bg-white text-center p-5 my-5 mx-auto w-[218px] shadow-md">
      <img
        src="https://static.wixstatic.com/media/8df0ce_db8ed485231b4044a8fe50d84258f7d0~mv2.png/v1/fill/w_202,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8df0ce_db8ed485231b4044a8fe50d84258f7d0~mv2.png"
        alt=""
        className="w-full h-auto"
      />
      <p>wealth-building-strategy-session</p>
      <p>$179</p>
    </div>
  </li>
</ul>
</div>

//about and terminal section rakh rahe
{/* About section */}
<div className="about my-10">
<h1 className="text-left text-5xl mt-12">About</h1>
<div className="about-content flex justify-between items-center">
  <div className="about-text p-5">
    <h2 className="mb-5">Our Mission</h2>
    <p>Funded Mango is a leading financial consulting firm dedicated to providing exceptional investment and trading opportunities, education, and alerts. Our goal is to empower individuals to achieve financial success through our funded account trading services and comprehensive resources</p>
    <button className="bg-green-600 text-white border-none px-5 py-2 mt-12 cursor-pointer hover:bg-green-700">Learn More</button>
  </div>
  <img
    src="https://static.wixstatic.com/media/11062b_d343fdbf634342bbb9b971c7203d46dd~mv2.jpg/v1/crop/x_1133,y_0,w_4534,h_4534/fill/w_283,h_356,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portrait.jpg"
    alt=""
    className="w-[240px] m-2"
  />
  <img
    src="https://static.wixstatic.com/media/11062b_af4669cb563c48329d2139ee35c8d488~mv2.jpg/v1/crop/x_0,y_567,w_3400,h_3400/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Portrait.jpg"
    alt=""
    className="w-[240px] m-2"
  />
</div>
</div>

{/* Testimonials section */}
<div className="testimonials my-10">
<h1 className="text-left text-5xl mt-12 text-gray-800">Testimonials</h1>
<h2 className="text-center mt-5 text-2xl text-orange-500">John Doe</h2>
<h3 className="text-center my-2">I have significantly increased my trading profits since I started using Funded Mango's services. Their educational resources are invaluable.</h3>

<div className="founder-1 my-5">
  <div className="separator h-0.5 bg-orange-500 my-5"></div>
  <div className="founder-details bg-white p-5 shadow-md">
    <div className="fonder-name">Sara Smith</div>
    <div className="founder-role">Funded Mango guided me through the investment process and helped me secure my financial future.</div>
  </div>
</div>

<div className="founder-2 my-5">
  <div className="separator h-0.5 bg-orange-500 my-5"></div>
  <div className="founder-details bg-white p-5 shadow-md">
    <div className="fonder-name">Ahmed Khan</div>
    <div className="founder-role">As an unemployed individual, Funded Mango provided me with the opportunity to generate extra income through trading.</div>
  </div>
</div>

<div className="founder-3 my-5">
  <div className="separator h-0.5 bg-orange-500 my-5"></div>
  <div className="founder-details bg-white p-5 shadow-md">
    <div className="fonder-name">Maria Lopez</div>
    <div className="founder-role">I highly recommend Funded Mango to anyone looking to invest wisely and grow their wealth.</div>
  </div>
</div>
</div>