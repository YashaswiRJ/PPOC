// components/Home.js
import React from 'react';

import './home.css';
import Navbar from './navbar'
// import './page1.css';
const Home = () => {
  return (
  <> <div className="home" id="home">
       
        <div className="background-image" >
        <Navbar />
       
      </div>

      <div className="background-image" >
      <div className="vertical-align-container">
            <div className="left-aligned">LET'S</div>
            <div className="right-aligned">BEGIN</div>
          </div>
        {/* Add content for the second section */}
      </div>
</div></> 
  );
};

export default Home;
