import React from "react";
import style from './ObjectRegistry.module.scss'
import InputStyle from '../../assets/styles/InputStyle.module.scss'
import styleContainer from '../../assets/styles/container.module.scss'

export const ObjectRegistry: React.FC = () => {
    return (
        <section className={style.ObjectRegistry}>
            <div className={styleContainer.container + ' ' + style.ObjectRegistry__container}>

                <h1 className={style.ObjectRegistry__title}>
                    Реестр объектов нематериального
                    культурного наследия народов россии
                </h1>

                <input
                    className={InputStyle.input + ' ' + style.ObjectRegistry__search}
                    type="search"
                    name="search"
                    placeholder="Поиск"
                />
            </div>
        </section>
    )
}