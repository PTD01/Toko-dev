import React from "react";
import styles from "../../styles/Home.module.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

function About() {
  return (
    <section id="about" className={styles.About}>
      <div>
        <h5>Get to know</h5>
        <h1>About me</h1>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img
                src="https://res.cloudinary.com/djkf4l52i/image/upload/v1680989112/us-sitting_xwkkgf.png"
                alt=""
              />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small> -1 year experience</small>
              </article>
            </div>
            <div className="about__cards">
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small> 10+ clients worldwide </small>
              </article>
            </div>
            <div className="about__cards">
              <article className="about__card">
                <VscFolderActive className="about__icon" />
                <h5>Projects</h5>
                <small> 10+ completed projects</small>
              </article>
            </div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>{" "}
            <br />
            <a href="#contact" className="btn btn-primary">
              Let's connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
