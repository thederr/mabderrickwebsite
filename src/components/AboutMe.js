import React from "react";
import author from "./derrick.png";
const AboutMe = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg col-xm-12'>
          <div className='photo-wrap mb-5'>
            <img className="profile-img" src={author} alt='author' />
          </div>
        </div>
        <div className='col-lg col-xm-12'></div>
        <h1 className="about-heading">about me</h1>
        <p>
          Hello my name is Derrick. I'm a mining engineer who's gradually
          getting more and more into web design and web development. Follow
          along as I try to make sense of new-to-me technologies such as
          Reactjs, Firebase, AWS and more.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
