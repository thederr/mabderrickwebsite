import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Interests from "./components/MyInterests";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-100">
      <>
        <Particles
          className='particles-canvas'
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00",
                },
              },
            },
          }}
        />
        <Navbar />
        <Header />
        <AboutMe />
        <Interests />
        <Experience />
        <Portfolio />
        <Testimonials />
        <ContactMe />
        <Footer />
      </>
    </div>
  );
}

export default App;
