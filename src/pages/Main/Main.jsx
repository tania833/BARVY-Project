import React from "react";
import TopBar from "./components/TopBar/TopBar";
import CourseMain from "./components/CourseMain/CourseMain";
import WannaTry from "./components/WannaTry/WannaTry";
import ArtistsMain from "./components/ArtistsMain/ArtistsMain";
import FooterMainBlue from "./components/FooterMainBlue/FooterMainBlue";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Technologies from "./components/Technologies/Technologies";
import LearnAndChoose from "./components/LearnAndChoose/LearnAndChoose";

const Main = () => {
  return (
    <>
      <TopBar />
      <Technologies />
      <HowItWorks />
      <CourseMain />
      <LearnAndChoose />
      <WannaTry />
      <ArtistsMain />
      <FooterMainBlue />
    </>
  );
};

export default Main;
