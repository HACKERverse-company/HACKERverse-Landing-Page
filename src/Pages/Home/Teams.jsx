import React,{useEffect,useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import { Api } from '../../Api/Api';

const Index = () => {
  const [Team, setTeam] = useState([]);

 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const fetchTeam = async () => {
    try {
        const response = await axios.get(`${Api}/hv-comapny/team/getall`);
        setTeam(response.data);

    } catch (error) {
        console.error('Error fetching Team:', error);
    }
};

useEffect(() => {
    fetchTeam();
}, []);

  return (
    <>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center  lg:px-6 ">
          <div className="mx-auto   max-w-screen-sm ">
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold hover-underline text-white dark:text-white">
              Our team
            </h2>
          </div>
        </div>
      </section>

      
      <Carousel responsive={responsive}
        focusOnSelect={true}
      >
        {Team.map((member) => (
          <div key={member.id} className="text-center  hover:text-black text-[#a0ff00] dark:text-gray-400 cursor-pointer rounded-2xl  hover:bg-[#a0ff00] picbox1 pt-[20px]">
            <img
              className="mx-auto mb-4 w-36 h-36 rounded-full"
              src={member.pic}
              loading="lazy" 
              alt={`${member.name}'s Avatar`}
            />
            <h3 className="mb-1 text-2xl font-medium tracking-tight  hover:text-black  ">
              <p href="#">{member.name}</p>
            </h3>
            <p className='text-gray-500'>{member.designation}</p>
            <ul className="flex justify-center mt-4 space-x-4">
            </ul>
          </div>
        ))}

      </Carousel>;
    </>
  );
};

export default Index;
