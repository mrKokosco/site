import React, { useState } from 'react'
import Seasons from '../../../filterPage/seasons/seasons'
import {SeasonWrapper} from '../../../filterPage/seasons/style'
import {Card, Container} from './step1Style'
import { InputNumber } from 'antd'
import "antd/dist/antd.css";



const Step1 = () => {
    let [inputValue, setInputValue] = useState(1)
    let onChangeInput1 = (value) => {
        setInputValue(value)
    }
    return (
        <>
        <h4>Заголовок</h4>
            <Container>
                <h3>текст 1</h3>  
                <SeasonWrapper>
                    <Seasons/> 
                </SeasonWrapper>
                         
                <h3>текст2</h3>
                <InputNumber
                    min={1}
                    max={100}
                    style={{ marginLeft: 4 }}
                    value={inputValue}
                    onChange={(value) => { setInputValue(value) }}
                    step={1}
                />
            </Container>
        </>
            
              
           
        
    )
}

export default Step1