import React, { useState } from "react";
import { useGetCards } from "../../Hooks/useGetData";
import { ICards } from "../../Interfaces/interface";
import { CardsItem } from "../CardsItem/CardsItem";
import { List } from "../List/List";
import style from './Cards.module.scss'
import styleContainer from '../../assets/styles/container.module.scss'
import { Pagination } from "../Pagination/Pagination";
import { BrowserRouter } from "react-router-dom";

interface cardsProps {
    pageDefault: number;
    setCurrentPage(pageNumber: any): void
}

export const Cards: React.FC<cardsProps> = ({ pageDefault, setCurrentPage }) => {

    const { cardsFilter } = useGetCards()

    const [currentPerPage] = useState(4)

    const lastCardsIndex = pageDefault * currentPerPage
    const firstCardsIndex = lastCardsIndex - currentPerPage

    const currentCards = cardsFilter.slice(firstCardsIndex, lastCardsIndex)

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    const prevPage = (maxPage: number) => setCurrentPage((prev: number) => prev > 1 ? prev - 1 : prev = maxPage)
    const nextPage = (maxPage: number) => setCurrentPage((prev: number) => prev < maxPage ? prev + 1 : prev = 1)

    return (
        <section className={style.sectionCards}>
            <div className={styleContainer.container + ' ' + style.sectionCards__container}>
                {currentCards.length ?
                    <ul className={style.sectionCards__list}>
                        <List
                            items={currentCards}
                            renderItem={(item: ICards) => <CardsItem item={item} key={item.id} />}
                        />
                    </ul> :
                    <p>
                        «По вашему запросу ничего не
                        найдено»
                    </p>
                }
            </div>

            {cardsFilter.length ? <BrowserRouter>
                <Pagination
                    currentPerPage={currentPerPage}
                    totalCountries={cardsFilter.length}
                    paginate={paginate}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    currentPage={pageDefault}
                />
            </BrowserRouter> : null}

        </section>
    )
}