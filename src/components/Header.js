import React from "react";
import Typed from "react-typed";
const Header = () => {
  return (
    <div id="home" className='header-wrapper'>
      <div className='main-info'>
        <h1>Web Design & Web Development</h1>
        <h4 className="text-primary"></h4>
        <h3 className="text-muted"></h3>
        <Typed
          className='typed-text text-muted'
          strings={[
            "Reactjs",
            "Firebase",
            "AWS",
            "Bootstrap",

            "Mediocre At Best Technologies LLC",
          ]}
          typeSpeed={40}
          backSpeed={80}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
