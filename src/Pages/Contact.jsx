import React, { useEffect, useState } from 'react'
import Footer from './Home/Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "22582640",
                    formId: "90d90e4b-9de1-40f3-ac7e-648e92a6a8e1",
                    target: '#hubspotForm' // Specify the target element where the form will be rendered
                });
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your logic to submit the form data to HubSpot
        if (window.hbspt) {
            window.hbspt.forms.submit({
                portalId: "22582640",
                formId: "e8d0a2af-d0dc-4ee5-97e2-10409128dce5",
                fields: {
                    // Map your form fields to HubSpot fields
                    'firstname': e.target.name.value,
                    'email': e.target.email.value,
                    'message': e.target.message.value
                }
            });
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top left corner of the page on component mount
    }, []);
    return (
        <>
            <div className='container mx-auto relative'>
                <Link to="/" class="flex items-center absolute top-16 left-4 z-50 bg-slate-700 p-1 rounded-full pr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className='text-[#a0ff00] hover:underline pr-1'>Go Back</span>
                </Link>
                <section className=" ">
                    <div className="container px-6 py-12 mx-auto">
                        <div className="text-center ">
                            <p className="font-medium  text-[#a0ff00]">Contact us</p>

                            <h1 className="mt-2 text-2xl font-semibold  md:text-3xl text-white">We’d love to hear from you</h1>

                            <p className="mt-3 text-gray-400">Chat to our friendly team.</p>
                        </div>

                        <img className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96" src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100" alt="" />

                        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2 ">
                            <div className="p-4 rounded-lg  bg-gray-800">
                                <span className="inline-block p-3 text-[#a0ff00] rounded-lg  bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>

                                <h2 className="mt-4 text-base font-medium text-white">Chat to sales</h2>
                                <p className="mt-2 text-sm text-gray-400">Speak to our friendly team.</p>
                                <p className="mt-2 text-sm text-[#a0ff00]">hello@merakiui.com</p>
                            </div>

                            <div className="p-4 rounded-lg   md:p-6  bg-gray-800">
                                <span className="inline-block p-3 text-[#a0ff00] rounded-lg bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>

                                <h2 className="mt-4 text-base font-medium text-white">Visit us</h2>
                                <p className="mt-2 text-sm text-gray-400">Visit our office HQ..</p>
                                <p className="mt-2 text-sm text-[#a0ff00]">100 Smith Street Collingwood VIC 3066 AU</p>
                            </div>

                            <div className="p-4 rounded-lg  md:p-6 bg-gray-800">
                                <span className="inline-block p-3 text-[#a0ff00] rounded-lg   bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </span>

                                <h2 className="mt-4 text-base font-medium text-white">Call us</h2>
                                <p className="mt-2 text-sm text-gray-400">Mon-Fri from 8am to 5pm.</p>
                                <p className="mt-2 text-sm text-[#a0ff00]">+1 (555) 000-0000</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-gray-900 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-1/2 md:w-2/3 mx-auto bg-gray-900 p-10 rounded-2xl picbox1">
                            <form onSubmit={handleSubmit}>
                                <div id="hubspotForm">
                                    {/* This div will be replaced by the HubSpot form */}
                                </div>

                            </form>
                        </div>
                    </div>
                </section>



                <div className='pt-28 px-28 rounded'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Contact