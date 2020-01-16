import React, { useState } from 'react'
import Seasons from '../../../filterPage/seasons/seasons'
<<<<<<< HEAD
import { SeasonWrapper } from '../../../filterPage/seasons/style'
import { CardWrpper, ImagesWrapper,ImagesWrapperCard, Card, Container, WithWho ,Ecp} from './step2Style'
import { InputNumber } from 'antd'
import "antd/dist/antd.css";
import forMe from '../../../../images/forMe.png'
import forFamily from '../../../../images/forFamily.png'
import familyPreview from '../../../../images/familyPreview.png'
import forManPreview from '../../../../images/forMan.jpg'
import s from './s.module.css'
=======
import {SeasonWrapper} from '../../../filterPage/seasons/style'
import {Card, Container} from './step2Style'
import { InputNumber } from 'antd'
import "antd/dist/antd.css";
>>>>>>> e9ff72d6b104a9a1675f8b8596a3e914abb86518




const Step2 = () => {
<<<<<<< HEAD
    let [preview, setPreview] =useState(familyPreview)
    let [inputValue, setInputValue] = useState(1)
let onChangePreview =(pic)=>{
    
    setPreview(pic)
}

    let onChangeInput1 = (value) => {
        
        setInputValue(value)
    }
    return (
        <CardWrpper>
            {/* <div className={s.images}> 
                        
                        </div> */}
            <Card>
                <div>
                    <h4>Как вы планируете отдохнуть?  </h4>
                   

                </div>
                <WithWho>
                    <div>
                         <img src={forMe} />
                         <h5>Я еду один</h5>
                </div>
                <div>
                         <img src={forFamily} />
                         <h5>Пара</h5>
                </div>
                <div onClick={()=>{onChangePreview(forManPreview)}}>
                         <img src='https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg' />
                         <h5>Чисто мужской</h5>
                </div>
                <div>
                         <img src='https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg' />
                         <h5>Семейный</h5>
                </div>
                <div onClick={()=>{onChangePreview(familyPreview)}}>
                         <img src='https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg' />
                         <h5>Корпоративный</h5>
                </div>
                        
                    </WithWho>

            </Card>
            <ImagesWrapper>
            <Ecp pic={preview}>
            <h5>Отдохни с друзьями</h5>

            </Ecp>
                
                    
                {/* <img src={preview} alt="" /> */}
              
                
            </ImagesWrapper>
        </CardWrpper>





=======
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
            
              
           
        
>>>>>>> e9ff72d6b104a9a1675f8b8596a3e914abb86518
    )
}

export default Step2