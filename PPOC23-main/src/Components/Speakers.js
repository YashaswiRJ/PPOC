import React from 'react';
import Slider from 'react-slick';
import './Speakers.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Speaker } from '@mui/icons-material';

const Speakers = () => {
  const sliderSettings = {
    dots:true,
    infinite: true, // Loop the slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on each navigation
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1125,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Sample data for your slider
  const sliderData = [
    {
      image: "Speakers/piyush.jpg",
      name:"Piyush Goyal",
    },
    {
      image: 'Speakers/subrimanyam.jpeg',
      name:"Dr. Subrimanayam Swamy",
    },
    {
      image: 'Speakers/durgashankar.jpg',
      name:"Durga Shankar Mishra",
    },
    {
      image: 'Speakers/saurabh.jpg',
      name:"Saurabh Dwivedi",
    },
    {
      image: 'Speakers/shweta.jpeg',
      name:"Shweta Singh",
    },
    {
      image: 'Speakers/navika.jpg',
      name:"Navika Kumar",
    },
    
  ];

  return (
    <div className='speaker-container'>
    <Slider {...sliderSettings}>
      {sliderData.map((slide, index) => (
        <div key={index}>
            <div className='speaker-boxs'>
            <p className='speaker'><img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="speaker-image" 

            /><h4> {slide.name}</h4></p>
            </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Speakers;