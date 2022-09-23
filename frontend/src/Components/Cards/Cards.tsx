import React, { useState } from "react";
import { useGetCards } from "../../Hooks/useGetData";
import { ICards } from "../../Interfaces/interface";
import { CardsItem } from "../CardsItem/CardsItem";
import { List } from "../List/List";
import style from './Cards.module.scss'
import styleContainer from '../../assets/styles/container.module.scss'
import { Pagination } from "../Pagination/Pagination";
import { BrowserRouter } from "react-router-dom";

export const Cards: React.FC = () => {

    const { cardsFilter } = useGetCards()

    const [currentPage, setCurrentPage] = useState(1)
    const [currentPerPage] = useState(4)

    const lastCardsIndex = currentPage * currentPerPage
    const firstCardsIndex = lastCardsIndex - currentPerPage

    const currentCards = cardsFilter.slice(firstCardsIndex, lastCardsIndex)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const prevPage = () => setCurrentPage(prev => prev > 1 ? prev - 1 : prev)
    const nextPage = () => setCurrentPage(prev => prev + 1)

    return (
        <section className={style.sectionCards}>
            <div className={styleContainer.container + ' ' + style.sectionCards__container}>
                {currentCards.length ? <ul className={style.sectionCards__list}>
                    <List
                        items={currentCards}
                        renderItem={(item: ICards) => <CardsItem item={item} key={item.id} />}
                    />
                </ul> :
                    <p>«По вашему запросу ничего не
                        найдено»</p>}
            </div>

            {cardsFilter.length ? <BrowserRouter>
                <Pagination
                    currentPerPage={currentPerPage}
                    totalCountries={cardsFilter.length}
                    paginate={paginate}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    currentPage={currentPage}
                />
            </BrowserRouter> : null}

        </section>
    )
}