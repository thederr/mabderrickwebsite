import React from "react";
import logo from "../logo.png";
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark fixed-top' >
      <div className='container'>
        <Link offset={0} smooth={true} to="home" className='navbar-brand' href='#'>
          <img className='logo' src={logo} alt='logo' />
        </Link>
        <button 
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link offset={0} smooth={true} to="home" className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link offset={-110} smooth={true} to="about" className='nav-link' href='#'>
                About 
              </Link>
            </li>
            <li className='nav-item'>
              <Link  offset={-110}smooth={true} to="interests" className='nav-link' href='#'>
                Interests
              </Link>
            </li>
            <li className='nav-item'>
              <Link offset={-110} smooth={true} to="experience" className='nav-link' href='#'>
                Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link offset={-110} smooth={true} to="portfolio" className='nav-link' href='#'>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link offset={-110} smooth={true} to="testimonials" className='nav-link' href='#'>
                Testimonials
              </Link>
            </li>
            
            
            <li className='nav-item'>
              <Link offset={-110} smooth={true} to="contacts" className='nav-link' href='#'>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
