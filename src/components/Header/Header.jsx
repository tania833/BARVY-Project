import React, { Component } from 'react';
import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';
import Toolbar from './Toolbar';
import PropTypes from 'prop-types';
import SimpleModal from './ModalMaterialUi';
import {ListLikes} from './ListLikes';

class Header extends Component {
  state = {
    sideDrawerOpen: false,
    openModal: false,
  };

  handleOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
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
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: '50%', position: 'relative' }}>
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          likes={this.props.likes}
          setLikes={this.props.setLikes}
          openModal={this.handleOpen}
        />
        <SimpleModal openModal={this.state.openModal} handleClose={this.handleClose} component={ListLikes} likes={this.props.likes}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

Header.propTypes = {
  likes: PropTypes.array,
  setLikes: PropTypes.function,
};

export default Header;
