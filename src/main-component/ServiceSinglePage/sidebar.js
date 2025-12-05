import React from "react";
import { Link } from "react-router-dom";
import ins1 from "../../images/instragram/7.jpg";
import ins2 from "../../images/instragram/8.jpg";
import ins3 from "../../images/instragram/9.jpg";
import ins4 from "../../images/instragram/10.jpg";
import ins5 from "../../images/instragram/11.jpg";
import ins6 from "../../images/instragram/12.jpg";

const ServiceSidebar = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="col-lg-4 col-md-8">
      <div className="blog-sidebar">
        {/* Contact Widget */}
        <div className="wpo-newsletter-widget widget">
          <h3>Get in Touch</h3>
          <p>Have questions about a training program? Reach out anytime.</p>
          <ul className="list-widget">
            <li>
              <strong>WhatsApp : </strong>
              <a href="https://wa.me/919900172766" target="_blank">
                Chat Now
              </a>
            </li>
            <li>
              <strong>Email : </strong>
              <a href="mailto:hundecoachsabine@gmail.com">
                hundecoachsabine@gmail.com
              </a>
            </li>
            <li>
              <strong>Location : </strong>
              <a
                href="https://maps.app.goo.gl/2QkTCbkkfMepDQ4U6"
                target="_blank"
              >
                Vidyaranyapura, North Bangalore
              </a>
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="wpo-newsletter-widget widget">
          <h3>Certifications</h3>
          <ul className="cert-list">
            <li>Certified Dog Trainer</li>
            <li>Canine Behaviourist</li>
            <li>Fun Agility Coach</li>
          </ul>
        </div>

        {/* Service Quick Links */}
        <div className="wpo-newsletter-widget widget">
          <h3>Training Programs</h3>
          <ul>
            <li>
              <Link onClick={ClickHandler} to="/service-single/board-and-train">
                Board & Train
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/service-single/day-training">
                Day Training
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/service-single/puppy-jumpstart">
                Puppy Jumpstart
              </Link>
            </li>
            <li>
              <Link
                onClick={ClickHandler}
                to="/service-single/visiting-sessions"
              >
                Visiting Sessions
              </Link>
            </li>
            <li>
              <Link
                onClick={ClickHandler}
                to="/service-single/virtual-sessions"
              >
                Virtual Sessions
              </Link>
            </li>
            <li>
              <Link
                onClick={ClickHandler}
                to="/service-single/neutrality-sessions"
              >
                Neutrality Sessions
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/service-single/pack-walks">
                Pack Walks
              </Link>
            </li>
          </ul>

          <Link
            onClick={ClickHandler}
            to="/services"
            className="theme-btn-s2 sidebar-btn"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
