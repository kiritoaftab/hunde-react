import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// image
import pimg1 from "../../images/partners/1.png";
import pimg2 from "../../images/partners/2.png";
import pimg3 from "../../images/partners/3.png";
import pimg4 from "../../images/partners/4.png";
import pimg5 from "../../images/partners/5.png";
import pimg6 from "../../images/partners/6.png";
import pimg7 from "../../images/partners/7.png";

import dimg1 from "../../images/dogs/dog-1.jpeg";
import dimg2 from "../../images/dogs/dog-2.jpeg";
import dimg3 from "../../images/dogs/dog-3.jpeg";
import dimg4 from "../../images/dogs/dog-4.jpeg";
import dimg5 from "../../images/dogs/dog-5.jpeg";
import dimg6 from "../../images/dogs/dog-6.jpeg";
import dimg7 from "../../images/dogs/dog-7.jpeg";

const partners = [
  {
    id: "01",
    pimg: dimg1,
  },
  {
    id: "02",
    pimg: dimg2,
  },
  {
    id: "03",
    pimg: dimg3,
  },
  {
    id: "04",
    pimg: dimg4,
  },
  {
    id: "05",
    pimg: dimg5,
  },
  {
    id: "06",
    pimg: dimg6,
  },
  {
    id: "07",
    pimg: dimg7,
  },
];

const PartnerSection = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 757,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="partners-section-s3">
      <h2 className="d-none">No Content</h2>
      <ul className="partners-slider-s3">
        <Slider {...settings}>
          {partners.map((partner, pitem) => (
            <li key={pitem}>
              <img className="object-contain" src={partner.pimg} alt="" />
            </li>
          ))}
        </Slider>
      </ul>
    </section>
  );
};

export default PartnerSection;
