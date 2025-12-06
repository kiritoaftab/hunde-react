import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Logo from "../../images/hundecoach-logo.png";
import CertificateSection from "../../components/gallery/CertificateSection";

const CertificationPage = () => {
  return (
    <Fragment>
      <Navbar hclass={"wpo-site-header wpo-site-header-s2"} Logo={Logo} />
      <PageTitle pageTitle={"Gallery"} pagesub={"Gallery"} />
      <CertificateSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default CertificationPage;
