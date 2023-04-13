import * as React from "react";
import Splash from "../../public/Components/Splashscreen/Splash";
import Header from "./header/Header";
import Nav from "./nav/Nav";
import About from "./about/About";
import Experiennce from "./experience/Experiennce";
import Whatwedo from "./whatwedo/Whatwedo";
import Portfolio from "./portfolio/Portfolio";
import Testimonial from "./testimonials/Testimonial";
import Contact from "./contact/Contact";

function index() {
  return (
    <>
      <Splash />
      <Header />
      <Nav />
      <About />
      <Experiennce />
      <Whatwedo />
      <Portfolio />
      <Testimonial />
      <Contact />
      <footer />
    </>
  );
}

export default index;
