import React, { useState } from "react";
import { AdvancedSearch } from "../AdvancedSearch/AdvancedSearch";
import { Cards } from "../Cards/Cards";
import { CountCards } from "../CountCards/CountCards";


export const WrapperPaginationCards: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <>
            <AdvancedSearch
                setCurrentPage={setCurrentPage}
            />
            <CountCards />
            <Cards
                pageDefault={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
}