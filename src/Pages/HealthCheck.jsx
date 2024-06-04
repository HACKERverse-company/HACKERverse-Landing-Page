import React, { useEffect } from 'react'
import axios from 'axios';

const HealthCheck = () => {

    const fetchBlogs = async () => {
        try {
            const response = await axios.get(`https://hackerverse.uno/health`);
            alert('ok')
        } catch (error) {
            console.error('Error fetching Blogs:', error);
        }
    };

    useEffect(() => {
        fetchBlogs();
        window.scrollTo(0, 0);
    }, []);


    return (

        <div>HealthCheck</div>
    )
}

export default HealthCheck