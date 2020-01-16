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
        <Card>
        <h4>Давайте выберем вам тур всего за 3 этапа.</h4>
            <Container>
                <h3>Когда вы хотите отдохнуть?</h3>  
                <SeasonWrapper>
                    <Seasons/> 
                </SeasonWrapper>
                         
                <h3>Сколько вас человек?</h3>
                <InputNumber
                    min={1}
                    max={100}
                    style={{ marginLeft: 4 }}
                    value={inputValue}
                    onChange={(value) => { setInputValue(value) }}
                    step={1}
                />
            </Container>
            </Card>
            
              
           
        
    )
}

export default Step1