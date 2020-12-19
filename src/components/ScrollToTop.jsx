import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(6),
      right: theme.spacing(6),

    },
    button: {
      backgroundColor: "#bdd9e4",
      width: '5rem',
      height: '5rem'
    },
    icon: {
      width: '3rem',
      height: '3rem',
      color: 'rgba(0, 0, 0, 0.53)',
    }
  }),
);

export const  ScrollTop = (props) => {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target:  window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export const BackToTop = (props) => {
  const classes = useStyles();
  return (
      <ScrollTop {...props}>
        <Fab size="large" aria-label="scroll back to top" className={classes.button}>
          <KeyboardArrowUpIcon className={classes.icon}/>
        </Fab>
      </ScrollTop>
  );
}

ScrollTop.propTypes = {
    children: PropTypes.ReactElement,
    window: PropTypes.Window,
}

export default BackToTop;
