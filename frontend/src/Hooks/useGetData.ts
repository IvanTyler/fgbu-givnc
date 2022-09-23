import { useDispatch } from "react-redux"
import { getDataCards, getDataNavigation } from "../Redux/action/dataAction"
import { useTypeSelector } from "./useTypeSelector"
import { useEffect } from 'react';

export const useGetCards = () => {
    const dispath = useDispatch<any>()

    useEffect(() => {
        dispath(getDataCards())
        dispath(getDataNavigation())
    }, [])

    const { cards, getNavigationMenu, cardsFilter } = useTypeSelector(state => state.data)

    return { getNavigationMenu, cards, cardsFilter }
}