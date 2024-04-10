import React from 'react'
import demos from '../../img/demos-icon.svg'
import logo from '../../img/logo.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className="banner-top bg-black  ">
      <div className="custom-container">
        <div className="logo">
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="bnr-sec">
          <div className="caption-area text-center">
            <div className="demos-btn">
              <span className="ico">
                <img src={demos} alt="demos" />
              </span>
              <span className="txt">Data. Dissent. Disrupiton. Destroying the POC Maelstrom.</span>
            </div>
            <div className="title-tp   text-center text-lg mx-auto">
              Welcome to the HACKERverse®
            </div>
            <p>
              AI-Powered Self-Service PoC Platform for Cybersecurity. Our
              cutting-edge AI platform makes it a breeze for everyone to give
              cybersecurity software a try!
            </p>
            <Link
              to="/contact/"
              className="lr-more mx-auto px-3"
            >
              Join the PoC Revolution Now!
            </Link>
          </div>
        </div>
        <a href="#view-down" className="scroll-down" address="true" />
      </div>
    </div>
</>
  )
}

export default Hero