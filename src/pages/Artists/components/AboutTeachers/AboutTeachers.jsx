import React from 'react';
import styles from './AboutTeachers.module.scss';
import PropTypes from 'prop-types';

const AboutTeachers = (props) => {
  const items = props.our_teachers_info.map((item) => (
    <section className={styles.teachersRow} key={item.id}>
      <div className={styles.teachersRow__item}>
        <a className={styles.teachersPhoto__wrapper} href="/">
          <img
            className={styles.teachersPhoto__photo}
            src={item.imgInfo.url}
            alt={item.imgInfo.alt}
          />
        </a>
        <div className={styles.teachersInfo}>
          <a href="/">
            <div className={styles.teachersInfo__name}>
              {item.teacherInfo.name}
            </div>
          </a>
          <a href="/">
            <div className={styles.teachersInfo__technique}>
              {item.teacherInfo.technique}
            </div>
          </a>
        </div>
      </div>
    </section>
  ));
  return <div>{items}</div>;
};

AboutTeachers.propTypes = {
  // imgInfo: PropTypes.object,
  // teacherInfo: PropTypes.object,
  our_teachers_info: PropTypes.array,
};

export default AboutTeachers;

// const TeachersPhoto = (props) => {
//   return (
//     <a className={styles.teachersPhoto__wrapper} href="/">
//       <img
//         className={styles.teachersPhoto__photo}
//         src={props.imgInfo.url}
//         alt={props.imgInfo.alt}
//       />
//     </a>
//   );
// };

// TeachersPhoto.propTypes = {
//   imgInfo: PropTypes.object,
// };

// const TeachersInfo = (props) => {
//   return (
//     <div className={styles.teachersInfo}>
//       <a href="/">
//         <div className={styles.teachersInfo__name}>
//           {props.teacherInfo.name}
//         </div>
//       </a>
//       <a href="/">
//         <div className={styles.teachersInfo__technique}>
//           {props.teacherInfo.technique}
//         </div>
//       </a>
//     </div>
//   );
// };

// TeachersInfo.propTypes = {
//   teacherInfo: PropTypes.object,
// };

//   return (
//     <div className={styles.teachersRow}>
//       <div className={styles.teachersRow__item}>1</div>
//       <div className={styles.teachersRow__item}>2</div>
//       <div className={styles.teachersRow__item}>3</div>
//       <div className={styles.teachersRow__item}>4</div>
//       <div className={styles.teachersRow__item}>5</div>
//       <div className={styles.teachersRow__item}>6</div>
//       <div className={styles.teachersRow__item}>7</div>
//       <div className={styles.teachersRow__item}>8</div>
//       <div className={styles.teachersRow__item}>9</div>
//     </div>
//   );
// };

// export default AboutTeachers;
