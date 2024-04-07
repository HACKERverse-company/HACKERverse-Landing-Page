import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { Api } from '../../Api/Api';

const Index = () => {
    const [Reviews, setReviews] = useState([]);
    // Dummy data representing testimonials


    const fetchReviews = async () => {
        try {
            const response = await axios.get(`${Api}/hv-comapny/Reviews/getall`);
            setReviews(response.data);

        } catch (error) {
            console.error('Error fetching Reviews:', error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
           
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center  lg:px-6 ">
                    <div className="mx-auto   max-w-screen-sm ">
                        <h2 className="mb-2 text-4xl tracking-tight font-extrabold hover-underline text-white dark:text-white">
                            Our Testimonials
                        </h2>
                    </div>
                </div>
            </section>

            <Carousel responsive={responsive} focusOnSelect={true}>
                {Reviews.map((testimonial) => (
                    <div class="max-w-xl mt-12 mx-auto p-4 mb-40 cursor-pointer picbox1 rounded-2xl ">
                        <div class="flex flex-col items-center text-center ">
                            <img src={testimonial.pic} class="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white" />

                            <div class="mt-4">
                                <h4 class="text-sm font-extrabold text-white">{testimonial.name} </h4>
                                <p class="text-xs text-[#a0ff00] font-bold mt-1">{testimonial.designation}, {testimonial.company}</p>
                            </div>
                        </div>
                        <div class="mt-4 text-center">
                            <p class="text-sm leading-relaxed text-gray-400">{testimonial.review} </p>
                        </div>
                    </div>

                ))}
            </Carousel>
           
        </>
    );
};

export default Index;
