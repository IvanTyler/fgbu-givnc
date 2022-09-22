export enum GetDataActionTypesEnum {
    GET_DATA_CARDS = 'GET_DATA_CARDS',
    GET_DATA_ERROR = 'GET_DATA_ERROR',
    GET_DATA_NAVIGATION = 'GET_DATA_NAVIGATION',
    FILTER_CARDS = 'FILTER_CARDS',
    FILTER_SEARCH_TITLE = 'FILTER_SEARCH_TITLE',
}

export interface GetDataAction {
    type: GetDataActionTypesEnum.GET_DATA_CARDS;
    payload: any;
}

export interface GetDataNavigationAction {
    type: GetDataActionTypesEnum.GET_DATA_NAVIGATION;
    payload: any;
}

export interface GetDataErrorAction {
    type: GetDataActionTypesEnum.GET_DATA_ERROR;
    payload: string;
}

export interface GetDataFilterRegionsAction {
    type: GetDataActionTypesEnum.FILTER_CARDS;
    payload: string;
}

export interface filterSearchTitleAction {
    type: GetDataActionTypesEnum.FILTER_SEARCH_TITLE;
    payload: string;
}


export type getDataActionType =
    GetDataAction |
    GetDataErrorAction |
    GetDataNavigationAction |
    GetDataFilterRegionsAction |
    filterSearchTitleAction