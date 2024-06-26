import React from 'react'
import './team.css';

export default function teamsection() {
  return (
    <>
    <div className='card-container'>
        <div className="col-sm-6 col-lg-3 my-auto">
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid" src="https://i.postimg.cc/nctLW86w/20230924-084508-01-02.jpg" alt="..." />
              </div>
              <div className="box-desc">
                <b><h4>Sourav Sharma</h4></b>
                <h5>Overall Coordinator</h5>

                <ul id="ul" className="social">
                <li><a href="https://www.linkedin.com/in/sourav-sharma-15b4bb223/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-linkedin"></i></a></li>&nbsp;&nbsp;
                  <li><a href="mailto:souravsh21@iitk.ac.in" target="_blank" rel="noopener noreferrer" ><i className="fa fa-envelope"></i></a></li>
                  &nbsp;&nbsp;
                  <li><a href="/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-instagram"></i></a></li>
                  
                </ul>
              </div>
            </div>
        </div>
        <div className="col-sm-6 col-lg-3 my-auto">
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid" src="Team/Suryansh Gaur.jfif" alt="..." />
              </div>
              <div className="box-desc">
                <b><h4>Suryansh Gaur</h4></b>
                <h5>Overall Coordinator</h5>

                <ul id="ul" className="social">
                <li><a href="https://www.linkedin.com/in/suryansh-gaur-4310741a0/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-linkedin"></i></a></li>
                &nbsp;&nbsp;
                  <li><a href="mailto:suryanshg21@iitk.ac.in" target="_blank" rel="noopener noreferrer" ><i className="fa fa-envelope"></i></a></li>
                  &nbsp;&nbsp;<li><a href="https://www.instagram.com/suryanshgaur962/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-instagram"></i></a></li>
                  
                </ul>
              </div>
            </div>
        </div>
    </div>
    <a href="/team" class="blog-btn">View Full Team</a> <br/>
    </>
  )
}
