import React from "react";
import netflix from "./netflix.PNG";
import disneyplus from "./disney-plus.PNG";
import instagram from "./instagram-clone.png";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
//-------------------------------------------------------------------------------

 //Instagram
 const openPopupboxInstagram = () => {
    
  const content = (
    <>
      <img className='portfolio-image-popupbox' src={instagram} alt='Instagram Project'
      />
      <p>Basic Instagram Clone utilizing reactjs and firebase<br/>
        This project was about learning authentification, snapshots,
         and how to map through a firestore database.

      </p>
      {/* link to demo site <strong>Demo:</strong> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a> */}
      <br />
      <strong>GitHub:</strong>{" "}
      <a
        className='hyper-link'
        onClick={() => window.open("https://github.com/thederr/instagram-clone", "_blank")}
      >
        https://github.com/thederr/instagram-clone<br/>
      </a>
    </>
  );

  PopupboxManager.open({ content });
  PopupboxManager.update({
    content,
    config: {
      titleBar: {
        enable: true,
        text: "Really Bad Instagram Clone",
      },
      fadeIn: true,
      fadeInSpeed: 500,
    }
  });
};
//-------------------------End Instagram-----------------

//-------------------------------------------------------------------------------
  
//Netflix
  const openPopupboxNetflix = () => {
    
    const content = (
      <>
        <img className='portfolio-image-popupbox' src={netflix} alt='Netflix Project'
        />
        <p>Netflix project</p>
        {/* link to demo site <strong>Demo:</strong> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a> */}
        <br />
        <strong>GitHub:</strong>{" "}
        <a
          className='hyper-link'
          onClick={() => window.open("https://github.com/thederr", "_blank")}
        >
          https://github.com/theDerr
        </a>
      </>
    );

    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Netflix Clone",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      }
    });
  };
//-------------------------End Netflix-----------------


  //Disney Plus
  const openPopupboxDisneyPlus = () => {
    
    const content = (
      <>
        <img className='portfolio-image-popupbox' src={disneyplus} alt='Disney Plus Project'
        />
        <p>Disney Plus Project</p>
        {/* link to demo site <strong>Demo:</strong> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a> */}
        <br />
        <strong>GitHub:</strong>{" "}
        <a
          className='hyper-link'
          onClick={() => window.open("https://github.com/thederr", "_blank")}
        >
          https://github.com/theDerr
        </a>
      </>
    );
//-----------------------------------------------
//------------the magic happens here------------
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Disney Plus Clone Project",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      }
    });
  };
//-----------------------------------------


//-------------------------End Disney Plus--------------
  return (
    <div id="portfolio" className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>portfolio</h1>
        <h3 className='text-uppercase text-center py-5'>completed projects</h3>
        <div className='image-box-wrapper row justify-content-center'>
          
          {/*Instagram*/}
          <div className='portfolio-image-box' onClick={openPopupboxInstagram}>
            <img
              className='portfolio-image'
              src={instagram}
              alt='netflix clone'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* End of Instagram */} 
        </div>
        <h3 className='text-uppercase text-center py-5'>upcoming projects</h3>

        <div className='image-box-wrapper row justify-content-center'>
          {/*Netflix*/}
          <div className='portfolio-image-box' onClick={openPopupboxNetflix}>
            <img
              className='portfolio-image'
              src={netflix}
              alt='netflix clone'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* End of Netflix */}

          {/*Disney Plus*/}
          <div className='portfolio-image-box'onClick={openPopupboxDisneyPlus}>
            <img
              className='portfolio-image'
              src={disneyplus}
              alt='disney plus clone'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
          {/* End of Disney Plus */}
        </div>
      </div>
      <PopupboxContainer />

    </div>
  );
};

export default Portfolio;
