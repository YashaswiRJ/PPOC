import React from "react";
import "./PastSpeaker.css";

const PastSpeaker = () => {
  return (
  <> 
       
    <div className="ps1" id="pastspeaker">
        <div className="bg-img1"><center><h1 className='pasthead'>Past Speakers</h1></center><div className="container1">
  <ul className="card1-list">
    <li className="card1-listitem">
      <div className="card1">
        <div className="card1-image">
        <img src="Speakers/piyush_pc.png" style={{width:"100%",height:"100%"}} />
                  </div>
                  <div class="card1-content">
                <h2>Piyush Goyal<br></br>
                <span>Indian Politician</span></h2>
                  </div>
                </div>
              </li>
              <li className="card1-listitem">
                <div className="card1">
                  <div className="card1-image">
                    <img src="Speakers/subrimanayam_pc.png" style={{width:"100%",height:"100%"}} />
                  </div>
                  <div class="card1-content">
                <h2>Dr Subrimanayam Swamy<br></br>
                <span>Indian Politician, Economist and Statistician</span></h2>
                  </div>
                </div>
              </li>
              <li className="card1-listitem">
                <div className="card1">
                  <div className="card1-image">
                    <img src="Speakers/durgashankar_pc.png" style={{width:"100%",height:"100%"}}  />
                  </div>
                  <div class="card1-content">
                <h2>Durga Shankar mishra<br></br>
                <span>Chief Secretary of uttar Pradesh</span></h2>
                  </div>
                </div>
              </li>
              </ul>
              <ul className="card1-list">
              <li className="card1-listitem">
                <div className="card1">
                  <div className="card1-image">
                  <img src="Speakers/saurabh_pc.png" style={{width:"100%",height:"100%"}} />
                  </div>
                  <div class="card1-content">
                <h2>Saurabh Dwivedi<br></br>
                <span>Indian Journalist and Founding Editor of the Lallantop Show</span></h2>
                  </div>
                </div>
              </li>
              <li className="card1-listitem">
                <div className="card1">
                  <div className="card1-image">
                  <img src="Speakers/sweta_pc.png" style={{width:"100%",height:"100%"}} />
                  </div><div class="card1-content">
                <h2>Sweta Singh<br></br>
                <span>Indian Journalist and News Presenter</span></h2>
                  </div>
                </div>
              </li>
              <li className="card1-listitem">
                <div className="card1">
                  <div className="card1-image">
                  <img src="Speakers/navika_pc.png" style={{width:"100%",height:"100%"}}  />
                  </div>
                  <div class="card1-content">
                <h2>Navika Kumar<br></br>
                <span>Indian Journalist and News Anchor</span></h2>
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

export default PastSpeaker;