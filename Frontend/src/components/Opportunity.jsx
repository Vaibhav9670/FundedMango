import React, { useState, useEffect } from 'react'; // Add useState and useEffect imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards'; // Only import Cards once
import axios from 'axios';
import  list from "../../public/list.json"


const Opportunities = () => {
  const [course, setCourse] = useState([]); // Initialize state

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("http://localhost:4002/course");

        console.log(res.data);
        setCourse(res.data);
      } catch (error) {
        console.log("Error:", error);
        setCourse(list)
      }
    };
    getCourse();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 dark:bg-slate-900 dark:text-white'>
      <div>
        <h1 className='font-semibold md:p-10 text-4xl py-3'>Opportunities</h1>
      </div>

      <div>
        <Slider {...settings}>
          {course.map((item) => (
            <Cards item={item} key={item.id} />  
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Opportunities;
