import React from "react";
import { Link } from "react-router-dom";
import style from './Pagination.module.scss'
import paginationArrow from '../../assets/images/common/pagination-arrow.svg'

interface paginationProps {
    currentPerPage: number;
    totalCountries: number;
    currentPage: number;
    paginate(pageNumber: number): void;
    prevPage(maxPage: number): void;
    nextPage(maxPage: number): void;
}

export const Pagination: React.FC<paginationProps> = (
    {
        currentPerPage,
        totalCountries,
        paginate,
        prevPage,
        nextPage,
        currentPage,
    }) => {

    const pageNumbers: number[] = []

    for (let i = 1; i < Math.ceil(totalCountries / currentPerPage) + 1; i++) {
        pageNumbers.push(i)
    }

    return (
        <section className={style.sectionPagination}>
            <button className={style.sectionPagination__button + ' ' + style.sectionPagination__button_buttonPrev} onClick={() => prevPage(pageNumbers.length)}>
                <img className={style.sectionPagination__arrowPage + ' ' + style.sectionPagination__arrowPagePrev} src={paginationArrow} alt="page-prev" />
            </button>
            <ul className={style.sectionPagination__list}>
                {
                    pageNumbers.map(number => {
                        return <li
                            key={number}
                            className={style.sectionPagination__pageItem}>
                            <Link to={'#'}
                                className={currentPage === number ?
                                    style.sectionPagination__link + ' ' + style.sectionPagination__link_current :
                                    style.sectionPagination__link
                                }
                                onClick={() => paginate(number)}
                            >{number}</Link>
                        </li>
                    })
                }
            </ul>
            <button className={style.sectionPagination__button + ' ' + style.sectionPagination__button_buttonNext} onClick={() => nextPage(pageNumbers.length)}>
                <img className={style.sectionPagination__arrowPage} src={paginationArrow} alt="page-next" />
            </button>
        </section>
    )
}