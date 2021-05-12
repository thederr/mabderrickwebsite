import React from "react";

function Services() {
  return (
    <div className='services'>
      <h1 className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <h3>Web Development</h3>
                <p>
                  Utilizing the latest technologies: a Reactjs with Firebase and
                  Amazon Web Services, we build Full Stack Applications that
                  scale from 1 to 10 million users
                </p>
              </div>
            </div>
            {/*-*/}
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <h3>Web Design</h3>
                <p>
                  Working with Bootstrap, Material-UI, FontAwesome and the like,
                  we make sure your website not only keeps up with the times,
                  but it's ready for every sized screen for every sized mobile,
                  laptop, and desktop size.
                </p>
              </div>
            </div>
            {/*-*/}
            <div className='col-md-3 col-sm-6'>
              <div className='box'>
                <h3>AutoCAD Modeling</h3>
                <p>
                  Freelance AutoCAD servces are avalible upon request. Here are
                  a few projects I've worked on over the years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default Services;
