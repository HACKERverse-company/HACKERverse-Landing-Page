import { Link } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import CATEN8logo_onTrans from '../../img/new/CATEN8logo_onTrans3.png'
import DenteonENDingLogo_stacked_outlines_blackChrome from '../../img/new/DenteonENDingLogo_stacked_outlines_blackChrome.png'
import HV_HEIMDALLdata_vikingfire_chromeOutline from '../../img/new/HEIMDALLdata_vikingfire_chromeOutline2.png'
import Anonybit from '../../img/new/Anonybit.png'
import DC719jack from '../../img/new/DC719jack2.png'
import HV_PLEXtrac_LogoWithBlackOutline from '../../img/new/PlexTrac-Logo-Stacked-Purplex-White-Lettering3.png'
import HV_PROCYON_BLUEoriginal from '../../img/new/PROCYON_BLUEoriginal3.png'
import HV_NATsec_unicorn_stickercut_blackChrome from '../../img/new/HV_NATsec_unicorn_stickercut_blackChrome.png'
import SPYDERswooshbat_PurpleBlue_onBlackChrome from '../../img/new/SPYDERswooshbat_PurpleBlue_onBlackChrome.png'
import HV_VIVAdere_CHROME from '../../img/new/HV_VIVAdere_CHROME.png'
import HVbsideslogointro from '../../img/new/HV-bsides-logo-intro.png'
import SAEPiologo_stickercut from '../../img/new/SAEPiologo_stickercut.png'
import BLUMIRApocscreen from '../../img/new/SENTEONpocscreen.jpg'
import gif1 from '../../img/new/gif1.gif'
import SideChat from '../../img/support.svg'
import orbmp4 from '../../img/orb/orb.gif'
import orbtwitter from '../../img/twitter.png'
import redorbyoutube from '../../img/redorb-youtube.png'
import redorbinsta from '../../img/redorb-insta.png'
import redorbdiscord from '../../img/redorb-discord.png'
import redorbreddit from '../../img/redorb-reddit.png'
import redorbtwitch from '../../img/redorb-twitch.png'
import HV_NEW_AI_Machine from '../../img/new/HV_NEW_AI_Machine_blues (1).png'
const Hero = lazy(() => import('./Hero'));
const Paragraph = lazy(() => import('./Paragraph'));
const Testimonials = lazy(() => import('./Testimonials'));
const Blogs = lazy(() => import('./Blogs'));
const Spotify = lazy(() => import('./Spotify'));
const PodcastVideo = lazy(() => import('./PodcastVideo'));
const Newsletter = lazy(() => import('./Newsletter'));
const Footer = lazy(() => import('./Footer'));
const Index = lazy(() => import('./Teams'));
const Quote = lazy(() => import('./Quote'));

const index = () => {

  return (
    <>
   <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>

      <section className="white-th eme bg-transparent" id="view-down">
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
          <div style={{ background: `url(${gif1}) center center / cover no-repeat` }}></div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap- justify-center">
            <div className="flex justify-center">
              <img loading="lazy" className="h-auto max-w-full rounded-lg" src={CATEN8logo_onTrans} alt="" />
            </div>
            <div className="flex justify-center">
              <img loading="lazy" className="h-auto max-w-full rounded-lg" src={DenteonENDingLogo_stacked_outlines_blackChrome} alt="" />
            </div>
            <div className="flex justify-center">
              <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HV_VIVAdere_CHROME} alt="" />
            </div>
            <div className="flex justify-center">
              <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HV_PROCYON_BLUEoriginal} alt="" />
            </div>
            <div className="flex justify-center">
              <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HV_PLEXtrac_LogoWithBlackOutline} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-10 justify-center -mt-6">
            <div className="flex justify-center">
              <img loading="lazy" className="h-auto max-w-full rounded-lg" src={Anonybit} alt="" />
            </div>
            <div className="flex justify-center">
              <img loading="lazy" className="h-auto max-w-full rounded-lg" src={SPYDERswooshbat_PurpleBlue_onBlackChrome} alt="" />
            </div>
            <div className="flex justify-center">
              <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HV_HEIMDALLdata_vikingfire_chromeOutline} alt="" />
            </div>
            <div className="flex justify-center">
              <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HV_NATsec_unicorn_stickercut_blackChrome} alt="" />
            </div>
          </div>

          <div className="flex">
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-1 justify-ter -mt-24 p-16">
              <div className="  justify-center">
                <img loading="lazy" className="h-auto max-w-full rounded-lg" src={HVbsideslogointro} alt="" />
              </div>
              <div className="  justify-center">
                <img loading="lazy" className="h-auto max-w-full" src={DC719jack} alt="" />
              </div>
              <div className="flex justify-center items-start">
                <img loading="lazy" className="h-auto max-w-full rounded-lg" src={SAEPiologo_stickercut} alt="" />
              </div>
            </div>
          </div>
          <div className="caption-area text-center bg-transparent pb-24">
            <Link to="https://hackerverse.quest/" className="lr-more mx-auto px-3 py-[12px] rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]" target='_blank'>Submerge into the HACKERverse®</Link>
          </div>

          <Quote />

          <div className="col-md-12 py-10 bg-transparent">
            <div className="content-are">
              <article>
                <div className="primary-heading">
                  <div className="title-lg mt-3 hover-underline">
                    Our Killer POC
                    <sup>
                      <span className="" style={{ fontSize: 15 }}>TM</span>
                    </sup>{" "}
                    Interface!
                  </div>
                </div>
              </article>
            </div>
            <section className="text-gray-600 body-font">
              <div className="container px- py-[20px] mx-auto">
                <div className="">
                  <img loading="lazy" src={BLUMIRApocscreen} height="100px" width="auto" className="demo-image rounded-3xl" />
                </div>
              </div>
            </section>
            <div className="caption-area text-center bg-transparent mt-20">
              <Link to="https://hackerverse.quest/" className="lr-more mx-auto px-3 py-[12px] rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]" target='_blank'>Skull Jack the HACKERverse®</Link>
            </div>

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
                <div className="container px- py-[20px] mx-auto">
                  <div className="">
                    <img loading="lazy" src={HV_NEW_AI_Machine} height="100px" width="auto" className="demo-image rounded-3xl" />
                  </div>
                </div>
              </section>
              <div className="caption-area text-center bg-transparent mt-24">
                <Link to="https://hackerverse.quest/" className="lr-more mx-auto px-3 py-[12px] rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]" target='_blank'>Immerse yourself in the HACKERverse®</Link>
              </div>
              <Suspense fallback={<div>Loading...</div>}>

              <Paragraph />
              <Testimonials />
              <Index />
              </Suspense>

              <div className="col-md-12">
              <Suspense fallback={<div>Loading...</div>}>

                <Blogs />
                <Spotify />
                <PodcastVideo />
                <Newsletter />
                <Footer />
              </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="speak">
        <div className="sup-icons-cont">
          <a href="https://discord.gg/hacer-rs-952244889192648775" target="_blank" rel="noopener noreferrer">
            <div className="sup-icon">
              <img loading="lazy" src={redorbdiscord} alt="Discord" />
            </div>
          </a>
          <a href="https://www.instagram.com/_hackerverse_/" target="_blank" rel="noopener noreferrer">
            <div className="sup-icon">
              <img loading="lazy" src={redorbinsta} alt="Instagram" />
            </div>
          </a>
          <a href="https://www.youtube.com/@theHACKERverse" target="_blank" rel="noopener noreferrer">
            <div className="sup-icon">
              <img loading="lazy" src={redorbyoutube} alt="Youtube" />
            </div>
          </a>
          <a href="https://www.reddit.com/u/theHACKERverse/" target="_blank" rel="noopener noreferrer">
            <div className="sup-icon">
              <img loading="lazy" src={redorbreddit} alt="Reddit" />
            </div>
          </a>
          <a href="https://www.twitch.tv/thehackerverse" target="_blank" rel="noopener noreferrer">
            <div className="sup-icon">
              <img loading="lazy" src={redorbtwitch} alt="Twitch" />
            </div>
          </a>
          <a href="https://twitter.com/_HACKERverse_" target="_blank" rel="noopener noreferrer">
            <div className="sup-icon">
              <img loading="lazy" src={orbtwitter} alt="Twitter" />
            </div>
          </a>
        </div>
        <div className="sup-rota">
          <img loading="lazy" src={SideChat} alt="Support Chat" />
        </div>
        <div className="video-cutter">
          <img loading="lazy" src={orbmp4} alt="Orb GIF" />
        </div>
      </div>
    </>
  )
}

export default index
