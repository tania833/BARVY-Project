import React, { useState } from 'react';
import './normalize.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Events from './pages/Events/Events';
import Course from './pages/Course/Course';
import About from './pages/About/About';
import Techniques from './pages/Techniques/Techniques';
import Footer from './components/Footer';
import page404 from './pages/404/page404';
import Teachers from './pages/Artists/Teachers';
import { Contacts } from './pages/Contacts/Contacts';
import Technologies from './pages/Main/components/Technologies/Technologies';

function App() {
  const [likes, setLikes] = useState([]);
  return (
    <BrowserRouter>
      <Header likes={likes} setLikes={setLikes} />
      <div className="container">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Main {...props} likes={likes} setLikes={setLikes} />
            )}
          />
          <Route component={Teachers} path="/artists" />
          <Route
            path="/techniques"
            exact
            render={(props) => (
              <Techniques {...props} likes={likes} setLikes={setLikes} />
            )}
          />
          <Route component={Events} path="/events" />
          <Route component={About} path="/about" />
          <Route
            path="/course"
            exact
            render={(props) => (
              <Course {...props} likes={likes} setLikes={setLikes} />
            )}
          />
          <Route component={page404} path="/404" />
          <Route component={Contacts} path="/contacts" />
          <Route component={Technologies} path="/technologies" />
          <Route component={Course} path="/course" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
