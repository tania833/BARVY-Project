import React from 'react';
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
// import Technologies from './pages/Main/components/Technologies/Technologies';
import Technologies from './pages/Main/components/Technologies/Technologies';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={Teachers} path="/artists" />
          <Route component={Techniques} path="/techniques" />
          <Route component={Events} path="/events" />
          <Route component={About} path="/about" />
          <Route component={Contacts} path="/contacts" />
          {/* <Route component={Technologies} path="/technologies" /> */}
          <Route component={Technologies} path="/technologies" />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
