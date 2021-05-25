import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faDraftingCompass,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";

function Services() {
  return (
    <div id="services" className='services'>
      <div className='py-5'>
        <h1>My Services</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faFileCode}
                    size='2x'
                  />
                </div>

                <h3>Web Development</h3>
                <p>
                  Utilizing the latest technologies: a Reactjs with Firebase and
                  Amazon Web Services, we build Full Stack Applications that
                  scale from 1 to 10 million users
                </p>
              </div>
            </div>
            {/*-*/}
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faDesktop}
                    size='2x'
                  />
                </div>
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
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon className='icon' icon={faAws} size='2x' />
                </div>
                <h3>AWS Migration</h3>
                <p>
                  Working with small to medium sized companies offloading costly
                  infastrcture and replacing inhouse servers with serverless
                  archtecture from Amazon.
                </p>
              </div>
            </div>
            {/*-*/}
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon
                    className='icon'
                    icon={faDraftingCompass}
                    size='2x'
                  />
                </div>
                <h3>AutoCAD Modeling</h3>
                <p>
                  Freelance AutoCAD servces are avalible upon request. Here are
                  a few projects I've worked on over the years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;


  /* Heres Some Example FontAwesome Syntax

 className="icon"
// Light:
<FontAwesomeIcon icon={["fal", "coffee"]} />
// Regular:
<FontAwesomeIcon icon={["far", "coffee"]} />
// Solid
<FontAwesomeIcon icon={["fas", "coffee"]} />
// ...or, omit as FontAwesome defaults to solid, so no need to prefix:
<FontAwesomeIcon icon="coffee" />
// Brand:
<FontAwesomeIcon icon={["fab", "github"]} />

https://fontawesome.com/how-to-use/on-the-web/using-with/react
*/

