import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div className="footer">
       <img className="lines" src="/Line 18.svg"/>
      {/* <h3>Public Policy and Opinion Cell</h3> */}
      <img className="title" src="/footer logo.png"/>
      <br></br>
      <br></br>
      <div class="content">
    <div class="col1">
      <h5>Quick Links</h5>
      <a href="https://www.iitk.ac.in/">IIT Kanpur</a><br/>
      <a href="/">PPOC</a><br/>
      <a href="/">Policy Conclave</a><br/>
    </div>
    <div class="col2">
    <h5>More Links</h5>
    <a href="/blog">Articles</a><br/>
      <a href="/events">Events</a><br/>
      <a href="/projects">Projects</a><br/>
    </div>
    <div class="col3">
    <h5>CONTACT US</h5>
    <p>Indian Institute of Technology Kanpur 
Kanpur, Uttar Pradesh, 208016<br></br>Email: ppoc@iitk.ac.in</p>
    </div>
  </div>
  <div>
    <div className="icon-container">
      <a href="https://www.facebook.com/ppoc.iitk"><img src="/Facebook (2).svg"/></a>
      <a href="https://www.linkedin.com/company/ppoc-iitk/mycompany/"><img src="/LinkedIn.svg"/></a>
      <a href="https://www.instagram.com/ppoc_iitk/"><img src="/Instagram.svg"/></a>
      <a href="https://www.youtube.com/channel/UCL6N8QXTgLIdj2SzxYhHrag"><img src="/Vector.svg"/></a>
    </div>
  <img className="lines" src="/Line 18.svg"/>
    <p
    className='p'>Copyright © 2023-24 PPOC, IIT Kanpur | Designed by Web Team</p>
  </div>
    </div>
  )
}
