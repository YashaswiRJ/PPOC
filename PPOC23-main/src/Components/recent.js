import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slides
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on each navigation
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  // Sample data for your slider
  const sliderData = [
    {
      image: "Recent/r1.png",
      text: "Navigating global challenges at the UNHRC, Model United Nations, during IIT Kanpur's Policy Conclave. Calling all diplomats and advocates to join the discourse on human rights, 26-28 Jan 2024. Let's make an impact together! 🌍🕊️ #UNHRC #PolicyConclave2024 #pc24 #GlobalDialogue #ppoc #mygov #mea #mun",
      link:"https://www.instagram.com/p/C04ocrePlqa/",
    },
    {
      image: "Recent/r2.png",
      text: "Dive into the world of nuclear diplomacy at the International Atomic Energy Agency session under MUN during IIT Kanpur's Policy Conclave. Calling all innovators and strategists to join us for insightful discussions, 26-28 Jan 2024. Let's shape the future of global security together! ☢️🌐 #IAEA #MUN #PolicyConclave2024 #GlobalSecurity #mea #mygov #ppoc #pc24 #iitk",
      link:"https://www.instagram.com/p/C06rIRgPeb4/",
    },
    {
      image: "Recent/r3.png",
      text: "This is an open call for all passionate delegates and enthusiasts! Join us at the All-India Political Parties Meet, Model United Nations from Jan 26-28, 2024, Policy Conclave, for an engaging discussion on electoral reforms and the future of ethical elections.Embrace the opportunity to be a part of shaping transparent and fair electoral processes. Let's unite for change! Registration forms will be out soon to be a part of this transformative experience.", 
      link:"https://www.instagram.com/p/C02Ai8Svg5o/",
    },
    {
      image: "Recent/r4.png",
      text: "Seeking solutions for global harmony! We are inviting you to the IIT Kanpur Model United Nations, Jan 26-28. Join us in the United Nations Security Council session, where we'll tackle the Israel-Palestine conflict, striving for lasting peace amidst rising tensions. Your voice matters—let's build bridges, not walls. Register now and become part of this transformative dialogue! #ppoc #policyconclave #mea #mygov #pc24 #IITKanpurMUN #UNSC #PeaceBuilding #GlobalUnity",
      link:"https://www.instagram.com/p/C09SOZxP60y/",
    },
    {
      image: "/image1.jpg",
      text: '"Celebrating the Birth of a Legend" Today, on the auspicious day of October 2, let us remember Bapu, who showed us the power of truth, non-violence, and love for all. His teachings continue to inspire us to be the change we wish to see in the world. His principles of non-violence and truth continue to inspire leaders and movements worldwide, promoting peaceful resistance and social change.',
      link:"https://www.instagram.com/p/Cx3gzmLIt1Y/",
    },
    {
      image: '/image2.jpg',
      text: 'Greetings from the Public Policy and Opinion Cell! Are you intrigued by a career in civil services? Or perhaps you \'re in search of that extra push or guidance to gear up for the challenging path ahead?So, we are coming up with \'INSPIRE\'. A seminar in association with @vision_ias where you\'ll get all your answers.',
      link:"https://www.instagram.com/p/CxukNi-gAhP/",
    },
    {
      image: '/image3.jpg',
      text: 'Greetings from Public Policy and Opinion Cell, IIT Kanpur! Congratulations to Every Indian on the Successful landing of Chandrayaan 3 Rover \'Vikram\' on the South Pole of the Moon. India Has become the 4th Nation to land on Moon, and 1st to land on the South Pole. Kudos to ISRO and All the Supporting Agencies involved!',
      link:"https://www.instagram.com/p/CwVHgsQIGY1/",
    },
  ];

  return (
    <div className='slider-container'>
    <Slider {...sliderSettings}>
      {sliderData.map((slide, index) => (
        <div key={index} className="slider-slide">
            
            <div className='slider-image'><img
              src={slide.image}
              alt={`Slide ${index + 1}`}
        
            />
            </div><div className='slider-content'>
            <div className='slider-text'>{slide.text}</div>
            <a href={slide.link} class="blog-btn">Read More</a>
        </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ImageSlider;
