import React from "react";
import { useGetCards } from "../../Hooks/useGetData";
import style from './CountCards.module.scss'
import styleContainer from '../../assets/styles/container.module.scss'

export const CountCards: React.FC = () => {
    const { cardsFilter } = useGetCards()

    return (
        <div className={styleContainer.container + ' ' + style.CountCardsContainer}>
            <section className={style.sectionCountCards}>
                <h3 className={style.sectionCountCards__title}>Всего объектов: {cardsFilter.length}</h3>
            </section>
        </div>
    )
}