import React, { useState, Component } from 'react'
import { Popover, Button } from 'antd';
import { MapWrapper, Pointer } from './mapStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import MapPointer from './mapPlace/pointer'



const MapPlace = (props) => {
 

  const [state, setState]= useState(false)
  const [placeId, setPlaceId] = useState(null)

  const Change = (visible,id) => {
    
    setPlaceId(id)
    setState({ visible });
  };

let placeNameMap = props.placeName.map(p=><MapPointer placeName={p} placeId={placeId} state={state} change={Change}/>)
  return (

    <MapWrapper className='MapWrapper'>
      {placeNameMap}

    </MapWrapper>
  )
}

export default MapPlace