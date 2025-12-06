import React from "react";
// import "./GallerySection.scss";
import dimg1 from "../../images/dogs/dog-1.jpeg";
import dimg2 from "../../images/dogs/dog-2.jpeg";
import dimg3 from "../../images/dogs/dog-3.jpeg";
import dimg4 from "../../images/dogs/dog-4.jpeg";
import dimg5 from "../../images/dogs/dog-5.jpeg";
import dimg6 from "../../images/dogs/dog-6.jpeg";
import dimg7 from "../../images/dogs/dog-7.jpeg";
import dimg8 from "../../images/dogs/dog-max.jpeg";

import cimg1 from "../../images/certifications/cert-1.jpeg";
import cimg2 from "../../images/certifications/cert-2.jpeg";
import cimg3 from "../../images/certifications/cert-3.jpeg";
import cimg4 from "../../images/certifications/cert-4.jpeg";
import cimg5 from "../../images/certifications/cert5.jpeg";
import cimg6 from "../../images/certifications/cert-6.jpeg";
import cimg7 from "../../images/certifications/cert-7.jpeg";
import cimg8 from "../../images/certifications/cert-8.jpeg";
import cimg9 from "../../images/certifications/cert-9.jpeg";
import cimg10 from "../../images/certifications/cert-10.jpeg";
import cimg11 from "../../images/certifications/cert-11.jpeg";
import cimg12 from "../../images/certifications/cert-12.jpeg";
import cimg13 from "../../images/certifications/cert-13.jpeg";

const CertificateSection = () => {
  const certImages = [
    { id: "01", pimg: cimg1 },
    { id: "02", pimg: cimg2 },
    { id: "03", pimg: cimg3 },
    { id: "04", pimg: cimg4 },
    { id: "05", pimg: cimg5 },
    { id: "06", pimg: cimg6 },
    { id: "07", pimg: cimg7 },
    { id: "08", pimg: cimg8 },
    { id: "09", pimg: cimg9 },
    { id: "10", pimg: cimg10 },
    { id: "11", pimg: cimg11 },
    { id: "12", pimg: cimg12 },
    { id: "13", pimg: cimg13 },
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">My Certifications & Diploma</h2>

        <div className="gallery-grid">
          {certImages.map((ele, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={ele.pimg}
                alt={`dog-${index}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
