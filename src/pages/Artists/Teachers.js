import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import OurTeachers from './components/OurTeachers/OurTeachers';
import ArtistPersonalPage from './components/PersonalPage/ArtistPersonalPage';
import PropTypes from 'prop-types';

const Teachers = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Switch>
      <Route exact path="/artists" component={OurTeachers} />
      <Route
        path="/artists/:path"
        component={ArtistPersonalPage}
        likes={props.likes}
        setLikes={props.setLikes}
        buy={props.buy}
        setBuy={props.setBuy}
      />
    </Switch>
  );
};

Teachers.propTypes = {
  likes: PropTypes.array,
  buy: PropTypes.array,
  setLikes: PropTypes.function,
  setBuy: PropTypes.function,
};
export default Teachers;
