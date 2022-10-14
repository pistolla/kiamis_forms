import { lazy } from "react";
import IntroContent from "./IntroContent.json";
import MiddleBlockContent from "./MiddleBlockContent.json";
import AboutContent from "./AboutContent.json";
import MissionContent from "./MissionContent.json";
import ProductContent from "./ProductContent.json";
import ContactContent from "./ContactContent.json";
import React from "react";
import Header from "../../components/landing/Header";
import { Styles } from "../../styles/styles";
import Footer from "../../components/landing/Footer";

const Contact = lazy(() => import("../../components/landing/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/landing/MiddleBlock"));
const Container = lazy(() => import("../../components/common/Container"));
const ScrollToTop = lazy(() => import("../../components/common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/landing/ContentBlock"));

const Home = () => {
  return (
    <React.Fragment>
      <Styles />
      <Header />
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="developer.svg"
          id="intro"
        />
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
        />
        <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="graphs.svg"
          id="about"
        />
        <ContentBlock
          type="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
        />
        <ContentBlock
          type="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
        />
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
