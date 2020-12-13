import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullArtists from './FullArtists';
import Teachers from './Teachers';

const ArtistsFalse = () => {
  return (
    <Switch>
      <Route exact path="/artists" component={FullArtists} />
      <Route path="/artists/:number" component={Teachers} />
    </Switch>
  );
};

export default ArtistsFalse;
