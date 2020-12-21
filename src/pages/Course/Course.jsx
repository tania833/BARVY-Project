import React,{useState} from 'react';
import Title from '../../components/TitleOnly';
import Button from '../../components/Button';
import styles from './Course.module.scss';
import Breadcrumb from '../../components/Breadcrumb';
import CourseCardImport from '../../components/CourseCard';
import card_info from '../../MOCKS/card_info_MOCK';
import PropTypes from 'prop-types';

const Course = () => {
  const [likes, setLikes] = useState([]);
  const [buy, setBuy] = useState([]);

  return (
    <div className={styles.courseSingle}>
      <Breadcrumb
        main_menu_item="Основи акварельної техніки"
        main_menu_item_link="/course"
      />
      <div className={styles.courseTitle}>
        <Title title="курс" subtitle="Основи акварельної техніки" />
      </div>
      <div className={styles.courseContainer}>
        <article className={styles.courseInfoContainer}>
          <div className={styles.courseInfoSubContainer}>
            <div className={styles.courseInfoWrapper}>
              <div className={styles.courseInfo}>
                <div className={styles.courseVideo}>
                  <iframe
                    width="570"
                    height="380"
                    src="https://www.youtube.com/embed/1QD9HUMUymI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <div className={styles.courseText}>
                  <p>
                    Курс створений для тих, хто хоче познайомитись з технікою та
                    особливостями акварелі. Від простого до складнішого
                    розбираємо разом з Христиною Стринадюк як не боятися і
                    отримувати задоволення від акварелі.
                  </p>
                  <p>
                    Доступ відкривається в Особистому кабінеті відразу після
                    оплати.
                  </p>

                  <ul className={styles.courseTasksList}>
                    <span className={styles.courseTasksList__span}>
                      На цьому курсі ви:
                    </span>
                    <li>Засвоїте малювання по сухому та мокрому папері</li>
                    <li>Навчитесь робити рівні заливки та красиві градієнти</li>
                    <li>Зрозумієте як будувати композицію</li>
                    <li>Дізнаєтесь про гру світла і тіні</li>
                    <li>Переконаєтесь у важливості тону та кольору в роботі</li>
                    <li>Навчитесь передавати не тільки сюжет, але й настрій</li>
                  </ul>

                  <ol className={styles.courseTasksListOl}>
                    <span className={styles.courseTasksList__span}>
                      Структура курсу (4 уроки) :
                    </span>
                    <li>Заливки і градієнт</li>
                    <li>Світло і тінь</li>
                    <li>Колір, тон, контраст</li>
                    <li>Підсумкова робота</li>
                  </ol>
                </div>
              </div>
            </div>

            <aside className={styles.teacherWrapper}>
              <div className={styles.teacherCard}>
                <div className={styles.courseVideo_mob}>
                  <iframe
                    width="100%"
                    height="225"
                    src="https://www.youtube.com/embed/1QD9HUMUymI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <picture className={styles.teacherCard__pic}>
                  <img
                    className={styles.teacherCard__img}
                    src="https://imgur.com/Kqshzf2.jpg"
                    alt="Христина Стринадюк"
                  />
                </picture>
                <div className={styles.teacherCard__items}>
                  <div className={styles.teacherCard_itemRow}>
                    <div className={styles.teacherCard_itemL}>Викладач</div>
                    <div className={styles.teacherCard_itemR}>
                      <strong className={styles.teacherCard_strong}>
                        Христина Стринадюк
                      </strong>
                    </div>
                  </div>

                  <div className={styles.teacherCard_itemRow}>
                    <div className={styles.teacherCard_itemL}>Тип курсу:</div>
                    <div className={styles.teacherCard_itemR}>
                      Відеокурс з перевіркою викладача
                    </div>
                  </div>

                  <div className={styles.teacherCard_itemRow}>
                    <div className={styles.teacherCard_itemL}>Складність:</div>
                    <div className={styles.teacherCard_itemR}>
                      Початковий рівень
                    </div>
                  </div>

                  <div className={styles.teacherCard_itemRow}>
                    <div className={styles.teacherCard_itemL}>Ціна курсу:</div>
                    <div className={styles.teacherCard_itemR}>
                      <strong className={styles.teacherCard_bold}>500 </strong>
                      грн
                    </div>
                    <div className={styles.teacherCard__buy_mob}>
                      <Button text="купити" />
                    </div>
                  </div>
                </div>
                <div className={styles.teacherCard__buy}>
                  <Button text="купити" />
                </div>
              </div>
            </aside>
          </div>

          <div className={styles.courseTasksList}>
            <span className={styles.courseTasksList__span}>
              Необхідні матеріали:
            </span>
            <div className={styles.courseTasksList__list}>
              <div className={styles.courseTasksList__list_itemRow}>
                <div className={styles.courseTasksList__list_itemL}>Папір:</div>
                <div className={styles.courseTasksList__list_itemR}>
                  Для акварелі, щільністю не менше 200 г/м.кв.
                </div>
              </div>

              <div className={styles.courseTasksList__list_itemRow}>
                <div className={styles.courseTasksList__list_itemL}>
                  Пензлі:
                </div>
                <div className={styles.courseTasksList__list_itemR}>
                  Колонок, білка, імітація білки або синтетика мікс - на вибір
                </div>
              </div>

              <div className={styles.courseTasksList__list_itemRow}>
                <div className={styles.courseTasksList__list_itemL}>Фарби:</div>
                <div className={styles.courseTasksList__list_itemR}>
                  Набір 12-24 кольорів Rosa, Van Gogh, Сонет, Білі ночі, Pinax
                </div>
              </div>

              <div className={styles.courseTasksList__list_itemRow}>
                <div className={styles.courseTasksList__list_itemL}>
                  Додатково:
                </div>
                <div className={styles.courseTasksList__list_itemR}>
                  <div className={styles.courseTasksList__list_spanList}>
                    Планшет
                  </div>
                  <div className={styles.courseTasksList__list_spanList}>
                    Пластикова палітра
                  </div>
                  <div className={styles.courseTasksList__list_spanList}>
                    Малярний скотч
                  </div>
                  <div className={styles.courseTasksList__list_spanList}>
                    Простий олівець B-B2
                  </div>
                  <div className={styles.courseTasksList__list_spanList}>
                    Гумка (клячка)
                  </div>
                  <div className={styles.courseTasksList__list_spanList}>
                    Ємність з водою
                  </div>
                  <div className={styles.courseTasksList__list_spanList}>
                    Паперові серветки
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.courseResults}>
            <div className={styles.courseResults__header}>
              Результати курсу:
            </div>
            <div className={styles.courseResults__projects}>
              <div className={styles.courseResults__project}>
                <picture className={styles.courseResults__project_pic}>
                  <img
                    className={styles.courseResults__project_img}
                    src="https://imgur.com/Czwvas2.jpg"
                    alt="Навчитесь підбирати кольори, писати по сухому та по мокрому"
                  />
                </picture>
                <p className={styles.courseResults__project_desc}>
                  Навчитесь підбирати кольори, писати по сухому та по мокрому
                </p>
              </div>

              <div className={styles.courseResults__project}>
                <picture className={styles.courseResults__project_pic}>
                  <img
                    className={styles.courseResults__project_img}
                    src="https://imgur.com/VlIy1Aa.jpg"
                    alt="Знайдете нахтнення та під іншим кутом подивитесь на звичайні сюжети"
                  />
                </picture>
                <p className={styles.courseResults__project_desc}>
                  Знайдете нахтнення та під іншим кутом подивитесь на звичайні
                  сюжети
                </p>
              </div>

              <div className={styles.courseResults__project}>
                <picture className={styles.courseResults__project_pic}>
                  <img
                    className={styles.courseResults__project_img}
                    src="https://imgur.com/mHfA16u.jpg"
                    alt="Створите роботи, які зможете подарувати своїм близьким"
                  />
                </picture>
                <p className={styles.courseResults__project_desc}>
                  Створите роботи, які зможете подарувати своїм близьким
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className={styles.recommends}>
        <div className={styles.recommends__header}>Рекомендуємо спробувати</div>
        <CourseCardImport
          card_info={card_info
            .filter((card) => card.author.name === 'Христина Стринадюк')
            .filter((card, index) => index < 3)}
          likes={likes}
          setLikes={setLikes}
          buy={buy}
          setBuy={setBuy}
        />
      </div>
    </div>
  );
};

Course.propTypes = {
  card_info: PropTypes.array,
};

export default Course;
