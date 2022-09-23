import { ICards, INavigation } from "../Interfaces/interface"


export interface IGetData {
    cards: ICards[],
    cardsFilter: ICards[],
    getNavigationMenu: INavigation[]
    error: null | string;
}

export const initState: IGetData = {
    cards: [],
    cardsFilter: [],
    getNavigationMenu: [],
    error: '',
}