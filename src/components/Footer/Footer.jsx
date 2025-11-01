import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.footerInfo}>
          <div className={styles.logoSection}>
            <img
              src="https://flagcdn.com/eu.svg"
              alt="EU"
              className={styles.flag}
            />
            <div className={styles.title}>
              <strong>Європейський</strong> союз
            </div>
          </div>
          <p className={styles.managedBy}>
            This site is managed by: Directorate-General for Communication
          </p>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <h3 className={styles.listTitle}>Связаться с ЕС</h3>
              <ul className={styles.sublist}>
                <li className={styles.sublistitem}>
                  <a href="tel:0080067891011" className={styles.link}>
                    Позвоните нам 00 800 6 7 8 9 10 11
                  </a>
                </li>
                <li className={styles.sublistitem}>
                  <Link to="/" className={styles.link}>
                    Используйте другие варианты телефонной связи
                  </Link>
                </li>
                <li className={styles.sublistitem}>
                  <Link to="/" className={styles.link}>
                    Напишите нам через нашу контактную форму
                  </Link>
                </li>
                <li className={styles.sublistitem}>
                  <Link to="/" className={styles.link}>
                    Встретиться с нами в одном из центров ЕС
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <h3 className={styles.listTitle}>Социальные сети</h3>
              <Link to="/" className={styles.link}>
                Найти ЕС в социальных сетях
              </Link>
            </li>
            <li className={styles.item}>
              <h3 className={styles.listTitle}>Юридическая информация</h3>
              <ul className={styles.sublist}>
                <li className={styles.sublistitem}>
                  <Link to="/" className={styles.link}>
                    Языки на наших веб-сайтах
                  </Link>
                </li>
                <li className={styles.sublistitem}>
                  <Link to="/" className={styles.link}>
                    Политика конфиденциальности
                  </Link>
                </li>
                <li className={styles.sublistitem}>
                  <Link to="/" className={styles.link}>
                    Правовая информация
                  </Link>
                </li>
                <li className={styles.sublistitem}>
                  <Link to="/" className={styles.link}>
                    Файлы cookie
                  </Link>
                </li>
                <li className={styles.sublistitem}>
                  <Link to="/" className={styles.link}>
                    Доступность
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.item}>
              <h3 className={styles.listTitle}>Институты и органы ЕС</h3>
              <Link to="/" className={styles.link}>
                Искать во всех институтах и органах ЕС
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
