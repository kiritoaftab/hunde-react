import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const PricingSection = (props) => {
  const [plan] = useState([
    {
      id: "01",
      name: "First Consultation",
      price: "2,000",
      features: [
        "1.5 hour face-to-face consultation",
        "Held at Board & Train Studio or training plot",
        "Assessment of dog behaviour & training goals",
        "Personalised training plan",
      ],
      buttonText: "Get in Touch",
    },
    {
      id: "02",
      name: "Board & Train",
      price: "1,800",
      features: [
        "Starting at Rs 1,800 per day",
        "Intensive daily training",
        "Structured routines & socialisation",
        "Progress updates for owners",
      ],
      buttonText: "Enquire Now",
    },
    {
      id: "03",
      name: "Day Training",
      price: "1,200",
      features: [
        "Rs 1,200 per day",
        "Daily drop-off training",
        "Focus on obedience & manners",
        "Great for busy owners",
      ],
      buttonText: "Enquire Now",
    },
    {
      id: "04",
      name: "Virtual Sessions",
      price: "1,200",
      features: [
        "Rs 1,200 per session",
        "Live online coaching",
        "Training guidance & behaviour support",
        "Ideal for out-of-city clients",
      ],
      buttonText: "Book Session",
    },
    {
      id: "05",
      name: "Visiting Sessions",
      price: "1,200",
      features: [
        "Rs 1,200 per session",
        "Training at your home",
        "Focus on real-life behaviours",
        "Suitable for obedience & manners",
      ],
      buttonText: "Enquire Now",
    },
    // {
    //   id: "06",
    //   name: "Neutrality Sessions",
    //   price: "",
    //   features: [
    //     "Helps dogs stay calm around triggers",
    //     "Improves confidence & focus",
    //     "Great for reactive dogs",
    //     "Price on enquiry",
    //   ],
    //   buttonText: "Enquire Now",
    // },
    // {
    //   id: "07",
    //   name: "Pack Walks",
    //   price: "",
    //   features: [
    //     "Structured group walks",
    //     "Improves leash manners",
    //     "Helps with dog-dog neutrality",
    //     "Price on enquiry",
    //   ],
    //   buttonText: "Join Waitlist",
    // },
  ]);

  const { sectiontitleshow = true } = props;

  return (
    <section className={"" + props.pClass}>
      <div className="container">
        {sectiontitleshow && (
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="section-title">
                <h3>Pricing</h3>
                <h2>Special Packages For Your Pet</h2>
              </div>
            </div>
          </div>
        )}
        <div className="pricing-wrap row g-0 align-items-center">
          {plan.map((palns, pritem) => (
            <div className="col col-lg-4 col-md-6 col-12" key={pritem}>
              <div className="pricing-card">
                <h2>{palns.name}</h2>
                <div className="price">
                  {palns.price ? `₹${palns.price}` : "Contact for Pricing"}
                </div>

                <ul className="features">
                  {palns.features.map((feature, featureitem) => (
                    <li key={featureitem}>{feature}</li>
                  ))}
                </ul>
                <Link
                  onClick={ClickHandler}
                  to="/contact"
                  className="theme-btn-s2"
                >
                  {palns.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
