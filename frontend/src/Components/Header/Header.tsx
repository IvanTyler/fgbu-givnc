import React from "react";
import { HeaderNavMenu } from "../HeaderNavMenu/HeaderNavMenu";
import style from './Header.module.scss'
import styleContainer from '../../assets/styles/container.module.scss'

export const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <div className={styleContainer.container}>
                <nav className={style.header__nav}>
                    <HeaderNavMenu />
                </nav>
            </div>
        </header>
    )
}