import Link from "next/link";
import React from "react";
import Socials from "./Socials";

function CTA() {
  return (
    <>
      <div className="cv">
        <a href="" download id="link" className="btn">
          Download cv
        </a>
        <a href="#contact" id="link" className="btn btn-primary">
          Let's connect
        </a>
      </div>
      <Socials />
      <div className="me">
        <img
          src="https://res.cloudinary.com/djkf4l52i/image/upload/v1680968172/me_w6m6ve.png"
          alt="My image"
          className="img"
        />
      </div>
      <a href="#contact" className="scroll__down">
        Scroll down for more
      </a>
    </>
  );
}

export default CTA;
