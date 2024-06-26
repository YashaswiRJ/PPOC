import React from 'react';
import './blog.css';
import data from '../database/projectdata.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCard = ({ blogs }) => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the number of slides for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
      <div className="slider-container-blog">
        {/* Content including slider */}
        <Slider {...settings}>
        {data.projects.map((blog) => (
            <div className="blog-box-slide" key={blog.id}>
                <div className="blog-img">
                    <a href={blog['Read more']} target="_blank" rel="noopener noreferrer">
                        <img src={blog.image} alt="" />
                    </a>
                </div>
                <div className="blog-text">
                    <a href={blog['Read more']} target="_blank" rel="noopener noreferrer" className='blogtitle'>
                        {blog.name}
                    </a>
                    <p>{blog.content}</p>
                    <a href={blog['Read more']} target="_blank" rel="noopener noreferrer">
                        Read More
                    </a>
                </div>
            </div>
          ))}
        </Slider>
        <a href="/projects" class="blog-btn">Explore Now</a>
      </div>
  );
};

export default ProjectCard;
