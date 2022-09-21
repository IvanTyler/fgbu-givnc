import React from "react";
import style from './FormAdvancedSearch.module.scss'
import InputStyle from '../../assets/styles/InputStyle.module.scss'
import { useGetCards } from "../../Hooks/useGetData";
import { useRef, useState } from 'react';

export const FormAdvancedSearch: React.FC = () => {

    const { cards } = useGetCards()

    const [listRegions, setListRegions] = useState(false)
    const regionTitle = useRef<HTMLDivElement>(null)
    
    const showListRegions = () => setListRegions(prev => !prev)
    const setReginTitle = (nameRegion: string) => regionTitle.current!.innerText = nameRegion;

    return (
        <form className={style.formAdvancedSearch}>
            <header className={style.formAdvancedSearch__header}>
                <h2 className={style.formAdvancedSearch__title}>
                    Расширенный поиск
                </h2>
                <input
                    className={style.formAdvancedSearch__search}
                    type="search"
                    name="search"
                    placeholder="Контекстный поиск"
                />
            </header>

            <ul className={style.formAdvancedSearch__list}>
                <li className={style.formAdvancedSearch__item}>
                    <div className={style.formAdvancedSearch__select + ' ' + InputStyle.input}>Все этносы</div>
                </li>
                <li className={style.formAdvancedSearch__item}>
                    <div className={style.formAdvancedSearch__select + ' ' + InputStyle.input}>Все категории</div>
                </li>
                <li onClick={() => showListRegions()} className={style.formAdvancedSearch__item + ' ' + style.formAdvancedSearch__itemRegion}>
                    <div ref={regionTitle} className={style.formAdvancedSearch__select + ' ' + InputStyle.input}>
                        Все регионы
                    </div>
                    {listRegions && <ul className={style.formAdvancedSearch__regionsList}>
                        {
                            cards.length ?
                                cards.map((item) => {
                                    return <li
                                        key={item.id}
                                        className={style.formAdvancedSearch__regionsItem}
                                        onClick={() => setReginTitle(item.region)}
                                    >
                                        {item.region}
                                    </li>
                                }) : null
                        }
                    </ul>}
                </li>
                <li className={style.formAdvancedSearch__item}>
                    <div className={style.formAdvancedSearch__select + ' ' + InputStyle.input}>Все языки</div>
                </li>
                <li className={style.formAdvancedSearch__item}>
                    <div className={style.formAdvancedSearch__select + ' ' + InputStyle.input}>Все теги</div>
                </li>
                <li className={style.formAdvancedSearch__item}>
                    <div className={style.formAdvancedSearch__select + ' ' + InputStyle.input}>Все авторы</div>
                </li>
            </ul>

            <button className={style.formAdvancedSearch__button}>Поиск</button>
        </form>
    )
}