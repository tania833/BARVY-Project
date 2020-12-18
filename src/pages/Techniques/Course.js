import React, { Component } from 'react';
import BackdropTechniques from './components/BackdropTechniques';
import SideDrawerTechniques from './components/SideDrawerTechniques';
import CourseMarkUp from './components/CourseMarkUp';

class Course extends Component {
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
        <CourseMarkUp drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawerTechniques show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

export default Course;
