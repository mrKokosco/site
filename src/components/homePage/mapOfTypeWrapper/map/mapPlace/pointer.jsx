import React, { useState } from 'react'
import { Pointer } from '../mapStyle'
import { Popover, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Cont from './content';



const mapPointer = (props) => {
 
   
    let focus = false
    let state = false
    if (props.placeId === props.placeName.id) {
        
        state = props.state
        if(state){
            focus = true
        }
    }
    let Click=()=>{
        
        props.change(state, props.placeName.id)

    }
    return (
        <Popover
            content={<Cont textPreview={props.placeName.textPreview} img={props.placeName.img}/>}
            title={props.placeName.title}
            visible={state}
            placement={props.placeName.placement}
        >
            <Pointer className='Pointer'
                rowStart={props.placeName.rowStart}
                colStart={props.placeName.colStart}
                rowEnd={props.placeName.rowEnd}
                colEnd={props.placeName.colEnd}
                color={props.placeName.color}
                activlight ={focus}
                onClick={Click}
                
            >
                <FontAwesomeIcon className='Point' icon={faMapMarkerAlt} size="2x" pull="right" />
            </Pointer>
        </Popover>
    )
}

export default mapPointer



