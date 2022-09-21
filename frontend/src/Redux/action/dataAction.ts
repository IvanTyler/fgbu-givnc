import axios from "axios"
import { Dispatch } from "react"
import { BACKEND_HOST } from "../../Constants/constants"
import { getDataActionType, GetDataActionTypesEnum } from "../types/getDataTypes"

export const getDataCards = () => {
    return async (dispath: Dispatch<getDataActionType>) => {
        const response = await axios.get<any>(`${BACKEND_HOST}`)

        try {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_CARDS,
                payload: response.data.cards
            })
        } catch (e) {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_ERROR,
                payload: 'Ошибка, данных нет'
            })
        }
    }
}

export const getDataNavigation = () => {
    return async (dispath: Dispatch<getDataActionType>) => {
        const response = await axios.get<any>(`${BACKEND_HOST}`)
        try {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_NAVIGATION,
                payload: response.data.navigation
            })
        } catch (e) {
            dispath({
                type: GetDataActionTypesEnum.GET_DATA_ERROR,
                payload: 'Ошибка, данных нет'
            })
        }
    }
}