// components/Home.js
import React from 'react';

import './eventspage.css';
const Event = () => {
  return (
  <> 
       
        <div className="event" style={{backgroundImage: 'url("https://i.postimg.cc/jSdrmZx3/page.jpg")'}}>
        <div className="background-image1"><div className="flexbox2">
        <div className="containerbox1">
  <h1>Lokniti</h1><br></br>
  <p>
  “Lokniti” a public policy hackathon held during our flagship event Policy Conclave 23. Delve into critical issues and craft creating solutions, recognizing the power of public behavior in shaping policy outcomes. As we engage with government policies, our collective actions determine the nation’s trajectory. Greengine environmental technologies committed to combating climate change and waste issues, employ advanced carbon capture tech and innovative waste management models. Meanwhile @novoearth.co, an avant-garde startup tackles FMCG packaging waste through compostable plastic, showcasing a dedication to positive environmental impact. Join us in shaping a sustainable future through thoughtful policy solutions.
  </p>
  <img src="https://picsum.photos/400/250" alt="Description of your image" /><br></br>
  </div><center><div><a href="register.html" className="register-button">
    Register Now
  </a></div></center>
</div>
</div></div>

      </> 
  );
};

export default Event;
