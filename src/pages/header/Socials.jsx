import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Socials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/patricia-toko-3b4a84b6/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://twitter.com/Patricia_Toko_" target="_blank">
        <BsTwitter />
      </a>
      <a href="https://github.com/PTD01" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}

export default Socials;
