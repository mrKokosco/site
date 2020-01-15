import React, { useState } from 'react'
import Seasons from '../../filterPage/seasons/seasons'
import {SeasonWrapper} from '../../filterPage/seasons/style'
import {Card, Container} from './blackCardStyle'
import { InputNumber } from 'antd'
import Step1 from './step1/step1'
import Step2 from './step2/step2'
import "antd/dist/antd.css";



const BlackCard = () => {
    let [inputValue, setInputValue] = useState(1)
    let onChangeInput1 = (value) => {
        setInputValue(value)
    }
    return (
        <Card>
            <Step2/>
        </Card>
    )
}

export default BlackCard