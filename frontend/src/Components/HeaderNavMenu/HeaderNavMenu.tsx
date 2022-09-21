import React from "react";
import { useGetCards } from "../../Hooks/useGetData";
import { INavigation } from "../../Interfaces/interface";
import { List } from "../List/List";
import { HeaderNavMenuItem } from "../HeaderNavMenuItem/HeaderNavMenuItem";
import style from './HeaderNavMenu.module.scss'

export const HeaderNavMenu: React.FC = () => {
    const { getNavigationMenu } = useGetCards()

    return (
        <ul className={style.headerNavMenu}>
            <List
                items={getNavigationMenu}
                renderItem={(item: INavigation) => <HeaderNavMenuItem item={item} key={item.id} />}
            />
        </ul>
    )
}