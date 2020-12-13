import React from 'react';
import styles from './AboutTeachers.module.scss';
import PropTypes from 'prop-types';

const AboutTeachers = (props) => {
  return (
    <section className={styles.teachersRow}>
      <div className={styles.teachersRow__item}>
        <a className={styles.teachersPhoto__wrapper} href="/">
          <img
            className={styles.teachersPhoto__photo}
            src={props.imgInfo.url}
            alt={props.imgInfo.alt}
          />
        </a>
        <div className={styles.teachersInfo}>
          <a href="/">
            <div className={styles.teachersInfo__name}>
              {props.teacherInfo.name}
            </div>
          </a>
          <a href="/">
            <div className={styles.teachersInfo__technique}>
              {props.teacherInfo.technique}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

AboutTeachers.propTypes = {
  imgInfo: PropTypes.object,
  teacherInfo: PropTypes.object,
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

// const Technologies = () => {
//   const cards = TechArtCard_MOCKS.map( card => {
//     return <TechArtCard key={card.id} techImg={card.techImg} techTitle={card.techTitle} techLink={card.techLink} />
//   })

//   return (

// const AboutTeachers = () => {
//   const items = OurTeachersInfo_MOCK.map( item => {
//     return <AboutTeachers key={item.id} teachersPhoto={item.url}
//   });

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
