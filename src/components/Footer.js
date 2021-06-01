import { NUMBER_BINARY_OPERATORS } from "@babel/types";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div id ="footer" className='footer'>
      <div className='container'>
        <div className='col-lg-4 col-md-6 col-sm-6'>
          <div className='d-flex'>
            <p>1000 Technology Drive, Suite 555 Fairmont, WV 26554</p>
          </div>
          <div className='d-flex'>
            <p>
              <a href='tel:555-555-5555'>+1(555)555-5555</a>
            </p>
          </div>
          <div className='d-flex'>
            <p>MABtechnologies@MAB.ninja</p>
          </div>
        </div>
{/* 
        <div className=' col-lg-3 col-md-2 col-sm-6'>
          <div className='row'>
            <div className='col'>
              <a className='footer-nav'>Home</a>
              <br />
              <a className='footer-nav'>About me</a>
              <br />
              <a className='footer-nav'>Services</a>
            </div>
            <div className='col'>
              <a className='footer-nav'>Experience</a>
              <br />
              <a className='footer-nav'>Portfolio</a>
              <br />
              <a className='footer-nav'>Contacts</a>
            </div>
          </div>
        </div>
         */}
        <div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
          <div className='d-flex justify-content-center'>
            <LinkedinShareButton
                
              url={"linkedin.com/in/derrick-matheny-930694181"}
              quote={"Mediocre at Best"}
              hashtag='#MABtechnologies'
            >
              <LinkedinIcon />
            </LinkedinShareButton>


            <FacebookShareButton
                
              url={"https://www.facebook.com/WVtourism/"}
              quote={"Mediocre at Best"}
              hashtag='#MABtechnologies'
            >
                <FacebookIcon/>
            </FacebookShareButton>

            <TwitterShareButton
                
              url={"https://twitter.com/WVTourism"}
              quote={"Mediocre at Best"}
              hashtag='#MABtechnologies'
            >
                <TwitterIcon/>
            </TwitterShareButton>



          </div>
          <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()} MAB Technologies | All Rights Reserved
          </p>
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
