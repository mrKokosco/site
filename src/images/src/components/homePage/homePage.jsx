import React, { useState } from 'react'
import "antd/dist/antd.css";
import BlackCard from './blackCard/blackCard'
import {Container} from './homePageStyle'




const HomePage = () => {
    let [inputValue, setInputValue] = useState(1)
    let onChangeInput1 = (value) => {
        setInputValue(value)
    }
    return (
        <div >
            <Container>
                <BlackCard/>
            </Container>
            
            
          
            </div>



       
    )
}

export default HomePage