import React from 'react';
import styles from './DrawerToggleButton.module.scss'

const drawerToggleButton = props => (
  <button className={styles.toggle_button} onClick={props.click}>
    <div className={styles.toggle_button__line}></div>
    <div className={styles.toggle_button__line}></div>
    <div className={styles.toggle_button__line}></div>
  </button>
)

export default drawerToggleButton;