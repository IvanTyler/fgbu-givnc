export enum GetDataActionTypesEnum {
    GET_DATA_CARDS = 'GET_DATA_CARDS',
    GET_DATA_ERROR = 'GET_DATA_ERROR',
    GET_DATA_NAVIGATION = 'GET_DATA_NAVIGATION',
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


export type getDataActionType = GetDataAction | GetDataErrorAction | GetDataNavigationAction