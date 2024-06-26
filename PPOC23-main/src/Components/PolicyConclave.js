// import React, { useState,useEffect } from 'react';
// import './PolicyConclave.css';
// import './Policy Conclave/section.css';
// import Navbar from './Policy Conclave/navbar';
// import Home from './Policy Conclave/Home';
// import Section1 from './Policy Conclave/Section1';
// import Section2 from './Policy Conclave/Section2';
// import Section3 from './Policy Conclave/WhatWedo';

// export default function PolicyConclave({ setShowNavbarAndFooter }) {
//   const [activeSection, setActiveSection] = useState(0);

//   useEffect(() => {
//     setShowNavbarAndFooter(false);
//     // Marking PolicyConclave page as visited when it mounts
//     sessionStorage.setItem('visitedPolicyConclavePage', 'true');

//     return () => {
//       setShowNavbarAndFooter(true);
//     };
//   }, [setShowNavbarAndFooter]);

//   const sections = [<Home />, <Section1 />, <Section2 />, <Section3 />];

//   const handleSectionChange = () => {
//     setActiveSection((prev) => (prev === sections.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="book-container" onClick={handleSectionChange}>
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           className={`section ${activeSection === index ? 'section-visible' : 'section-hidden'}`}
//         >
//           {section}
//         </div>
//       ))}
//     </div>
//     </>
    
//   );
// }

import React, { useEffect } from 'react';
import './PolicyConclave.css';
import './Policy Conclave/section.css';
import Home from './Policy Conclave/Home';
import Section2 from './Policy Conclave/Section2';
import Section3 from './Policy Conclave/WhatWedo';
import Event from './Policy Conclave/event'
import Workshop from './Policy Conclave/Workshop'
import PastSpeaker from './Policy Conclave/PastSpeaker';

export default function PolicyConclave({ setShowNavbarAndFooter }) {
  useEffect(() => {
    setShowNavbarAndFooter(false);
    // Marking PolicyConclave page as visited when it mounts
    // sessionStorage.setItem('visitedPolicyConclavePage', 'true');

    return () => {
      setShowNavbarAndFooter(true);
    };
  }, [setShowNavbarAndFooter]);

  return (
    <>
      <Home/>
      <Section2/>
      <Section3/>
      <Event/>
      <Workshop/>
      <PastSpeaker/>
    </>
  );
}