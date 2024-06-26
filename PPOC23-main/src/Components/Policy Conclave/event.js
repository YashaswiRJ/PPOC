// components/Home.js
import React from 'react';

import './event.css';
// import './page1.css';
const Event = () => {
  return (
  <> 
       
        <div className="event1" id="pevents">
        <div className="background-image1"><center><h1 className='eventshead'>Events</h1></center><div className="flexbox1">
  <ul className="flex-card-list">
    <li className="flex-card-listitem">
      <div className="flex-card">
        <div className="flex-card-image">
        <img src="/Events/rajneeti.jpeg" />
                  </div>
                  <div className="flex-card-content">
                    {/* <h3 className="flex-card-heading">Rajneeti</h3> */}
                    <a href="https://unstop.com/p/rajneeti-a-political-case-study-competition-iit-kanpur-850904" className="flex-card-button" target="_blank">
                      Register
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex-card-listitem">
                <div className="flex-card">
                  <div className="flex-card-image">
                    <img src="/Events/lokneeti.jpeg" />
                  </div>
                  <div className="flex-card-content">
                    {/* <h3 className="flex-card-heading">Lokniti</h3> */}
                    <a href="https://unstop.com/p/lok-niti-iit-kanpur-854528" className="flex-card-button" target="_blank">
                      Register
                    </a>
                  </div>
                </div>
              </li>
              </ul>
              <ul className="flex-card-list">
              <li className="flex-card-listitem">
                <div className="flex-card">
                  <div className="flex-card-image">
                    <img src="/Events/videshneeti.jpeg" />
                  </div>
                  <div className="flex-card-content">
                    {/* <h3 className="flex-card-heading">Videsh Neeti</h3> */}
                    <a href="https://unstop.com/p/videsh-neeti-iit-kanpur-853341" className="flex-card-button" target="_blank">
                      Register
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex-card-listitem">
                <div className="flex-card">
                  <div className="flex-card-image">
                    <img src="/Events/MUN.png" />
                  </div>
                  <div className="flex-card-content">
                    {/* <h3 className="flex-card-heading">MUN</h3> */}
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd65vbUlP2jFJ8v-ZnaCH3fCYsSACE1R-VsN8bvyx698GVIMQ/viewform" className="flex-card-button" target="_blank">
                      Register
                    </a>
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

export default Event;
