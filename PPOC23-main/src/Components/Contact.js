import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="page">
      <div
        className="card bg-light mb-3 mx-auto rounded-4 w-180"
        style={{ maxWidth: "80%", margin: "20px 0" }}
      >
        <div className="card-body">
          <h3 className="card-title">
            <b>Contact Us</b>
          </h3>
          <p className="card-text">
            <strong>Do you have any Questions?</strong>
            <br />
            Feel free to get in touch with us!
          </p>
        </div>
      </div>
      <br></br>
      <div class="container text-center">
        <div class="content">
          <div class="col">
            <h2>Contact Info.</h2>
            <h5>Email us : ppoc@iitk.ac.in</h5>
            <br></br>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <form
                  action="https://formsubmit.co/ppoc.iitk@gmail.com"
                  method="POST"
                >
                  <div class="col">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Name"
                      required
                    ></input>
                  </div>
                  <hr></hr>
                  <div class="col">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      id="exampleFormControlInput2"
                      placeholder="Your Email Address "
                      required
                    ></input>
                    <hr></hr>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      placeholder="Enter Your Message Here..."
                    ></textarea>
                    <hr></hr>
                    <button className="button" type="submit">
                      <h4>Send Message</h4>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
