import React from "react";
import style from './Wrapper.module.scss'

interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}