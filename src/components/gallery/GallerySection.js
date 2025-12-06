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

const GallerySection = () => {
  const dogImages = [
    {
      id: "08",
      pimg: dimg8,
    },
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

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Lovely Dogs</h2>

        <div className="gallery-grid">
          {dogImages.map((ele, index) => (
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

export default GallerySection;
