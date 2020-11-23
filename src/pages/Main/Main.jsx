import React from "react";
import TopBar from './components/TopBar/TopBar';
import WannaTry from './components/WannaTry/WannaTry';
import CourseMain from "./components/CourseMain";

const Main = () => {
  return (<div>
    <TopBar />
    <CourseMain/>
    <WannaTry />
  </div>
  );
};

export default Main;
