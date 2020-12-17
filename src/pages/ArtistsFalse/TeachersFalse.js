import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullTeachers from './FullTeachers';
import ArtistPersonalPage from './ArtistPersonalPage';

const TeachersFalse = () => {
  return (
    <Switch>
      <Route exact path="/artists" component={FullTeachers} />
      <Route path="/artists/:path" component={ArtistPersonalPage} />
    </Switch>
  );
};

export default TeachersFalse;
