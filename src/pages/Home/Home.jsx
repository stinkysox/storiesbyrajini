import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import MarqueeImages from "../../components/MarqueeImages/MarqueeImages";
import StatsCounter from "../../components/StatsCounter/StatsCounter";
import OurServices from "../../components/OurServices/OurServices";
import TeasersSection from "../../components/TeasersSection/TeasersSection";
import LatestWork from "../../components/LatestWork/LatestWork";
import Testimonials from "../../components/Testimonials/Testimonials";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import BannerBottom from "../../components/BannerBottom/BannerBottom";
import GridComponent from "../../components/GridComponent/GridComponent";
const Home = () => {
  return (
    <section className="home-container">
      <Navbar />
      <BannerBottom
        title="Cinematic"
        backgroundImage="https://i.pinimg.com/736x/55/46/eb/5546eb0f10e375606510873ad285a23d.jpg"
      />
      <Banner />
      <BannerBottom
        title="Framed inForever"
        backgroundImage="https://i.pinimg.com/736x/f9/80/4c/f9804c485f40ee95e9eb2c022165326e.jpg"
      />
      <MarqueeImages />
      <BannerBottom
        title="Chasing Light &Love"
        backgroundImage="https://i.pinimg.com/736x/4f/48/f2/4f48f212c058a80cb5ffd0bfaa15d74c.jpg"
      />
      <StatsCounter />
      <BannerBottom
        title="Stories inStills"
        backgroundImage="https://i.pinimg.com/736x/27/ca/2c/27ca2cb9634c5891aaec994b70961f66.jpg"
      />
      <GridComponent />
      <OurServices />
      <BannerBottom
        title="Echoes ofEmotion"
        backgroundImage="https://i.pinimg.com/736x/4e/02/da/4e02da506332904adddfa0e24ecc5ae8.jpg"
      />
      <LatestWork />
      <BannerBottom
        title="Time HeldGently"
        backgroundImage="https://i.pinimg.com/736x/62/c6/b8/62c6b82e5cae5a38fb8bf6bd042cc0dc.jpg"
      />
      <TeasersSection />
      <BannerBottom
        title="The Human Lens"
        backgroundImage="https://i.pinimg.com/736x/a4/c3/aa/a4c3aade036e38a343d8232d30420457.jpg"
      />
      <Testimonials />
      <BannerBottom
        title="Unscripted Beauty"
        backgroundImage="https://i.pinimg.com/736x/54/4f/03/544f03e4a344323639d709682b87f42c.jpg"
      />
      <ContactSection />
      <BannerBottom
        title="Moments Between Moments"
        backgroundImage="https://i.pinimg.com/736x/f2/87/6e/f2876ed85883462f521b2b8cd5ce3769.jpg"
      />
      <Footer />
      <ScrollButton />
    </section>
  );
};

export default Home;
