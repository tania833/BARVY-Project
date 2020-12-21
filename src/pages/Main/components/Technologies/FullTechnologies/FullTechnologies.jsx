import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../../components/Button';
import Title from '../../../../../components/Title';
import TechAPI from '../../../../../MOCKS/TechAPI';
import styles from './FullTechnologies.module.scss';

const FullTechnologies = () => {
  return (
    <div>
      <section className={styles.introText}>
        <p>
          Це простір творчих курсів, уроків та майстер-класів українських
          художників, дизайнерів та митців у різних техніках і жанрах.
        </p>
        <p>
          Ми впевнені, що творити може кожен, а ми допоможемо знайти своє та
          спробувати щось нове.
        </p>
      </section>
      <section className={styles.mainTechnos}>
        <Title title="Популярні" subtitle="техніки" />
        <div className={styles.technoPic}>
          {TechAPI.all()
            .filter((card, index) => index < 5)
            .map((tech) => (
              <a className={styles.technoPic__Cont} key={tech.path}>
                <Link to={`/technologies/${tech.path}`}>
                  <div className={styles.technoPic__title}>
                    {tech.techTitle}
                  </div>
                  <img
                    className={styles.technoPic__Img}
                    src={tech.techImg}
                    alt={tech.techTitle}
                  />
                </Link>
              </a>
            ))}
        </div>
        <div className={styles.mainCourses_buttonWrapper}>
          <Link to="/techniques">
            <Button text="до каталогу" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FullTechnologies;
