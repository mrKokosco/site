import React, { useState } from 'react'
import Seasons from '../../../filterPage/seasons/seasons'
import { SeasonWrapper } from '../../../filterPage/seasons/style'
import { CardWrpper, ImagesWrapper,ImagesWrapperCard, Card, Container, WithWho ,Ecp} from './step2Style'
import { InputNumber } from 'antd'
import "antd/dist/antd.css";
import forMe from '../../../../images/forMe.png'
import forFamily from '../../../../images/forFamily.png'
import familyPreview from '../../../../images/familyPreview.png'
import forManPreview from '../../../../images/forMan.jpg'
import s from './s.module.css'




const Step2 = () => {
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





    )
}

export default Step2