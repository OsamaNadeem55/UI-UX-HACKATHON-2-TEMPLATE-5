import AboutUs from "@/components/about-components/aboutus";
import BigCompannies from "@/components/about-components/companies";
import MeetTeam from "@/components/about-components/meetTeam";
import Problem from "@/components/about-components/problem";
import Work from "@/components/about-components/work";
import Footer from "@/components/shop-components/footer";
import Header from "@/components/shop-components/header";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <Problem />
      <MeetTeam />
      <BigCompannies />
      <Work />
      <Footer />
    </>
  );
};

export default AboutPage;
