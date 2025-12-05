import React from "react";
import { Link } from "react-router-dom";
import VideoModal from "../ModalVideo/VideoModal";
import VideoModalS2 from "../ModalVideoS2/VideoModalS2";

import image from "../../images/about/about-image.jpeg";
import icon from "../../images/ab-icon.png";
import paws1 from "../..//images/paws-6.png";
import paws2 from "../..//images/paws-7.png";

const About = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={"" + props.hclass}>
      <div className="wraper">
        <div className="left">
          <div className="image">
            <img src={image} alt="Hundecoach Sabine" />
            <div className="shape">
              <svg width="793" height="786" viewBox="0 0 793 786" fill="none">
                <path
                  d="M84.9007 505.664C-181.681 609.802 245.585 843.801 512.633 772.246C713.751 718.356 833.104 511.631 779.214 310.513C725.325 109.395 552.6 -41.9576 351.482 11.9319C150.364 65.8214 351.482 401.526 84.9007 505.664Z"
                  fill="#FFEFEB"
                />
              </svg>
            </div>
          </div>

          <div className="about-video">
            <div className="icon">
              <img src={icon} alt="Training Videos" />
            </div>
            <h2>Training That Builds Better Bonds</h2>
            <p>
              Learn how clear communication, consistency, and understanding your
              dog’s needs create long-lasting training results.
            </p>
            <div className="video-holder">
              <VideoModalS2 />
            </div>
          </div>
        </div>

        <div className="right">
          <span>About Me</span>
          <h2>Certified Dog Trainer & Canine Behaviourist</h2>
          <p>
            Hi! I’m Sabine, a Certified Dog Trainer, Canine Behaviourist and Fun
            Agility Coach based in Vidyaranyapura, North Bangalore. I help dogs
            and their humans build trust, confidence and better communication
            for smoother daily life. I offer training options for puppies and
            adult dogs—whether they’re starting fresh or already have some
            foundation.
          </p>

          <div className="about-btn">
            <Link onClick={ClickHandler} to="/about" className="theme-btn-s2">
              Discover More
            </Link>
            <div className="video-wrap">
              <div className="video-holder">
                <VideoModal />
              </div>
              <span>Watch Videos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="shape">
        <img src={paws1} alt="decorative paws" />
      </div>
      <div className="shape-2">
        <img src={paws2} alt="decorative paws" />
      </div>
    </section>
  );
};

export default About;
