import React, { Component } from 'react';
import BackdropTechniques from './components/BackdropTechniques';
import SideDrawerTechniques from './components/SideDrawerTechniques';
import TechniquesMarkUp from './components/TechniquesMarkUp';

class Techniques extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackdropTechniques click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <TechniquesMarkUp drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawerTechniques show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default Techniques;
