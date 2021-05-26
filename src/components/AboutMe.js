import React from "react";
import author from "./derrick.png";
const AboutMe = () => {
  return (
    <div id='about' className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xs-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img img-fluid' src={author} alt='author' />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'></div>
        <h1 className='about-heading'>about me</h1>
        <p>
          Hello and welcome to my website. <br />
          My name is Derrick and I am a mining engineer who thought it would be
          fun to learn how to build websites. With about 6 months into the game
          I'm finding it not only fun, but also very interesting and rewarding.
          Its very seldom engineers have the freedom to build and design things
          as they see fit so the fact that I can literally build anything, as
          long as I've the creativity to get it done, is very therepudic in a
          way. Nevertheless this website is going to be focused on documenting,
          not only all the projects I've been working on, but some of the
          projects I hope to get around to before the end of the year.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
