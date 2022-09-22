import React from "react";
import { useGetCards } from "../../Hooks/useGetData";
import { ICards } from "../../Interfaces/interface";
import { CardsItem } from "../CardsItem/CardsItem";
import { List } from "../List/List";
import style from './Cards.module.scss'
import styleContainer from '../../assets/styles/container.module.scss'

export const Cards: React.FC = () => {
    const { cardsCopy } = useGetCards()
    return (
        <section className={style.sectionCards}>
            <div className={styleContainer.container + ' ' + style.sectionCards__container}>
                <ul className={style.sectionCards__list}>
                    <List
                        items={cardsCopy}
                        renderItem={(item: ICards) => <CardsItem item={item} key={item.id} />}
                    />
                </ul>
            </div>
        </section>
    )
}