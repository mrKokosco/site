import React, { useState } from 'react'
import Seasons from '../../../filterPage/seasons/seasons'
import { SeasonWrapper } from '../../../filterPage/seasons/style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { CardWrpper, ImagesWrapper,ImagesWrapperCard, Card, Container, WithWho ,PreviewPic} from './step2Style'
import { InputNumber } from 'antd'
import "antd/dist/antd.css";
import forMe from '../../../../images/forMe.png'
import forLovers from '../../../../images/forLovers.png'
import forFamily from '../../../../images/forFamily.png'
import forMan from '../../../../images/forMan.png'
import forCompany from '../../../../images/forCompany.png'
import forParty from '../../../../images/forParty.png'
import familyPreview from '../../../../images/familyPreview.png'
import forManPreview from '../../../../images/forManPreview.jpg'
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
                         <img className='icon' src={forMe} />
                         <h5>Я еду один</h5>
                </div>
                <div>
                         <img className='icon' src={forLovers} />
                         <h5>Пара</h5>
                </div>
                <div>
                         <img className='icon' src={forFamily} />
                         <h5>Семейный</h5>
                </div>
                <div onClick={()=>{onChangePreview(forManPreview)}}>
                         <img className='icon' src={forMan} />
                         <h5>Чисто мужской</h5>
                </div>
                <div>
                         <img className='icon' src={forParty} />
                         <h5>Компания</h5>
                </div>
                <div onClick={()=>{onChangePreview(familyPreview)}}>
                         <img src={forCompany} />
                         <h5>Корпоративный</h5>
                </div>
                        
                    </WithWho>

            </Card>
            <ImagesWrapper>
            <PreviewPic pic={preview}>
            <h5>Отдохни с друзьями</h5>
            <div>
            <FontAwesomeIcon className={s.color} icon={faArrowCircleRight} size="2x" pull="right"/>
            </div>
           

            </PreviewPic>
                
                    
                {/* <img src={preview} alt="" /> */}
              
                
            </ImagesWrapper>
        </CardWrpper>





    )
}

export default Step2