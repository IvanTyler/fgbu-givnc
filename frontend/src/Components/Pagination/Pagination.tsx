import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from './Pagination.module.scss'
import paginationArrow from '../../assets/images/common/pagination-arrow.svg'

interface poginationProps {
    currentPerPage: number;
    totalCountries: number;
    paginate(pageNumber: number): void;
    prevPage(): void;
    nextPage(): void;
}

export const Pagination: React.FC<poginationProps> = (
    {
        currentPerPage,
        totalCountries,
        paginate,
        prevPage,
        nextPage,
    }) => {

    const pageNumbers: number[] = []


    for (let i = 1; i < Math.ceil(totalCountries / currentPerPage); i++) {
        pageNumbers.push(i)
    }

    const [currentActivePage, setCurrentActivePage] = useState<number[]>(pageNumbers)
    return (
        <section className={style.sectionPagination}>
            <button className={style.sectionPagination__button + ' ' + style.sectionPagination__button_buttonPrev} onClick={() => prevPage()}>
                <img className={style.sectionPagination__arrowPage + ' ' + style.sectionPagination__arrowPagePrev} src={paginationArrow} alt="page-prev" />
            </button>
            <ul className={style.sectionPagination__list}>
                {
                    pageNumbers.map(number => {
                        return <li
                            key={number}
                            className={style.sectionPagination__pageItem}>
                            <Link to={'#'}
                                className={style.sectionPagination__link}
                                onClick={() => paginate(number)}
                            >{number}</Link>
                        </li>
                    })
                }
            </ul>
            <button className={style.sectionPagination__button + ' ' + style.sectionPagination__button_buttonNext} onClick={() => nextPage()}>
                <img className={style.sectionPagination__arrowPage} src={paginationArrow} alt="page-next" />
            </button>
        </section>
    )
}