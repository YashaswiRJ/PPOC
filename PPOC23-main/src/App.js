import './App.css';
import { useState, useEffect } from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './Components/Blog';
import Team from './Components/Team';
import Pastteam from './Components/pastteam';
import Events from './Components/Events';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Conclave from './Components/PolicyConclave';
import EventPopup from './EventPopup';
import HashLoader from "react-spinners/HashLoader";
import Blog1 from "./Components/blogs/Delhi_Ordinance_bill";
import Blog2 from "./Components/blogs/Sedition_law_in_India";
import Blog3 from "./Components/blogs/Hindberg_report";
import Blog4 from "./Components/blogs/Women_Armed_force";
import Blog5 from "./Components/blogs/G20";
import Blog6 from "./Components/blogs/Uniform_Civil_code";
import Blog7 from "./Components/blogs/Women_safety";
import Blog8 from "./Components/blogs/Global_food_crisis";
import Blog9 from "./Components/blogs/British_Revolving_Door";
import Blog10 from "./Components/blogs/India_and_MiddleEast";
import Blog11 from "./Components/blogs/Fall_is_an_Old_love";
import Blog12 from "./Components/blogs/Isral_palestine";
import Blog13 from "./Components/blogs/Natinal_Solar_Mission";
import Blog14 from "./Components/blogs/Martha_state";
import Blog15 from "./Components/blogs/Information_technology";
import Blog16 from "./Components/blogs/World_employment";
import Blog17 from "./Components/blogs/Fist_Program";
import Blog18 from "./Components/blogs/Recent_Development";
import Blog19 from "./Components/blogs/UP_Population";
import Blog20 from "./Components/blogs/Privatisation";
import Blog21 from "./Components/blogs/Navigating-economic-storm";
import Blog22 from "./Components/blogs/Interium_Budget_Article";
import Project1 from "./Components/Projects/Guestimating";
import Project2 from "./Components/Projects/Inside_Out";
import Project3 from "./Components/Projects/India_Social";
import Project4 from "./Components/Projects/Tweet_decoder";
import Project5 from "./Components/Projects/Diplobrats";
import Event1 from "./Components/Policy Conclave/Event/rajneeti"
import Event2 from "./Components/Policy Conclave/Event/Lokniti"
import Event3 from "./Components/Policy Conclave/Event/mun"
import Event4 from "./Components/Policy Conclave/Event/bookfair"
import Event5 from "./Components/Policy Conclave/Event/videshneeti"


function App() {
  const[loading,setLoading]=useState(false);
  const [showNavbarAndFooter, setShowNavbarAndFooter] = useState(true);
  // const [showEventPopup, setShowEventPopup] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);

  //     const visitedPolicyConclavePage = sessionStorage.getItem('visitedPolicyConclavePage');

  //     if (!visitedPolicyConclavePage) {
  //       setShowEventPopup(true); // Display the event popup on pages other than PolicyConclave

  //       // Close the event popup after a certain duration (e.g., 5000 milliseconds)
  //       setTimeout(() => {
  //         setShowEventPopup(false);
  //       }, 100000); // Adjust the duration as needed
  //     }
  //   }, 1000);
  // }, []);

  // const closeEventPopup = () => {
  //   setShowEventPopup(false);
  //   sessionStorage.setItem('visitedPolicyConclavePage', 'true'); // Mark PolicyConclave page as visited
  // };

  return (
    <div className="App">
      {
        loading ?
        <center className='center'><HashLoader
        color={'#274561'}
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></center>
        :
        <>
        {/* {showEventPopup && <EventPopup onClose={closeEventPopup} />}  */}
        <Router>
          {showNavbarAndFooter && <Navbar />}
        {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/events" element={<Events/>}></Route>
            <Route path="/team" element={<Team/>}></Route>
            <Route path="/pastteam" element={<Pastteam/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route
                path="/policyconclave"
                element={<Conclave setShowNavbarAndFooter={setShowNavbarAndFooter} />}
              ></Route>
            <Route path="/delhi_ordinance_bill" element={<Blog1/>}></Route>
            <Route path="/sedition_law_in_india" element={<Blog2/>}></Route>
            <Route path="/hindberg_report" element={<Blog3/>}></Route>
            <Route path="/women_in_armed_forces" element={<Blog4/>}></Route>
            <Route path="/g20" element={<Blog5/>}></Route>
            <Route path="/Uniform-Civil-Code" element={<Blog6/>}></Route>
            <Route path="/revisiting-women-safety" element={<Blog7/>}></Route>
            <Route path="/Global-Food_crisis" element={<Blog8/>}></Route>
            <Route path="/The-british-revolving-door" element={<Blog9/>}></Route>
            <Route path="/India-and-the-Middle-East-Economic-and-Energy-Partnership" element={<Blog10/>}></Route>
            <Route path="/Fall-is-an-old-love-affair" element={<Blog11/>}></Route>
            <Route path="/Israel-Palestine-confilct" element={<Blog12/>}></Route>
            <Route path="/National-solar-mission" element={<Blog13/>}></Route>
            <Route path="/Maratha-state-reservation-2018" element={<Blog14/>}></Route>
            <Route path="/The-information-technology-rule-2021" element={<Blog15/>}></Route>
            <Route path="/World-employment-and-social-outlook" element={<Blog16/>}></Route>
            <Route path="/FIST-program" element={<Blog17/>}></Route>
            <Route path="/Recent-development-in-Afghanisthan-crisis" element={<Blog18/>}></Route>
            <Route path="/UP-population-bill-2021" element={<Blog19/>}></Route>
            <Route path="/Privatisation-and-its-impact-on-economy" element={<Blog20/>}></Route>
            <Route path="/Navigating-economic-storm" element={<Blog21/>}></Route>
            <Route path="/interium-budget" element={<Blog22/>}></Route>
            <Route path="/Guesstimating" element={<Project1/>}></Route>
            <Route path="/inside-out" element={<Project2/>}></Route>
            <Route path="/indias-social" element={<Project3/>}></Route>
            <Route path="/tweet-decoder" element={<Project4/>}></Route>
            <Route path="/diplobrats" element={<Project5/>}></Route>
            <Route path="/policyconclave/rajneeti" element={<Event1/>}></Route>
            <Route path="/policyconclave/lokneeti" element={<Event2/>}></Route>
            <Route path="/policyconclave/mun" element={<Event3/>}></Route>
            <Route path="/policyconclave/bookfair" element={<Event4/>}></Route>
            <Route path="/policyconclave/videshneeti" element={<Event5/>}></Route>
          </Routes> 
      </Router>
       
       
      {/* {showNavbarAndFooter && <Footer />} */}
    <Footer/>
    </>
    }
  </div>
  );
}

export default App;
