import React from 'react'
import './Home.css'
import ImageSlider from '../Components/recent'
import SponsorSlider from '../Components/sponsor'
import BlogSlider from '../Components/BlogSlider'
import ProjectSlider from '../Components/ProjectSlider'
import Teamsection from './teamsection'
import Gallery from '../Components/Gal'
import AOS from "aos";
import 'aos/dist/aos.css'
import Speakers from '../Components/Speakers';
import { useEffect} from "react";
export default function Home() {
  useEffect(()=>{
    AOS.init({duration: 2000})
  }, []);
  return (
    <>
      <div className='bg'>
        <h1 className="heading" data-aos="fade-up">Public Policy and<br></br>Opinion Cell</h1>
        <h2 className="quote" data-aos="fade-up"  data-aos-easing="linear"
     data-aos-duration="1500">"There's Tremendous Gap Between Public<br></br> Opinion and Public Policy" - Noam Chomsky</h2>
      </div>
      <div className='about' id='about'>
        <h1 className='about-title' data-aos="fade-up" data-aos-once="true">About us</h1>

        <div className="content-container">
          <div className="imag" data-aos="fade-right"data-aos-easing="linear"
     data-aos-duration="1000" data-aos-once="true"></div>
          <div className="text-container" data-aos="fade-left" data-aos-easing="linear"
     data-aos-duration="1000" data-aos-once="true">
            <div className='about_heading'>
              Public Policy and Opinion Cell IIT Kanpur is the first student-run public policy think-tank among all 23 IITs across the nation.
            </div>
            <div className='about_main'>
              PPOC conducts enlightening discussions and workshop sessions among students’ community regarding various socio-economic and political issues of national and international interest. Apart from the regular sessions, we regularly publish blogs, newsletters, and research articles on these important contemporary issues. These activities earn a tremendously optimistic rejoinder from the student's group and conclude with great notions.
            </div><br></br>
            <a href="/events"><button className='read-more-button'>Read More</button></a>
            
          </div>
        </div>
      </div>
      <div className='recent-activities'>
        <h1 className='recent-title'>Recent Activities</h1>
        <div className='slider'>
          <ImageSlider />
        </div>
      </div>
      <div className='recent-activities' id="speakers">
        <h1 className='recent-title'>Our Past Speakers</h1><br></br>
        <div className='sliders'>
          <Speakers />
        </div>
      </div>

      <img src="https://i.postimg.cc/W16tbDyh/Vector.png" alt="" className='vector' />
      <div className='Articles'>
        <h1 className='recent-title'>Articles</h1>
        <div className='blog-slider'>
          <BlogSlider />
        </div>
      </div><br></br><br></br>
      <div className='Articles'>
        <h1 className='recent-title'>Our Projects</h1>
        <div className='blog-slider'>
          <ProjectSlider />
        </div>
      </div><br></br>
      <div className='Articles'>
        <h1 className='recent-title'>Our Team</h1>
        <div className='blog-slider'>
          <Teamsection />
        </div>
      </div><br></br><br></br>
      <h1 id='gallery' className='gallery-head'>Our Gallery</h1>
      <Gallery />

      <div className='recent-activities'>
        <h1 className='recent-title'>Our Past Sponsors</h1><br></br>
        <div className='slider1'>
          <SponsorSlider />
        </div>
      </div>
      <img src="https://i.postimg.cc/85sCHZz6/Vector2.png" alt="" className='vector' />

    </>
  )
}
