import React from "react";
import styles from "./css_modules/Title.module.scss";

const MainTitle = (props) => {
  return (
    <div className={styles.mainTitle_wrapper}>
      <div className={styles.mainTitle}>{props.title}</div>
      <div className={styles.mainSubtitle}>{props.subtitle}</div>
    </div>
  );
};

export default MainTitle;
