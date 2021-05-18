import React from "react";
import netflix from "./netflix.PNG";
import disneyplus from "./disney-plus.PNG";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  //Netflix
  const openPopupboxNetflix = () => {
    
    const content = (
      <>
        <img className='portfolio-image-popupbox' src={netflix} alt='Netflix Project'
        />
        <p>lorem ipsum, lorem lool lo lolllol ippysum</p>
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
  };
  const popupboxConfigureNetflix = {
      titleBar: {
      enable: true,
      text: "Netflix Clone Project",
      fadeIn: true,
      fadeInSpeed: 500,
    },
  };
//-------------------------End Netflix-----------------
  //Disney Plus
  const openPopupboxDisneyPlus = () => {
    
    const content = (
      <>
        <img className='portfolio-image-popupbox' src={disneyplus} alt='Disney Plus Project'
        />
        <p>lorem ipsum, lorem lool lo lolllol ippysum</p>
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
  };
  const popupboxConfigureDisneyPlus = {
      titleBar: {
      enable: true,
      text: "Disney Plus Clone Project",
      fadeIn: true,
      fadeInSpeed: 500,
    },
  };

//-------------------------End Disney Plus--------------
  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>portfolio</h1>
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
      <PopupboxContainer {...popupboxConfigureNetflix} />
      <PopupboxContainer {...popupboxConfigureDisneyPlus} />
    </div>
  );
};

export default Portfolio;
