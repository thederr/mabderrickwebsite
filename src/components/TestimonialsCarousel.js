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
          <h3>Johnnyboy</h3>
          <p> Wow these Software Factory peeps don't commit any code</p>
        </div>
      </>
      <>
        <img src={avatar2} alt='Joline' />
        <div className='mycarousel'>
          <h3>Joline</h3>
          <p>" I would rather have Derrick"</p>
        </div>
      </>
      <>
        <img src={avatar3} alt='Taco' />
        <div className='mycarousel'>
          <h3>Taco</h3>
          <p>
            {" "}
            "Dude, I would rather have your brother, at least he would try."
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt='Oliver' />
        <div className='mycarousel'>
          <h3>Oliver the Weinerdog</h3>
          <p> Bark Bark Bark BARKBARKBARK barkyied bark bark ruff</p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
