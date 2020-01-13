import React from 'react';
import s from './seasons.module.css'
import { Checkbox } from 'antd';
import "antd/dist/antd.css";




const Saesons = () => {
    let onChange = () => {


    }

    return (


        <div className={s.seasonsWrapper}>
            <div>Время года</div>
            <Checkbox className={s.ml_8} onChange={onChange}>Зима</Checkbox>
            <Checkbox onChange={onChange}>Весна</Checkbox>
            <Checkbox onChange={onChange}>Лето</Checkbox>
            <Checkbox onChange={onChange}>Осень</Checkbox>
        </div>

    )

}

export default Saesons