import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';

function getModalStyle() {
  return {
    width: '100wv',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: 0,
    left: '20%',
    textAlign: 'center',
    width: '60%',
    // maxHeight: '600px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
 
  const [modalStyle] = React.useState(getModalStyle);

  const ComponentTorender = props.component;

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ComponentTorender likes={props.likes} setBuy={props.setBuy}/>
      <SimpleModal />
    </div>);

  return (
    <div>
      <Modal
        style={modalStyle}
        open={props.openModal}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

SimpleModal.propTypes = {
  openModal: PropTypes.func,
  handleClose: PropTypes.func,
  component: PropTypes.string,
  likes: PropTypes.array,
  setBuy: PropTypes.func,
};
