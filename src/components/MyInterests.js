import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faDraftingCompass,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";

function Interests() {
  return (
    <div id="interests" className='services'>
      <div className='py-5'>
        <h1>My interests</h1>
        <p></p>
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
                  Utilizing Reactjs with Firebase I've been able to focus more on the UI side of things; however, it's my intention to, after finishing the website clones in Reactjs and Firebase, to rebuild them in Reactjs, Java, and AWS
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
                 have not only made the web design aspect of it more fun and engaging, but easily adds a level of professionalism that I find very enjoyable. 
                </p>
              </div>
            </div>
            {/*-*/}
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div className='box'>
                <div className='circle'>
                  <FontAwesomeIcon className='icon' icon={faAws} size='2x' />
                </div>
                <h3>AWS</h3>
                <p>
                AWS was what spurred this whole pivot towards the technology industry. I never really understood the idea of the "cloud" and the fact that I never really knew how these services worked made me feel antiquated. I'm currently trekking through an AWS course on SimpliLearn and hope to get my AWS certifications after I complete it.  
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
                <h3>Web Scraping and AWS Rekognition</h3>
                <p>
               I mean it will take me a few months to figure out how it all works, but biometrics is insanely interesting to me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interests;


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

