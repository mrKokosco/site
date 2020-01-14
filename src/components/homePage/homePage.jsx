import React, { useState } from 'react'
import Saesons from './seasons/seasons'
import s from './homePage.module.css'
import FilterSteps from './seasons/style'
import { InputNumber } from 'antd'
import "antd/dist/antd.css";
import BlackCard from './blackCard/blackCard'




const HomePage = () => {
    let [inputValue, setInputValue] = useState(1)
    let onChangeInput1 = (value) => {
        setInputValue(value)
    }
    return (
        <div >
            <BlackCard/>
            
          
            </div>



       
    )
}

export default HomePage