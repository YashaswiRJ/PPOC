// components/Home.js
import React from 'react';
import './event.css';
import './workshop.css';
// import './page1.css';
const Workshop = () => {
  return (
    <>

      <div className="workshop1" id="workshop">
        <div className="background-image1"><center><h1 className='workshophead'>Workshops</h1></center>
          <div className="flexbox2">

            <ul className="flex1-card-list">
              <li className="flex1-card-listitem">
                <div className="flex1-card">
                  <div className="flex1-card-image">
                    <img src="workshop1.jpg" />
                  </div>
                  <div className="flex1-card-content">
                    <h3 className="flex1-card-heading">Be a Politician</h3>
                    <button className="read-button">
                      <div className="overlap-group">
                        <div className="text-wrapper"><center>Read More</center></div>
                      </div>
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex1-card-listitem">
                <div className="flex1-card">
                  <div className="flex1-card-image">
                    <img src="workshop2.jpg" />
                  </div>
                  <div className="flex1-card-content">
                    <h3 className="flex1-card-heading">Data Analysis </h3>
                    <h3 className="flex1-card-heading">and Strategy making</h3>
                    <button className="read-button">
                      <div className="overlap-group">
                        <div className="text-wrapper"><center>Read More</center></div>
                      </div>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workshop;
