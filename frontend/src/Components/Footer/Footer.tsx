import React from "react";
import style from './Footer.module.scss'
import styleContainer from '../../assets/styles/container.module.scss'

import CommitteePreservation from '../../assets/images/footer/CommitteePreservationIntangibleCulturalHeritage.png'
import homePolenova from '../../assets/images/footer/home-polenova.svg'


export const Footer: React.FC = () => {
    return (
        <footer className={style.footer}>
            <div className={styleContainer.container}>
                <div className={style.footer__row}>
                    <div className={style.footer__column + ' ' + style.footer__column_HomePolenova}>
                        <img className={style.footer__iconHomePolenova} src={homePolenova} alt="home-polenova" />
                        <span className={style.footer__homePolenova}>
                            Государственный Российский Дом народного творчества имени В.Д. Поленова
                        </span>
                    </div>
                    <div className={style.footer__column + ' ' + style.footer__column_contacts}>
                        <span className={style.footer__contactsTitle}>
                            Контакты
                        </span>
                        <span className={style.footer__contactsText}>
                            Москва, Сверчков пер., 8, стр. 3.
                            Тел.: +7 495 628-40-87
                        </span>
                    </div>
                    <div className={style.footer__column + ' ' + style.footer__column_committeePreservation}>
                        <img className={style.footer__iconCommitteePreservation} src={CommitteePreservation} alt="committee-preservation" />
                    </div>
                </div>
            </div>
        </footer>
    )
}