// App.js
import React from "react";
import "./Events.css";

function App() {
  return (
    <>
      <div
        className="card bg-light mb-3 mx-auto rounded-4 w-180"
        style={{ maxWidth: "80%", margin: "20px 0" }}
      >
        <div className="card-body">
          <h3 className="card-title">
            <b>Popular Events</b>
          </h3>
          <p className="card-text">
            Here are Some Popular Events Information you can acess here:
          </p>
        </div>
      </div>

      <div className="container0">
        <div className="cardmain">
          <div className="card__header">
            <img
              src="policy_conclave.png"
              alt="card__image"
              className="card__image"
              width={600}
              height={200}
            />
          </div>
          <div className="card__body">
            <h2>Policy Conclave</h2>
            <p>
              Policy Conclave is the annual flagship event of PPOC, IITK,
              usually hosted in the months of March and April. An exhaustive
              three-day long chain of events organised in Webinars, Competitions
              and Workshops designed to enrich the audience with knowledge on
              Public Issues and Policy Research. If you are a college student
              seeking to know and understand Public Opinion and its
              implementation in real life, Policy Conclave is the one-stop
              destination for you.
            </p>
          </div>
          <div className="card__footer">
            <div className="user">
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div className="user__info">
                <h5>Know More</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="cardmain">
          <div className="card__header">
            <img
              src="gov.jpeg"
              alt="card__image"
              className="card__image"
              width={600}
              height={200}
            />
          </div>
          <div className="card__body">
            <h2>Indian Governance Summit</h2>
            <p>
              Does Governance fascinate you? Ever wondered how Public Opinion
              translates into Public Policy and what are challenges faced to
              implement it in a diverse nation like India? If you want to
              understand the chaotic order that India is, IGS is the elixir mine
              you are looking for!! Organised in September, an open-to-all
              three-day-long fest of insightful Webinars and exciting
              Competitions to satiate your thirst for Knowledge!{" "}
            </p>
          </div>
          <div className="card__footer">
            <div className="user">
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div className="user__info">
                <h5>Know More</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="cardmain">
          <div className="card__header">
            <img
              src="hunt.jpeg"
              alt="card__image"
              className="card__image"
              width={600}
              height={200}
            />
          </div>
          <div className="card__body">
            <h2>The Knowledge Hunt</h2>
            <p>
              The Knowledge Hunt is a national-level initiative from Public
              Policy and Opinion Cell IIT Kanpur to engage students at the
              grass-root level and strengthen our nation's talent pool in the
              policy and governance field. It is a Quiz Competition where the
              students are tested based on their knowledge and aptitude across
              diverse areas regarding mental ability, general science,
              economics, political science, international relations, history,
              and geography.{" "}
            </p>
          </div>
          <div className="card__footer">
            <div className="user">
              <i className="fa fa-arrow-right" aria-hidden="true"></i>
              <div className="user__info">
                <h5>Know More</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card bg-light mb-3 mx-auto rounded-4 w-180"
        style={{ maxWidth: "80%", margin: "20px 0" }}
      >
        <div className="card-body">
          <h3 className="card-title">
            <b>Our Campus Intiatives</b>
          </h3>
          <p className="card-text">
            Here are some of our Campus Intiatives that we have taken to make some environment of public policy.
            <br/>
            <strong>Here are the features</strong>
          <br />
           We are proud of
          </p>
        </div>
      </div>
      <div className="container1">
        {/* <p className="container-title">
          Here are the features
          <br />
          we’re proud of
        </p> */}
        <div className="gradient-cards">
          <div className="card1">
            <div className="container-card bg-green-box">
              <i
                className="fa-solid fa-list-check"
                style={{ fontSize: 48, color: "green" }}
              />
              <p> </p>
              <p className="card1-title">Projects and Publications</p>
              <p className="card-description">
                We publish various blogs and article series like - INSIDE,
                D-CODE, SIYAASAT, Officers Inspired, Opine Matters, Policy
                Review, Policy Drafts, Newsletters, etc. Apart from these,
                Public Policy and Opinion Cell offers projects to students
                during their semesters and summer and winter vacations.
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="container-card bg-white-box">
              <i
                className="fa fa-newspaper-o"
                style={{ fontSize: 48, color: "grey" }}
              />
              <p> </p>
              <p className="card1-title">SAMVAAD</p>
              <p className="card-description">
                An event that encourages students to have open and constructive
                conversations about the issues that are important to them and to
                learn more about what's happening globally or nationally. A
                large number of people show up to participate in the event.
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="container-card bg-yellow-box">
              <i
                className="fa-solid fa-user-tie"
                style={{ fontSize: 48, color: "yellow" }}
              />
              <p> </p>
              <p className="card1-title">UPSC Talks</p>
              <p className="card-description">
                This is a series of interviews and sessions with bureaucrats and
                top UPSC rankers emphasizing UPSC preparation. This motivates
                and boosts the preparation strategy of aspirants from campus.
              </p>
              <br></br>
            </div>
          </div>
          <div className="card1">
            <div className="container-card bg-blue-box">
              <i
                className="fa-solid fa-gavel"
                style={{ fontSize: 48, color: "blue" }}
              />
              <p> </p>
              <p className="card1-title">Sansad</p>
              <p className="card-description">
                This event is a recreation of the Indian Parliamentary system
                and aims to produce the best possible political ethos and
                articulation from its participants. It tests one's skills in
                gathering and analyzing information and their understanding of
                parliamentary issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
