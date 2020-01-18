import React, { useState } from 'react'
import "antd/dist/antd.css";
import BlackCard from './blackCard/blackCard'
import {Container, MapWrapper} from './homePageStyle'




const HomePage = () => {
    let [inputValue, setInputValue] = useState(1)
    let onChangeInput1 = (value) => {
        setInputValue(value)
    }
    return (
        <div >
            <Container className='Container'>
                <BlackCard className='BlackCard'/>
            </Container>

        <MapWrapper>
            <div>Виды</div>
            <div>Карта</div>
        </MapWrapper>
            
            
            
          
            </div>



       
    )
}

export default HomePage