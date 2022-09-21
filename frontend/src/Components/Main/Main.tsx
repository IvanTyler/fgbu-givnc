import React from "react";
import style from './Main.module.scss'

interface MainProps {
    children: React.ReactNode
}

export const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main className={style.main}>
            {children}
        </main>
    )
}