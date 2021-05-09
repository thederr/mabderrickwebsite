import React from "react";
import Typed from "react-typed";
const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>web development and website promotions</h1>
        <Typed
          className='typed-text'
          strings={[
            "Web Design",
            "Web Development",
            "Google Ads",
            "Google Data Analytics",
            "EVERY",
            "GOD",
            "DAMN",
            "DAY",
            "Mediocre At Best Technologies LLC",
          ]}
          typeSpeed={40}
          backSpeed={80}
          loop
        />
        <a href='#' className='btn-main'>
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
