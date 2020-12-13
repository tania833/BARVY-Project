import React, { useState } from 'react';
import styles from './Artists.module.scss';
import card_info from '../../MOCKS/card_info_MOCK';
import Title from '../../components/TitleOnly';
import CourseCardViewer from '../../components/CourseCard';

const Artists = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.artistsContainer}>
      <p>
        <span>Головна </span>
        <span>/ Курси</span>
      </p>
      <div className={styles.titleWrapper}>
        <Title title="Усі" subtitle="Курси" />
      </div>

      <div className={styles.searchBlock}>
        <button>Фільтри</button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // search will come here
            setValue('');
          }}
          className={styles.topbar__form}
        >
          <input
            type="text"
            name="search"
            placeholder="Знайти свій курс"
            className={styles.topbar__input}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <input
            type="submit"
            name="submit-input"
            className={styles.topbar__submit}
            value=""
          />
        </form>
        <button>Сортувати</button>
      </div>
      <CourseCardViewer card_info={card_info} />
    </div>
  );
};

export default Artists;


const Technologies = () => {
  const cards = TechArtCard_MOCKS.map( card => {
    return <TechArtCard key={card.id} techImg={card.techImg} techTitle={card.techTitle} techLink={card.techLink} />
  })

  return (
    <div>

      <section className={styles.introText}>
        <p>Це простір творчих курсів, уроків та майстер-класів українських художників, дизайнерів та митців у різних техніках і жанрах.</p>
        <p>Ми впевнені, що творити може кожен, а ми допоможемо знайти своє та спробувати щось нове.</p>
      </section>
      <section className={styles.mainTechnos}>
        <Title title="Популярні" subtitle="техніки" />
        <div className={styles.technoPic}>
      
          {cards}

        </div>
        <div className={styles.mainCourses_buttonWrapper}>
          <Button text="до каталогу" />
        </div>
      </section>
    </div>
  );
};

export default Technologies;
