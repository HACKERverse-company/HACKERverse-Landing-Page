import React from 'react'
import gif1 from '../../img/gif2.gif'

const Paragraph = () => {
  return (
    <> <section className="text-gray-600 body-font" style={{ background: `url(${gif1}) center center / cover no-repeat`,}}>
    <hr
      style={{ color: "rgb(222, 219, 219)", fontSize: 20, padding: 2 }}
    />
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        <div className="sm:w-1/2 mb-10 px-4">
          <h2 className="title-font text-3xl font-medium text-gray-300 mt-6 mb-3">
            Integrate
          </h2>
          <p className="leading-relaxed text-base font-medium">
            Integrate like a boss! The HACKERverse syncs with your
            tools, tech-stack, and CRM.
          </p>
        </div>
        <div className="sm:w-1/2 mb-10 px-4">
          <h2 className="title-font text-3xl font-medium text-gray-300 mt-6 mb-3">
            Scale
          </h2>
          <p className="leading-relaxed text-base font-medium">
            Easily scale your PoC process and free up your team’s time.
          </p>
        </div>
        <div className="sm:w-1/2 mb-10 px-4">
          <h2 className="title-font text-3xl font-medium text-gray-300 mt-6 mb-3">
            Velocity
          </h2>
          <p className="leading-relaxed text-base font-medium">
            Faster Time to close won. Buyers crave hands-on experiences
            and self-driven sales motions.
          </p>
        </div>
        <div className="sm:w-1/2 mb-10 px-4">
          <h2 className="title-font text-3xl font-medium text-gray-300 mt-6 mb-3">
            Continuous
          </h2>
          <p className="leading-relaxed text-base font-medium">
            Get continuous product feedback from customers experiencing
            your PoC.
          </p>
        </div>
        <div className="sm:w-1/2 mb-10 px-4 centered">
          <h2 className="title-font text-3xl font-medium text-gray-300 mt-6 mb-3">
            Community
          </h2>
          <p className="leading-relaxed text-base font-medium">
            Our thriving HACKERverse community gives you access to 5,000
            practitioners and security team leaders. .
          </p>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default Paragraph