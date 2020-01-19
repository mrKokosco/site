import React, { useState } from 'react'
import { Pointer } from '../mapStyle'
import { Popover, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import {ContentWrapper} from '../mapStyle'



const Cont = (props) => {
    


    return (
        <ContentWrapper className='ContentWrapper'>
            
                <img src={props.img} alt=""/>
                <h6>{props.textPreview}</h6>
            

        </ContentWrapper>

    )
}

export default Cont



