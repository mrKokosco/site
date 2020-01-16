import React, { useState } from 'react'
import Seasons from '../../../filterPage/seasons/seasons'
import {SeasonWrapper} from '../../../filterPage/seasons/style'
import {Card, Container} from './step2Style'
import { InputNumber } from 'antd'
import "antd/dist/antd.css";




const Step2 = () => {
    let [inputValue, setInputValue] = useState(1)
    let onChangeInput1 = (value) => {
        setInputValue(value)
    }
    return (
        <>
        <h4>Заголовок</h4>
            <Container>
                <img src='https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg'/>
            </Container>
        </>
            
              
           
        
    )
}

export default Step2