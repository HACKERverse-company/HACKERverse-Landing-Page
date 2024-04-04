import React from 'react'
import gif1 from '../../img/gif1.gif'

const TwoButtons = () => {
  return (
    <>    <div className="col-md-12 py-24" style={{ background: `url(${gif1}) center center / cover no-repeat`,}}>
    <hr
      style={{ color: "rgb(222, 219, 219)", fontSize: 20, padding: 2 }}
    />
    <div className="content-area mt-5">
      <article>
        <div className="primary-heading text-center">
          <div className="title-lg mt-3 hover-underline">Join Us!</div>
        </div>
      </article>
    </div>
    <section className="text-gray-600 body-font">
      <div className="container py-10 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-full md:w-1/2 mb-10 px-4">
            <button className="let-joinus-button1">
              Vendors, Join the PoC Revolution Now! &gt;&gt;&gt;
            </button>
          </div>
          <div className="sm:w-full md:w-1/2 mb-10 px-4">
            <button className="let-joinus-button2">
              Buyers, shop the PoC platform! &gt;&gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  </div></>
  )
}

export default TwoButtons