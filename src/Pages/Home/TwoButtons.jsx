import React from 'react'
import gif1 from '../../img/gif2.gif'
import { Link } from 'react-router-dom'

const TwoButtons = () => {
  return (
    <>

<section className="text-gray-600 body-font bg-black rounded-full picbox1 mt-10 mb-10">
  <div className="container px-4 py-24 mx-auto text-center">
    <div className="flex flex-wrap -m-4 justify-center">
      <div className="p-4 md:w-1/2 w-full">
        <Link to='/contact' className="inline-flex border-0 py-2 px-4 rounded-full text-lg let-joinus-button1">Vendors, Join the PoC Revolution Now!</Link>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <Link to='/contact' className="inline-flex border-0 py-2 px-4 rounded-full text-white text-lg let-joinus-button2">Buyers, shop the PoC platform!</Link>
      </div>
    </div>
  </div>
</section>



      {/* <div className="col-md-12 py-24 bg-black rounded-full picbox1 mt-10 mb-10" style={{ background: `url(${gif1}) center center / cover no-repeat`, }}>


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
              <Link to='/contact' className="let-joinus-button1">
                Vendors, Join the PoC Revolution Now! &gt;&gt;&gt;
              </Link>
            </div>
            <div className="sm:w-full md:w-1/2 mb-10 px-4">
              <Link to='/contact' className="let-joinus-button2">
                Buyers, shop the PoC platform! &gt;&gt;&gt;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div> */}

    </>
  )
}

export default TwoButtons