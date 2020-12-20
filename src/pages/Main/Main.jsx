import React, { useEffect } from 'react';
import TopBar from './components/TopBar/TopBar';
import CourseMain from './components/CourseMain/CourseMain';
import WannaTry from './components/WannaTry/WannaTry';
import ArtistsMain from './components/ArtistsMain/ArtistsMain';
import FooterMainBlue from './components/FooterMainBlue/FooterMainBlue';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Technologies from './components/Technologies/FullTechnologies/FullTechnologies';
import LearnAndChoose from './components/LearnAndChoose/LearnAndChoose';
import PropTypes from 'prop-types';

const Main = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let width = window.innerWidth;
  let renderedWannaTry;
  if (width < 768) {
    renderedWannaTry = '';
  } else {
    renderedWannaTry = <WannaTry />;
  }
  return (
    <>
      <TopBar />
      <Technologies />
      <HowItWorks title="починаємо" subtitle="як це працює?" />
      <CourseMain likes={props.likes} setLikes={props.setLikes}/>
      <LearnAndChoose />
      {renderedWannaTry}
      <ArtistsMain />
      <FooterMainBlue />
    </>
  );
};

Main.propTypes = {
  likes: PropTypes.array,
  setLikes: PropTypes.function,
}

export default Main;
