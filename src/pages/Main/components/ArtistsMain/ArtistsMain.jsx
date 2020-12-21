import React from 'react';
import artists_info_main from '../../../../MOCKS/artist_main_MOCK';
import MainTitle from '../../../../components/Title';
import ButtonWhite from '../../../../components/ButtonWhite';
import styles from './ArtistsMain.module.scss';
import TeachersCardViewerForMain from './TeacherCard';
import { Link } from 'react-router-dom';

const ArtistsMain = () => {
  return (
    <section className={styles.main_artists}>
      <MainTitle title="митці" subtitle="наші викладачі" />
      <TeachersCardViewerForMain artists_info_main={artists_info_main} />
      <div className={styles.mainTeachers_buttonWrapper}>
        <Link to="/artists">
          <ButtonWhite text="Усі викладачі" />
        </Link>
      </div>
    </section>
  );
};

export default ArtistsMain;
