import React, { useState } from 'react';
import './normalize.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Events from './pages/Events/Events';
import About from './pages/About/About';
import Techniques from './pages/Techniques/Techniques';
import Footer from './components/Footer';
import Teachers from './pages/Artists/Teachers';
import { Contacts } from './pages/Contacts/Contacts';
import Technologies from './pages/Main/components/Technologies/Technologies';

function App() {
  const [likes, setLikes] = useState([]);
  const [buy, setBuy] = useState([]);
  return (
    <BrowserRouter>
      <Header likes={likes} setLikes={setLikes} buy={buy} setBuy={setBuy} />
      <div className="container">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Main
                {...props}
                likes={likes}
                setLikes={setLikes}
                buy={buy}
                setBuy={setBuy}
              />
            )}
          />

          <Route
            path="/artists"
            exact
            render={(props) => (
              <Teachers
                {...props}
                likes={likes}
                setLikes={setLikes}
                buy={buy}
                setBuy={setBuy}
              />
            )}
          />
          <Route
            path="/techniques"
            exact
            render={(props) => (
              <Techniques
                {...props}
                likes={likes}
                setLikes={setLikes}
                buy={buy}
                setBuy={setBuy}
              />
            )}
          />
          <Route component={Events} path="/events" />
          <Route component={About} path="/about" />
          <Route component={Contacts} path="/contacts" />
          <Route
            path="/technologies"
            exact
            render={(props) => (
              <Technologies
                {...props}
                likes={likes}
                setLikes={setLikes}
                buy={buy}
                setBuy={setBuy}
              />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
