import React from "react";
import style from './FormAdvancedSearch.module.scss'
import InputStyle from '../../assets/styles/InputStyle.module.scss'
import { useGetCards } from "../../Hooks/useGetData";
import { useRef, useState } from 'react';
import { filterCardsAction, searchCardsTitleAction } from "../../Redux/action/dataAction";
import { useDispatch } from "react-redux";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

export const FormAdvancedSearch: React.FC = () => {
    const dispatch = useDispatch()
    const { cards } = useGetCards()

    const regionsArr = ['Сахалинская область', 'Вологодская область', 'Волгоградская область', 'Липецкая область', 'Смоленская область']

    const [listRegions, setListRegions] = useState(false)
    const [valueSearch, setValueSearch] = useState('')

    const regionTitle = useRef<HTMLDivElement>(null)

    const showListRegions = () => setListRegions(prev => !prev)

    const filterRegions = (nameRegion: string) => {
        regionTitle.current!.innerText = nameRegion;
        dispatch(filterCardsAction(nameRegion))
    }

    const inputChangeInputSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(event.target.value)
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (valueSearch.trim().length > 1) dispatch(searchCardsTitleAction(valueSearch))
        setValueSearch('')
    }

    return (
        <form className={style.formAdvancedSearch} onSubmit={submitHandler}>
            <header className={style.formAdvancedSearch__header}>
                <h2 className={style.formAdvancedSearch__title}>
                    Расширенный поиск
                </h2>
                <input
                    className={style.formAdvancedSearch__search}
                    type="text"
                    name="search"
                    placeholder="Контекстный поиск"
                    onChange={inputChangeInputSearchValue}
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
                            regionsArr.length ?
                                regionsArr.map((el, index) => {
                                    return <li
                                        key={index}
                                        className={style.formAdvancedSearch__regionsItem}
                                        onClick={() => filterRegions(el)}
                                    >
                                        {el}
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