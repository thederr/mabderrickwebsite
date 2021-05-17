import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "./avatar-1.png"
import avatar2 from "./avatar-2.png"
import avatar3 from "./avatar-3.png"
import avatar4 from "./avatar-4.png"

const TestimonialsCarousel = () => {
  return (
    <Carousel>
        <>
      <img
      src={avatar1}
      alt="Johnnyboy"
      />
      <h3>Johnnyboy</h3>
      <p> Wow these Software Factory peeps don't commit any code</p>
        </>
        <>
      <img
      src={avatar2}
      alt="Joline"
      />
      <h3>Joline</h3>
      <p>Wow, its amazing what good work he does in the short amount of time he's been learning!! 10/10 would hire him again</p>
        </>
        <>
      <img
      src={avatar3}
      alt="Taco"
      />
      <h3>Taco</h3>
      <p> HellERRRRRR</p>
        </>
        <>
      <img
      src={avatar4}
      alt="Oliver"
      />
      <h3>Oliver the Weinerdog</h3>
      <p> BORK!</p>
        </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
