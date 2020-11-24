import React from "react";
import artists_info_main from "../../../../components/artists_main_obj";
import MainTitle from "../../../../components/Title";
import Button from "../../../../components/Button";
import styles from "./ArtistsMain.module.scss";
import TeachersCardViewerForMain from "./TeacherCard";

const ArtistsMain = () => {
  return (
    <section className={styles.main_artists}>
      <MainTitle title="митці" subtitle="наші викладачі" />
      <TeachersCardViewerForMain artists_info_main={artists_info_main} />
      <div className={styles.mainTeachers_buttonWrapper}>
        <Button text="Усі викладачі" />
      </div>
    </section>
  );
};

export default ArtistsMain;
