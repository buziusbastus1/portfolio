import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const about = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>about me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>
                experience<small>+5 years working</small>
              </h5>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>
                clients<small>200+ clients</small>
              </h5>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>
                projects<small>80+ completed</small>
              </h5>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            qui animi. Perferendis, animi repudiandae, numquam quae qui id
            voluptas aliquid magni aliquam illo voluptatem impedit tempora eius
            atque, quos accusamus.
          </p>
          <a href="#contact" className="btn btn-primary">let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default about;
