import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullTechnologies from './FullTechnologies/FullTechnologies';
import CoursePage from './CoursePage/CoursePage';

const Technologies = () => {
  return (
    <Switch>
      <Route exact path="/technologies" component={FullTechnologies} />
      <Route path="/technologies/:path" component={CoursePage} />
    </Switch>
  );
};

export default Technologies;
