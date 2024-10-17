import React from 'react'


const Footer = () => {
  return (
    <div className="">
     <footer className="footer bg-base-200 text-base-content p-10 dark:bg-slate-800 dark:text-white">
  <div>
    <h2 className='font-bold'>Funded Mango</h2>
    <div className=" grid-flow-col gap-8">
        <div className="info">
        <p>123-456-789</p>
        <p>info@mysite.com</p>
        </div>
        <div className="address w-full">
            <p>500 Terry Francine Street, 6th Floor, San Francisco, CA 94158</p>
        </div>
    </div>
  </div>
  <form>
    <h6 className="footer-title  dark:text-white">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text dark:text-white">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>

    </div>
  )
}

export default Footer
