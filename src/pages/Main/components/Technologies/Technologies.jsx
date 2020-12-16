import React from 'react';
import Title from '../../../../components/Title';
import Button from '../../../../components/Button';
import styles from './Technologies.module.scss';
import TechArtCard from './../../../../components/artCard';
import TechArtCard_MOCKS from "./../../../../MOCKS/techArtCard_MOCK";

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
