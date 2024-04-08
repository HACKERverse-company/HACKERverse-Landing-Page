import { useState, useEffect } from 'react'
import CATEN8logo_onTrans from '../../img/new/CATEN8logo_onTrans.png'
import DenteonENDingLogo_stacked_outlines_blackChrome from '../../img/new/DenteonENDingLogo_stacked_outlines_blackChrome.png'
import HV_HEIMDALLdata_vikingfire_chromeOutline from '../../img/new/HV_HEIMDALLdata_vikingfire_chromeOutline.png'
import HV_PLEXtrac_LogoWithBlackOutline from '../../img/new/HV_PLEXtrac_LogoWithBlackOutline.png'
import HV_PROCYON_BLUEoriginal from '../../img/new/HV_PROCYON_BLUEoriginal.png'
import HV_NATsec_unicorn_stickercut_blackChrome from '../../img/new/HV_NATsec_unicorn_stickercut_blackChrome.png'
import SPYDERswooshbat_PurpleBlue_onBlackChrome from '../../img/new/SPYDERswooshbat_PurpleBlue_onBlackChrome.png'
import HV_VIVAdere_CHROME from '../../img/new/HV_VIVAdere_CHROME.png'
import HVbsideslogointro from '../../img/new/HV-bsides-logo-intro.png'
import SAEPiologo_stickercut from '../../img/new/SAEPiologo_stickercut.png'
import BLUMIRAwordonlyChrome from '../../img/new/BLUMIRAwordonlyChrome.png'
import BLUMIRApocscreen from '../../img/new/SENTEONpocscreen.jpg'
import demos from '../../img/demos-icon.svg'
import HV_NEW_AI_Machine from '../../img/new/HV_NEW_AI_Machine_blues.png'
import CRAIG from '../../img/new/CRAIG.jpg'
import MARIANA from '../../img/new/MARIANA.jpg'
import SPYDERswooshbat from '../../img/new/SPYDERswooshbat_PurpleBlue_onBlackChrome.png'
import KeenSlider from 'keen-slider';
import Index from './Teams'
import Blogs from './Blogs'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import Paragraph from './Paragraph'
import TwoButtons from './TwoButtons'
import Footer from './Footer'
import Quote from './Quote'
import Hero from './Hero'
import PodcastVideo from './PodcastVideo'
import Spotify from './Spotify'
import SideChat from '../../img/support.svg'
import orb from '../../img/orb/orb.webm'
import orbmp4 from '../../img/orb/orb.webm'
import orbtwitter from '../../img/twitter.png'
import redorbyoutube from '../../img/redorb-youtube.png'
import redorbinsta from '../../img/redorb-insta.png'
import redorbdiscord from '../../img/redorb-discord.png'
import redorbreddit from '../../img/redorb-reddit.png'
import redorbtwitch from '../../img/redorb-twitch.png'
import gif1 from '../../img/gif.gif'
const index = () => {

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="description" content="Hackerverse™ is the 'hands-on demo tool' of choice for non-cybersecurity and cybersecurity professionals. Rent-a-Demo today." />
      <meta name="title" content="HACKERverse®" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="css/bootstrap.css" rel="stylesheet" />
      <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="css/banner.css" />
      <link rel="stylesheet" href="css/footer.css" />
      <link rel="stylesheet" href="css/common.css" />
      <link rel="stylesheet" href="css/orb.css" />
      <link rel="stylesheet" href="css/slick.css" />
      <link rel="stylesheet" href="css/slick-theme.css" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/pagedone@1.1.2/src/css/pagedone.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-RRQIeP9fF0W4BrJoj5ftyp6MUE6wPa34veqO+eEyTCtJhN8L7L6U7p6lyHRyiw2Z" crossOrigin="anonymous" />
      <title>HACKERverse®</title>


      <Hero />

      <section className="white-theme" id="view-down">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-are">
                <article>
                  <div className="primary-heading">
                    <div className="lg:text-4xl md:text-4xl text-3xl hover-underline">
                      Meet our Rockstar Customers!
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          {/*  */}
          <section className="text-gray-600 body-font container mx-auto ">
            <div className="container py-4 mx-auto   ">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
                  <a className="blo ck relative h-48 rounded over -hidden">
                    <img
                      alt="CATEN8logo_onTrans"
                      className="object-cover cursor-pointer object-center w-full h   "
                      src={CATEN8logo_onTrans}
                    // src="/img/"
                    />
                  </a>
                </div>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
                  <a className="bloc k relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover cursor-pointer object-center w-full h- "
                      src={DenteonENDingLogo_stacked_outlines_blackChrome}
                    />
                  </a>
                </div>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
                  <a className="b lock relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="objec t-cover object-ce nter w-full  "
                      src={HV_HEIMDALLdata_vikingfire_chromeOutline}
                    />
                  </a>
                </div>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
                  <a className="blo ck relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover cursor-pointer object-center w-full k"
                      src={HV_PLEXtrac_LogoWithBlackOutline}
                    />
                  </a>
                </div>
                <div className="lg:w-1/5 md:w-1/2 p-4 w-full">
                  <a className="b lock relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover cursor-pointer object-center w-full k"
                      src={HV_PROCYON_BLUEoriginal}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            className="text-gray-600 body-font container mx-auto  "
            style={{ marginTop: "-65px" }}
          >
            <div className="container   mx-auto to   ">
              <div className="flex justify-center  flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="blo ck relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover cursor-pointer object-center w-full mx-auto ck"
                      src={HV_NATsec_unicorn_stickercut_blackChrome}
                    />
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="blo ck relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover cursor-pointer object-center w-full mx-auto ck"
                      src={SPYDERswooshbat_PurpleBlue_onBlackChrome}
                    />
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="b lock relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover cursor-pointer object-center w-full mx-auto  k"
                      src={HV_VIVAdere_CHROME}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className='' style={{ background: `url(${gif1}) center center / cover no-repeat`,}}>
        
          <section
            className="text-gray-600 body-font container mx-auto "
            style={{ marginTop: "-70px" }}
          >
            <div className="container   mx-auto to   ">
              <div className="flex justify-center  flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                  <a className="blo ck relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover cursor-pointer object-center w-full mx-auto ck"
                      src={HVbsideslogointro}
                    />
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full ccc">
                  <a className="blo ck relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover cursor-pointer object-center w-full mx-auto ck"
                      src={SAEPiologo_stickercut}
                    />
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full ccc">
                  <a className="b lock relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover cursor-pointer object-center w-full mx-auto mt-20 k"
                      src={BLUMIRAwordonlyChrome}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          </div>
          <Quote />

          {/* two pics */}
          <div className="col-md-12 py-10">
            <div className="content-are">
              <article>
                <div className="primary-heading">
                  <div className="title-lg mt-3 hover-underline">
                    Our Killer POC
                    <sup>
                      <span className="" style={{ fontSize: 15 }}>
                        TM
                      </span>
                    </sup>{" "}
                    Interface!
                  </div>
                </div>
              </article>
            </div>
            <section className="text-gray-600 body-font">
              <div className="container px- py-[20px] mx-auto ">
                <div className=" ">
                  <img
                    src={BLUMIRApocscreen}
                    height="100px"
                    width="auto"
                    className="demo-image rounded-3xl"
                  />
                </div>
              </div>
            </section>
            {/*  */}
            {/*  */}
            <div className="col-md-12 py-10">
              <div className="content-are">
              
                <article>
                  <div className="primary-heading pt-24">
                    <div className="title-lg mt-3 hover-underline">
                      How it Works
                    </div>
                  </div>
                </article>
              </div>
              <section className="text-gray-600 body-font">
                <div className="container px- py-[20px] mx-auto ">
                  <div className=" ">
                    <img
                      src={HV_NEW_AI_Machine}
                      height="100px"
                      width="auto"
                      className="demo-image rounded-3xl"
                    />
                  </div>
                </div>
              </section>
              <TwoButtons />
              <Paragraph />
              <Testimonials />
              <Index />
              <div className="col-md-12  ">
                <Blogs />
                <Spotify/>
                <PodcastVideo/>
               
                <Newsletter />

                <Footer />
                <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/966f7b93-5e51-4195-86e2-96bd13ed377e"></iframe>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="speak">
        <div className="sup-icons-cont">
          <a href="https://discord.gg/hacer-rs-952244889192648775" target="_blank">
            <div className="sup-icon">
              <img src={redorbdiscord} />
            </div>
          </a>
          <a href="https://www.instagram.com/_hackerverse_/" target="_blank">
            <div className="sup-icon">
              <img src={redorbinsta} />
            </div>
          </a>
          <a href="https://www.youtube.com/@theHACKERverse" target="_blank">
            <div className="sup-icon">
              <img src={redorbyoutube} />
            </div>
          </a>
          <a href="https://www.reddit.com/u/theHACKERverse/" target="_blank">
            <div className="sup-icon">
              <img src={redorbreddit} />
            </div>
          </a>
          <a href="https://www.twitch.tv/thehackerverse" target="_blank">
            <div className="sup-icon">
              <img src={redorbtwitch} />
            </div>
          </a>
          <a href="https://twitter.com/_HACKERverse_" target="_blank">
            <div className="sup-icon">
              <img src={orbtwitter}/>
            </div>
          </a>
          {/* <a href="https://www.pinterest.com/thehackerverse/" target="_blank">
    <div class="sup-icon">
      <img src="img/pinterest.svg">
    </div>
  </a>         */}
        </div>
        <div className="sup-rota">
          <img src={SideChat} />
        </div>
        <div className="video-cutter">

          <video playsInline="" autoPlay="" muted="" loop="" data-setup="{}">
            {/* <source src={orb} type="video/webm" /> */}
            <source src={orbmp4}   />
          </video>
        </div>
      </div>

    </>
  )
}

export default index