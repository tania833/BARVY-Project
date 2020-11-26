import React from "react";
import styles from "./ArtistsMain.module.scss";
import "../../../../components/css_modules/slider.scss";
import Slider from "react-slick";

const TeachersCardPhoto = (props) => {
  return (
    <a className={styles.teacherCard__photo_wrapper} href="/about">
      <img
        className={styles.teacherCard__photo}
        src={props.img_info.url}
        alt={props.teacher_info.name}
      />
    </a>
  );
};

const AuthorInfo = (props) => {
  return (
    <div className={styles.teacherCard__artist_info}>
      <div className={styles.teacherCard__artist}>
        {props.teacher_info.name}
      </div>
      <div className={styles.teacherCard__profession}>
        {props.teacher_info.profession}
      </div>
      <div className={styles.teacherCard__technique}>
        {props.teacher_info.technique}
      </div>
    </div>
  );
};

const TeachersCardInfo = (props) => {
  return <div className={styles.teacherCard__info}>{props.children}</div>;
};

const LinkToDetails = () => {
  return (
    <a href="/about" className={styles.teacherCard_link_to_details}>
      Детальніше
    </a>
  );
};

const TeachersCardViewerForMain = (props) => {
  const teacherCardInfo = props.artists_info_main.map((teacher_card) => (
    <div className={styles.teacherCard__wrapper}>
      <div
        key={teacher_card.id}
        className={`${styles.teacherCard__component} teacherCard__newComponent`}
      >
        <TeachersCardPhoto
          img_info={teacher_card.img}
          teacher_info={teacher_card.artist}
        />

        <TeachersCardInfo className={styles.teacherCard__info}>
          <AuthorInfo teacher_info={teacher_card.artist} />
          <LinkToDetails />
        </TeachersCardInfo>
      </div>
    </div>
  ));

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    selectionColor: "green",
  };

  return <Slider {...settings}>{teacherCardInfo}</Slider>;
};

export default TeachersCardViewerForMain;
