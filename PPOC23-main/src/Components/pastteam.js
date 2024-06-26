import React from 'react';
import pastdata from '../database/pastdata.json'; // Your JSON data here
import './team.css';

const Card = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2><br></br>
      <div className="card-container">
        {items.map(item => (
          <div className="col-sm-6 col-lg-3 my-auto" key={item.id}>
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid" src={item.image} alt="..." />
              </div>
              <div className="box-desc">
                <b><h4>{item.name}</h4></b>
                <h5>{item.vertical}</h5>

                <ul id="ul" className="social">
                <li><a href={item.linkedin} target="_blank" rel="noopener noreferrer" ><i className="fa fa-linkedin"></i></a></li>&nbsp;&nbsp;
    
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Pastteam() {
  return (
    <>
      <div className="card bg-light mb-3 mx-auto rounded-4 w-180" style={{ maxWidth: "80%" }}>
        <div className="card-body">
          <h3 className="card-title"><b>Meet Our Previous Team</b></h3>
          <p className="card-text">
            You can access information about the previous members of the Public Policy and Opinion Cell team through the below links. From these links, you can find contact information for each team member, allowing you to reach out to the appropriate person based on your needs. This information can be helpful in connecting with the Public Policy and Opinion Cell team and accessing their resources and support.
          </p>
          <div className='team-btn-dis'>
          <a href="/team" class="team-btn">View Present Team</a> <br/>
          <a href="/pastteam" class="team-btn">View Past Team</a>
          </div>
        </div>
      </div>
      <div className="center-content"><br></br>
        <div>
          <h2>FACULTY ADVISOR</h2><br></br>
          <div className="card-container">

            <div className="col-sm-6 col-lg-3 my-auto">
              <div className="box shadow-sm p-4">
                <div className="image-wrapper mb-3">
                  <img className="img-fluid" src="https://i.ibb.co/tDmc7pg/Picture2.jpg" alt="..." />
                </div>
                <div className="box-desc">
                  <b><h4>Dr. Pradip Swarnakar</h4></b>


                  <ul id="ul" className="social">
                    <li><a href="https://www.linkedin.com/in/pradip-swarnakar-168b9115/" ><i className="fa fa-linkedin"></i></a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br>
      <Card title="Overall Coordinators" items={pastdata.coordi} /><br></br><br></br><br></br>
      <Card title="Managers" items={pastdata.manager} /><br></br><br></br><br></br>
       
    </>
      );
}

export default Pastteam;
