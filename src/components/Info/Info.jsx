import React from 'react';
import  styles  from './Info.module.scss'


const Info = () => {
  return (
    <div className={styles.info}>
        <div className="container">
        <h2 className={styles.infoTitle}>Ознакомьтесь с ЕС</h2>

        <ul className={styles.infoItems}>
            <li className={styles.infoItem}>
                <div className={styles.infoItemImage}><img className={styles.infoItemImg} src='https://european-union.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2024-08/History-of-the-EU_2.jpg?h=ef1d7280&itok=0kwyyRHW' alt="" /></div>
                <div className={styles.infoItemLine}></div>
                <a className={styles.infoItemTitle} href="https://european-union.europa.eu/principles-countries-history/history-eu_en?prefLang=ru">История ЕС</a>
            </li>

            <li className={styles.infoItem}>
                <div className={styles.infoItemImage}><img className={styles.infoItemImg} src='https://european-union.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2024-08/EU-countries_2_0.jpg?h=ef1d7280&itok=9GsAkAha' alt="" /></div>
                <div className={styles.infoItemLine}></div>
                <a className={styles.infoItemTitle} href="https://european-union.europa.eu/principles-countries-history/eu-countries_en?prefLang=ru">Страны ЕС</a>
            </li>

            <li className={styles.infoItem}>
                <div className={styles.infoItemImage}><img className={styles.infoItemImg} src='https://european-union.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2024-08/institutions-and-bodies_2.jpg?h=ef1d7280&itok=Br_lYEAH' alt="" /></div>
                <div className={styles.infoItemLine}></div>
                <a className={styles.infoItemTitle} href="https://european-union.europa.eu/institutions-law-budget/institutions-and-bodies_en?prefLang=ru">Учреждения и органы ЕС</a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Info;