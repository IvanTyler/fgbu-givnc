import { ICards, INavigation } from "../Interfaces/interface"


export interface IGetData {
    cards: ICards[],
    cardsCopy: ICards[],
    getNavigationMenu: INavigation[]
    error: null | string;
}

export const initState: IGetData = {
    cards: [],
    cardsCopy: [],
    getNavigationMenu: [],
    error: '',
}