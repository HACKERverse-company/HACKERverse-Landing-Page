import React,{useEffect,useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BLUMIRApocscreen from '../../img/new/BLUMIRApocscreen (1).jpg'
import axios from 'axios';
import { Api } from '../../Api/Api';

const Index = () => {
    // Dummy data representing team members
    const [Spotifys, setSpotifys] = useState([]);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

    const fetchSpotifys = async () => {
        try {
            const response = await axios.get(`${Api}/hv-comapny/Spotify/getall`);
            setSpotifys(response.data);

        } catch (error) {
            console.error('Error fetching Spotifys:', error);
        }
    };

    useEffect(() => {
        fetchSpotifys();
    }, []);

    return (
        <>
           

            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center  lg:px-6 ">
                    <div className="mx-auto   max-w-screen-sm ">
                        <h2 className="mb-2 text-4xl tracking-tight font-extrabold hover-underline text-white dark:text-white">
                            PODCASTS LOVE US!
                        </h2>
                    </div>
                </div>
            </section>

            <Carousel responsive={responsive}
                focusOnSelect={true}
            >
                {Spotifys.map((member) => (
                    <>
                            <section className="text-gray-600 body-font bg-black">
                                <div className="container px- py-[20px] mx-auto lg:p-32 md:p-32 p-2">
                                    {/* YouTube Video Embed */}
                                    <div className="relative overflow-hidden lg:pt-46 md:pt-46 pt-80">
 

                                        {/* Replace 'VIDEO_ID' with your YouTube video ID */}
                                        <iframe
                                            className=" overflow-hidden absolute inset-0 w-full h-full rounded-lg lg:p-32 md:p-32 p-2"
                                            src={member.link}
                                            title="YouTube Video"
                                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                                        ></iframe>
                                    </div>
                                </div>
                            </section>
                    </>
                ))}
            </Carousel>;
        </>
    );
};

export default Index;
