import React from "react";
import { ICards } from '../../Interfaces/interface'
import style from './Cards.module.scss'

import warning from '../../assets/images/cards/warning.svg'
import camera from '../../assets/images/cards/camera.svg'
import play from '../../assets/images/cards/play.svg'
import sound from '../../assets/images/cards/sound.svg'
import location from '../../assets/images/cards/location.svg'
import region from '../../assets/images/cards/region.svg'


interface cardsProps {
    item: ICards;
}

export const CardsItem: React.FC<cardsProps> = ({ item }) => {
    return (
        <li className={style.CardsItem}>
            <div className={style.CardsItem__wrapperImg}></div>
            <div className={style.CardsItem__content}>
                <h3 className={style.CardsItem__title}>
                    {item.title}
                </h3>

                <div className={style.CardsItem__region}>
                    <img src={region} alt={item.region} className={style.CardsItem__location} />
                    {item.region}
                </div>

                <ul className={style.CardsItem__listIcons}>
                    <li className={style.CardsItem__listIconsItem}>
                        <img src={warning} alt='warning' className={style.CardsItem__listIconsIcon} />
                    </li>
                    <li className={style.CardsItem__listIconsItem}>
                        <img src={camera} alt='camera' className={style.CardsItem__listIconsIcon} />
                    </li>
                    <li className={style.CardsItem__listIconsItem}>
                        <img src={play} alt='play' className={style.CardsItem__listIconsIcon} />
                    </li>
                    <li className={style.CardsItem__listIconsItem}>
                        <img src={sound} alt='sound' className={style.CardsItem__listIconsIcon} />
                    </li>
                    <li className={style.CardsItem__listIconsItem}>
                        <img src={location} alt='location' className={style.CardsItem__listIconsIcon} />
                    </li>
                </ul>
            </div>
        </li>
    )
}