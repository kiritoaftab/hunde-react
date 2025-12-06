import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import Services from "../../api/Services";
import ServiceSidebar from "./sidebar";
import Contact from "./contact";
import simg1 from "../../images/service-single/img-1.jpg";
import simg2 from "../../images/service-single/img-2.jpg";
import Footer from "../../components/footer/Footer";
import logo from "../../images/hundecoach-logo.png";

const ServiceSinglePage = (props) => {
  const { slug } = useParams();

  const serviceDetails = Services.find((item) => item.slug === slug);

  return (
    <Fragment>
      <Navbar Logo={logo} hclass={"wpo-site-header wpo-site-header-s2"} />
      <PageTitle pageTitle={serviceDetails.title} pagesub={"Service Single"} />
      <div className="wpo-service-single-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="wpo-service-single-wrap">
                <div className="wpo-service-single-item">
                  <div className="wpo-service-single-main-img">
                    <img
                      src={serviceDetails.bannerImage ?? serviceDetails.simage}
                      alt=""
                    />
                  </div>
                  <div className="wpo-service-single-title">
                    <h3>{serviceDetails.title}</h3>
                  </div>
                  <p>
                    {serviceDetails.desc1
                      ? serviceDetails.desc1
                      : `                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac
                    nibh fermentum nisi, platea condimentum cursus velit dui.
                    Massa volutpat odio facilisis purus sit elementum. Non, sed
                    velit dictum quam. Id risus pharetra est, at rhoncus, nec
                    ullamcorper tincidunt. Id aliquet duis sollicitudin diam,
                    elit sit. Et nisi in libero facilisis sed est. Elit
                    curabitur amet risus bibendum. Posuere et eget orci, tempor
                    enim.`}
                  </p>
                  <p>
                    {serviceDetails.desc2
                      ? serviceDetails.desc2
                      : `Hac nibh fermentum nisi, platea condimentum cursus velit
                    dui. Massa volutpat odio facilisis purus sit elementum. Non,
                    sed velit dictum quam. Id risus pharetra est, at rhoncus,
                    nec ullamcorper tincidunt. Id aliquet duis sollicitudin
                    diam, elit sit.`}
                  </p>
                  <div className="row mt-4">
                    {serviceDetails?.images?.map((imageSrc, index) => {
                      return (
                        <div className="col-md-6 col-sm-6 col-12">
                          <div className="wpo-p-details-img object-contain">
                            <img src={imageSrc} alt="" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="wpo-service-single-item list-widget">
                  <div className="wpo-service-single-title">
                    <h3>Our Capabilities</h3>
                  </div>
                  <p>{serviceDetails?.ourCapabilitiesDesc}</p>
                  <ul>
                    {Array.isArray(serviceDetails?.ourCapabilitiesList) ? (
                      serviceDetails.ourCapabilitiesList.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <>
                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                        <li>
                          Id risus pharetra est, at rhoncus, nec ullamcorper
                          tincidunt.
                        </li>
                        <li>
                          Hac nibh fermentum nisi, platea condimentum cursus.
                        </li>
                        <li>
                          Massa volutpat odio facilisis purus sit elementum.
                        </li>
                        <li>Elit curabitur amet risus bibendum.</li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="wpo-service-single-item">
                  <div className="wpo-service-single-title">
                    <h3>Our approach</h3>
                  </div>
                  <p>
                    {serviceDetails?.ourApproach ??
                      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
                  </p>
                </div>
                <div className="wpo-service-single-item list-widget">
                  <div className="wpo-service-single-title">
                    <h3>Our Work Process</h3>
                  </div>
                  <ul>
                    {Array.isArray(serviceDetails?.ourWorkProcess) ? (
                      serviceDetails.ourWorkProcess.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <>
                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                        <li>
                          Id risus pharetra est, at rhoncus, nec ullamcorper
                          tincidunt.
                        </li>
                        <li>
                          Hac nibh fermentum nisi, platea condimentum cursus.
                        </li>
                        <li>
                          Massa volutpat odio facilisis purus sit elementum.
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="wpo-service-single-item">
                  <div className="wpo-service-contact-area">
                    <div className="wpo-contact-title">
                      <h2>Have project in mind? Let's discuss</h2>
                      <p>
                        Get in touch with us to see how we can help you with
                        your project
                      </p>
                    </div>
                    <div className="wpo-contact-form-area">
                      <Contact />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ServiceSinglePage;
