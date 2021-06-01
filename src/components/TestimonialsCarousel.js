import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "./avatar-1.png";
import avatar2 from "./avatar-2.png";
import avatar3 from "./avatar-3.png";
import avatar4 from "./avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={3000}
    >
      <>
        <img src={avatar1} alt='Johnnyboy' />
        <div className='mycarousel'>
          <h3>Mack</h3>
          <p>If there was noone else to do the project I might hire him</p>
        </div>
      </>
      <>
        <img src={avatar2} alt='Joline' />
        <div className='mycarousel'>
          <h3>Joline</h3>
          <p>"5/10 I would think about hiring him again"</p>
        </div>
      </>
      <>
        <img src={avatar3} alt='Taco' />
        <div className='mycarousel'>
          <h3>Josh</h3>
          <p>
            "Not the best, but at least he commits some code every once in a while
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt='Oliver' />
        <div className='mycarousel'>
          <h3>Oliver</h3>
          <p>He literally walked in to my offce, told me he was bailing on the proejct, and gave me a used starbucks coupon like that was going to fix it.</p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
