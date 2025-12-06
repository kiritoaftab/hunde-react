import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import About from "../../components/about/about";
import FunFact from "../../components/FunFact/FunFact";
import PricingSection from "../../components/PricingSection/PricingSection";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../images/hundecoach-logo.png";
import PartnerSection from "../../components/PartnerSection/PartnerSection";
import GallerySection from "../../components/gallery/GallerySection";

const AboutPage = () => {
  return (
    <Fragment>
      <Navbar hclass={"wpo-site-header wpo-site-header-s2"} Logo={Logo} />
      <PageTitle pageTitle={"About Us"} pagesub={"About"} />
      <About hclass={"about-section section-padding"} />
      <FunFact hclass={"funfact-section"} />
      <PricingSection pClass={"pricing-section section-padding"} />
      <GallerySection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutPage;
