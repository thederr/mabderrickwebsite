import React from "react";

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">


        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>October 2020</h3>
            <p>First Attempt at learning to code by doing the Angular Tour-of-Heroes</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>November 2020</h3>
            <p>Basic Angular Weather App - Hitting Open Weather API and displaying it on screen, zero-styling</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>December 2020</h3>
            <p>Finished Linkedin Typescript and Git Essential Training Course</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>March 2021</h3>
            <p>Finished Linkedin "Become a Front-End Web Developer" Course and Simplilearn's AWS Soultion Architect Associate Course + First MERN CRUD App Posted to Github</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>April 2021</h3>
            <p>Finished Linkedin Node.js Essential Training + Built an Instagram Clone using Reactjs and Firebase, deployed using Firebase</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>May 2021</h3>
            <p>Built this website with Reactjs and Bootstrap. Website is hosted on AWS services</p>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Experience;
