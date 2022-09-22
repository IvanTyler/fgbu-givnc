import { IGetData, initState } from "../initState";
import { getDataActionType, GetDataActionTypesEnum } from "../types/getDataTypes";

export const getDataReucer = (state = initState, action: getDataActionType): IGetData => {
    switch (action.type) {
        case GetDataActionTypesEnum.GET_DATA_CARDS:
            return { ...state, cards: action.payload, cardsCopy: action.payload }
        case GetDataActionTypesEnum.GET_DATA_ERROR:
            return { ...state, error: action.payload }
        case GetDataActionTypesEnum.GET_DATA_NAVIGATION:
            return { ...state, getNavigationMenu: action.payload }
        case GetDataActionTypesEnum.FILTER_CARDS:
            return {
                ...state, cardsCopy: state.cards.filter((el: any) => el.region === action.payload)
            }
        default:
            return state
    }
}