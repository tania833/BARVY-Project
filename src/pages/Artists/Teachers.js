import React from 'react';
import { Switch, Route } from 'react-router-dom';
import OurTeachers from './components/OurTeachers/OurTeachers';
import ArtistPersonalPage from './components/PersonalPage/ArtistPersonalPage';

const Teachers = () => {
  return (
    <Switch>
      <Route exact path="/artists" component={OurTeachers} />
      <Route path="/artists/:path" component={ArtistPersonalPage} />
    </Switch>
  );
};

export default Teachers;
