import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

/* images */
import Img1 from "../../images/slider/dog-slide-1.png";
import Img2 from "../../images/slider/dog-slide-2.png";
import Img3 from "../../images/slider/dog-slide-1.png";
import Img4 from "../../images/slider/dog-slide-2.png";
import Img5 from "../../images/slider/dog-slide-right-2.png";
import Img6 from "../../images/slider/dog-small-right-1.png";
import Img7 from "../../images/slider/dog-slide-right-2.png";
import Img8 from "../../images/slider/dog-small-right-1.png";

import shape from "../../images/slider/shape-1.svg";
import shape2 from "../../images/slider/shape-2.svg";
import shape3 from "../../images/slider/shape-3.svg";
import shape4 from "../../images/slider/shape-4.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

function Hero(props) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <section className={"" + props.hclass}>
      <div className="hero-inner-slider">
        <div className="hero-inner">
          <h2>Welcome to Hundecoach Sabine</h2>
          <h3>Training Dogs & Teaching Humans</h3>

          <p>
            Effective dog training begins with understanding both the dog and
            the human. I help you communicate clearly, build good habits, and
            create long-lasting results. <br />
            <br />
            I’m Sabine — Certified Dog Trainer, Canine Behaviourist & Fun
            Agility Coach based in Vidyaranyapura, North Bangalore. I offer
            training programs for dogs of all ages, sizes, and breeds.
          </p>

          <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <Slider
          className="top-image"
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          autoplay={true}
          slidesToShow={1}
          arrows={false}
          fade={true}
        >
          <img src={Img1} alt="Pet care service 1" />
          <img src={Img2} alt="Pet care service 2" />
          <img src={Img3} alt="Pet care service 3" />
          <img src={Img4} alt="Pet care service 4" />
        </Slider>
        <Slider
          className="buttom-image"
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
          vertical={true}
          verticalSwiping={true}
          responsive={[
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                infinite: true,
                vertical: false,
                verticalSwiping: false,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                infinite: true,
                vertical: false,
                verticalSwiping: false,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 2,
                infinite: true,
                vertical: false,
                verticalSwiping: false,
              },
            },
          ]}
        >
          <div className="item">
            <img src={Img5} alt="Small pet care 1" />
          </div>
          <div className="item">
            <img src={Img6} alt="Small pet care 2" />
          </div>
          <div className="item">
            <img src={Img7} alt="Small pet care 3" />
          </div>
          <div className="item">
            <img src={Img8} alt="Small pet care 4" />
          </div>
        </Slider>
      </div>
      <div className="paw-1">
        <img src={shape} alt="paw shape 1" />
      </div>
      <div className="paw-2">
        <img src={shape2} alt="paw shape 2" />
      </div>
      <div className="paw-3">
        <img src={shape3} alt="paw shape 3" />
      </div>
      <div className="paw-4">
        <img src={shape4} alt="paw shape 4" />
      </div>
    </section>
  );
}

export default Hero;
