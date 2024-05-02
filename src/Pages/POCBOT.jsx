import React, { useState, useEffect, useRef } from 'react';
import Loader from '../img/Circle-Loading-ORB-gif.gif';
import BotLogo from '../img/logogreen.png';
import POCBOT from '../img/POCBOT.png';
import UserLogo from '../img/user1.jpg';
import toast, { Toaster } from 'react-hot-toast'
import Confetti from 'react-confetti';
import { Api } from '../Api/Api';

const Home = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setloading] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false); // State to control confetti visibility
    const [Blur, setBlur] = useState(false)
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const sendMessage = async (message) => {
        const response = await fetch(`${Api}/query`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: message }),
        });

        const data = await response.json();
        return data;
    };

    const handleSubmit = async (event) => {
        if (inputValue == '' || inputValue == null) { toast.error('Please Enter your Message.'); return }

        setloading(true)
        event.preventDefault();
        setMessages([
            ...messages,
            { type: 'user', text: inputValue },
            { type: 'bot', text: '...' },
        ]);
        setInputValue(''); // Clear the input field after submission

        const botResponse = await sendMessage(inputValue);

        setMessages([
            ...messages,
            { type: 'user', text: inputValue },
            { type: 'bot', text: botResponse },
        ]);
        if (botResponse.includes('CONGRULATIONS!')) {
            setShowConfetti(true);
            // Hide confetti after 5 seconds
            setTimeout(() => {
                setShowConfetti(false);
            }, 10000);
            setloading(false)
            toast.custom((t) => (
                <div
                    className={`${t.visible ? 'animate-enter' : 'animate-leave'
                        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={BotLogo}
                                    alt=""
                                />
                            </div>
                            <div className="ml-3 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                    HACKERverse®
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Your POC will come to your Email!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                        <button
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ))
        }
        setloading(false)

    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <>
            <section className="h-screen flex justify-center items-center  ">

                <div className={`container px-4 py-7 mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0  `}>
                    <div className="hidden md:block p-4 md:w-[25%] lg:w-[25%]  sidelogo">
                        <img src={Loader} className='h-[260px] w-auto' />
                    </div>
                    <div className=" md:w-[50%] lg:w-[50%] w-[100%] bg-black -300  rounded-3xl p icboxc">
                            <img src={POCBOT} alt="Your Image" className='mx-auto h-auto w-auto' />

                    
                    </div>
                    <div className="hidden md:block p-4 md:w-[25%] lg:w-[25%] sidelogo ">
                        <img src={Loader} className='h-[260px] w-auto' />
                    </div>
                </div>

                <Toaster />
            </section>
        </>
    )
}




export default Home;
