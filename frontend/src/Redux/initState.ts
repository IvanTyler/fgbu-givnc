import { ICards, INavigation } from "../Interfaces/interface"


export interface IGetData {
    cards: ICards[],
    getNavigationMenu: INavigation[]
    error: null | string;
}

export const initState: IGetData = {
    cards: [],
    getNavigationMenu: [],
    error: '',
}