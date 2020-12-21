import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullTechnologies from './FullTechnologies/FullTechnologies';
import CoursePage from './CoursePage/CoursePage';
import PropTypes from 'prop-types';

const Technologies = (props) => {
  return (
    <Switch>
      <Route exact path="/technologies" component={FullTechnologies} />
      <Route
        path="/technologies/:path"
        component={CoursePage}
        likes={props.likes}
        setLikes={props.setLikes}
        buy={props.buy}
        setBuy={props.setBuy}
      />
    </Switch>
  );
};

Technologies.propTypes = {
  likes: PropTypes.array,
  buy: PropTypes.array,
  setLikes: PropTypes.function,
  setBuy: PropTypes.function,
};

export default Technologies;
