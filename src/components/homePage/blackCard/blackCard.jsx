import React, { useState } from 'react'
import Saesons from '../seasons/seasons'
import s from './blackCard.module.css'
import FilterSteps from '../seasons/style'
import { InputNumber } from 'antd'
import "antd/dist/antd.css";



const BlackCard = () => {
    let [inputValue, setInputValue] = useState(1)
    let onChangeInput1 = (value) => {
        setInputValue(value)
    }
    return (
        <div className={s.blackCard}>
            <h3>Давайте выберем вам тур всего за 3 этапа.</h3>
            <div className={s.filterType}>
                <h4>Когда вы хотите отдохнуть?</h4>
                <Saesons />
                <h4>Сколько вас человек?</h4>
                <InputNumber
                    min={1}
                    max={100}
                    style={{ marginLeft: 4 }}
                    value={inputValue}
                    onChange={(value) => { setInputValue(value) }}
                    step={1}
                />
            </div>



        </div>
    )
}

export default BlackCard