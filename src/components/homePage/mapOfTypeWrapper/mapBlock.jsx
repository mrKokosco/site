import React, { useState } from 'react';
import { MapOfTypeWrapper, PlaceWrapper, PlaceButton, ButtonIndivid } from './mapBlockStyle'
import MapPlace from './map/map';
import Place from './map/mapPlace/place';
import { placeName } from './placeName'
import Pointer from './map/mapPlace/pointer'
import {Jipping, Diving, Cruis, Ohota, Fishing, Skiing, Helicopter, Musilm, Vulkan,Water, Ethnic} from './icon'

const MapBlock = () => {
    let [placeId, setPlaceId] = useState(null)
    let [value, setValue] = useState(false)
    let [value1, setValue1] = useState(false)
    let change = (id, value) => {

        setPlaceId(id)
        setValue(value)
    }


    // let placeMap = placeName.map(p => <Place placeName={p} change={change} value={value} />)


    return (

        <MapOfTypeWrapper className='MapOfTypeWrapper'>
            <div>
                <h2>Что посмотреть на Байкале?</h2>
                <PlaceWrapper className='PlaceWrapper'>
                    <PlaceButton bg={'#ECA3C3'} color={'#B92F6B'}>
                        <h4>Дайвинг</h4>
                          <Diving/></PlaceButton>
                    <PlaceButton bg={'#ECA3C3'} color={'#B92F6B'}>Джипинг <Jipping/></PlaceButton>
                    <PlaceButton bg={'#9CBBCC'} color={'#B92F6B'}>Круизы <Cruis/></PlaceButton>
                    <PlaceButton bg={'#EBD5CC'} color={'#B92F6B'}>Охота <Ohota/></PlaceButton>
                    <PlaceButton bg={'#9CBBCC'} color={'#B92F6B'}>Рыбалка <Fishing/></PlaceButton>
                    <PlaceButton bg={'#EBD5CC'} color={'#B92F6B'}>Лыжи <Skiing/></PlaceButton>
                    <PlaceButton bg={'#ECA3C3'} color={'#B92F6B'}>Вертолеты <Helicopter/></PlaceButton>
                    <PlaceButton bg={'#EBD5CC'} color={'#B92F6B'}>Музеи <Musilm/></PlaceButton>
                    <PlaceButton bg={'#ECA3C3'} color={'#B92F6B'}>Вулканы <Vulkan/></PlaceButton>
                    <PlaceButton bg={'#9CBBCC'} color={'#B92F6B'}>Сплавы <Water/></PlaceButton>
                    <PlaceButton bg={'#EBD5CC'} color={'#B92F6B'}>Этника <Ethnic/></PlaceButton>

                </PlaceWrapper>
            </div>

            <MapPlace placeName={placeName} placeId={placeId} />
            <ButtonIndivid>Собрать индивидуальный тур</ButtonIndivid>
        </MapOfTypeWrapper>
    )
}
export default MapBlock