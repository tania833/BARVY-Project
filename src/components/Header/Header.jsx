import React, { Component } from 'react';
import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';
import Toolbar from './Toolbar';
import PropTypes from 'prop-types';
import SimpleModal from './ModalMaterialUi';
import { ListLikes } from './ListLikes';
import Modals from '../Modules';
class Header extends Component {
  state = {
    sideDrawerOpen: false,
    openModal: false,
    openBasket: false,
  };

  handleOpen = () => {
    this.setState({ openModal: true });
  };

  handleClose = () => {
    this.setState({ openModal: false });
  };

  handleBasketOpen = () => {
    this.setState({ openBasket: true });
  };

  handleBasketClose = () => {
    this.setState({ openBasket: false });
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
          openBasket={this.handleBasketOpen}
        />
        <SimpleModal
          openModal={this.state.openModal}
          handleClose={this.handleClose}
          component={ListLikes}
          likes={this.props.likes}
        />
        <SimpleModal
          openModal={this.state.openBasket}
          handleClose={this.handleBasketClose}
          likes={this.props.buy}
          component={Modals}
          setBuy={this.props.setBuy}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}

Header.propTypes = {
  likes: PropTypes.array,
  setLikes: PropTypes.function,
  buy: PropTypes.array,
  setBuy: PropTypes.function,
};

export default Header;
