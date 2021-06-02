import React from "react";
import author from "./derrick.png";
const AboutMe = () => {
  return (
    <div id='about' className='container'>
      <div className='row'>
        <div className='col-lg-6 col-xs-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img img-fluid' src={author} alt='author' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'></div>
        <h1 className='about-heading'>about me</h1>
        <p id="about-me-paragraph">
        "...Anybody who can throw coal into a furnace can learn how to program, for God’s sake!” - Joe Biden  <br /><br />
          My name is Derrick. I am a mining engineer who enjoys learning about new technologies such as GPS systems, machine control, 
          3D modeling software; however, I've recently become interested in web development with Reactjs. <br/>
          <br />
          My first introduction into web development was the "Angular Tour of Heroes" and with having absolutley no knowledge about javascript,
           html, or css, it must've taken me a month to finish.<br/><br/>
           After committing around three months figuring out the basics of html, javascript, and css, I was amazed at how fast and easy web development could be. Reactjs and tools like bootstrap and the entire stackoverflow community (haha) have let even someone like me, working a few hours a day, throw up a website with relative ease in about a month.<br/>
          <br/>This website was originally built just for the sole purpose of proving to myself that I could demystify web development, but now its going to be focused on documenting,
          not only all the projects I've been working on, but some of the projects I hope to get around to before the end of the year, acting as something approximating a project journal.
          <br />
          <br />
        </p>
      </div>
    </div> 
  );
};

export default AboutMe;
