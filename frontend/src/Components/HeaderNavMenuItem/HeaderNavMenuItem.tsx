import React from "react";
import { Link } from "react-router-dom";
import { INavigation } from "../../Interfaces/interface";
import style from './HeaderNavMenuItem.module.scss'

interface HeaderNavMenuItemProps {
    item: INavigation
}

export const HeaderNavMenuItem: React.FC<HeaderNavMenuItemProps> = ({ item }) => {
    return (
        <li className={style.HeaderNavMenuItem}>
            <Link to={item.link} className={style.HeaderNavMenuLink}>{item.name}</Link>
        </li>
    )
}