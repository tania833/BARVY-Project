import React from "react";
import TopBar from "./components/TopBar/TopBar";
import CourseMain from "./components/CourseMain/CourseMain";
import WannaTry from "./components/WannaTry/WannaTry";
// import ArtistsMain from "./components/ArtistsMain/ArtistsMain";
import FooterMainBlue from "./components/FooterMainBlue/FooterMainBlue";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Technologies from "./components/Technologies/Technologies";

const Main = () => {
  return (
    <div>
      <TopBar />
      <Technologies />
      <HowItWorks />
      <CourseMain />
      <WannaTry />
      {/* <ArtistsMain /> */}
      <FooterMainBlue />
    </div>
  );
};

export default Main;
