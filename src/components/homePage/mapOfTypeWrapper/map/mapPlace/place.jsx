import React, { useState } from 'react'
import { PlaceButton } from '../../mapBlockStyle'

const Place = (props) => {
    
    let state = props.value
    let click=()=>{        
        if(!state){
            state = true
        }
        else{
            state = false
        }
        
        props.change(props.placeName.id, state)
    }

    return (
        <>
            <PlaceButton className='PlaceButton'
                id={props.placeName.id}
                bgColor={props.placeName.color} onClick={click}
            >{props.placeName.title}</PlaceButton>

        </>

    )
}

export default Place
{/* <div>Тальцы</div>
<div>П. Листявка</div>
<div>Кругобайкальская железная дорога</div>
<div>Большое Голоустное</div>
<div>Бухта песчаная</div>
<div>О. Ольхон</div>
<div>Улан-Удэ</div>
<div>Полуостров Святой Нос</div>
<div>Ушканьи острова</div>
<div>Чивыркуйский залив</div>
<div>Баргузинская долина </div>
<div>Посольский сор </div>
<div>Горячинск </div>
<div>Байкальск </div>
<div>Слюдянка </div>
<div>Река Иркут</div>
<div>Долина вулканов</div>
<div>Шумак </div>
<div>Северобайкальск </div>
<div>Фролиха </div>
<div>Мыс Котельниковский</div>
<div>Аршан </div>
<div>Жемчуг </div> */}