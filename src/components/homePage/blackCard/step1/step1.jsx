import React, { useState } from 'react'
import Seasons from '../../../filterPage/seasons/seasons'
import { SeasonWrapper } from '../../../filterPage/seasons/style'
import { Card, CardWrapper, Container, ImgWrapper, ButtonImg } from './step1Style'
import { InputNumber, Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import "antd/dist/antd.css";
import b from '../../../../images/forward.png'

const { Option } = Select;

const Step1 = () => {
    let [inputValue, setInputValue] = useState(1)
    let onChangeInput1 = (value) => {
        setInputValue(value)
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
      }
    return (
        <Card className='Card'>
            <CardWrapper className='CardWrapper'>
                <h4>Давайте выберем вам тур всего за 3 этапа.</h4>
                <Container className='Container'>

                    <h3>Когда вы хотите отдохнуть?</h3>
                    <SeasonWrapper className='SeasonWrapper'>
                        <Seasons className='Seasons'/>
                    </SeasonWrapper>

                    <h3>Сколько вас человек?</h3>
                    <InputNumber className='InputNumber'
                        min={1}
                        max={100}
                        style={{ marginLeft: 4 }}
                        value={inputValue}
                        onChange={(value) => { setInputValue(value) }}
                        step={1}
                    />        
                


                </Container>

            </CardWrapper>
                <ImgWrapper className='ImgWrapper'>
                    <div>
                        <ButtonImg className='ButtonImg'/>
                    </div>
                </ImgWrapper>


                {/* <div><FontAwesomeIcon icon={faArrowCircleRight} size="2x" pull="right"/>

                    </div> */}



        </Card>




            )
        }
        
export default Step1