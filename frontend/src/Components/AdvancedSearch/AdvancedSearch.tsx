import React from "react";
import style from './AdvancedSearch.module.scss'
import styleContainer from '../../assets/styles/container.module.scss'
import { FormAdvancedSearch } from "../FormAdvancedSearch/FormAdvancedSearch";

interface formAdvancedSearchProps {
    setCurrentPage(pageNumber: any): void
}

export const AdvancedSearch: React.FC<formAdvancedSearchProps> = ({ setCurrentPage }) => {
    return (
        <section className={style.sectionAdvancedSearch}>
            <div className={styleContainer.container + ' ' + style.sectionAdvancedSearch__container}>
                <div className={style.sectionAdvancedSearch__wrapper}>
                    <a href="/" className={style.sectionAdvancedSearch__link}>Главная</a>
                    <FormAdvancedSearch
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </section>
    )
}