import { useDispatch } from "react-redux"
import { getDataCards, getDataFetchNavigation } from "../Redux/action/dataAction"
import { useTypeSelector } from "./useTypeSelector"
import { useEffect } from 'react';

export const useGetCards = () => {
    const dispath = useDispatch<any>()

    useEffect(() => {
        dispath(getDataCards())
        dispath(getDataFetchNavigation())
    }, [])

    const { cards, getNavigationMenu } = useTypeSelector(state => state.data)

    return { getNavigationMenu, cards }
}