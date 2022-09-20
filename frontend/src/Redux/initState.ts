import { ICards, INavigation } from "../Interfaces/interface"


export interface IGetData {
    cards: ICards[],
    error: null | string;
    getNavigationMenu: INavigation[]
}

export const initState: IGetData = {
    cards: [],
    getNavigationMenu: [],
    error: '',
}