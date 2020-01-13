import React from 'react';
import s from './cardOfTour.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faMoon, faBus, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'




const CardOfTours = () => {
    return (
        <div className={s.card} >
            <div className={s.cardBody}>

                <div className={s.header}>Новый год на Байкале</div>
                <div className={s.other}>
                    <div className={s.price}>30 000<span>₽</span></div>
                    <div className={s.otherItems}>
                        <div className={s.cardIcon} >
                            <div>9   <FontAwesomeIcon className={s.color} icon={faMapMarkedAlt} />
                            </div>
                            <div className={s.textPreview}>экскурсии</div>
                        </div>

                        <div className={s.cardIcon}>
                            <div>10 <FontAwesomeIcon className={s.color} icon={faMoon} />
                            </div>
                            <div className={s.textPreview}>ночей</div>
                        </div>

                        <div className={s.cardIcon}>
                            <div>Да <FontAwesomeIcon className={s.color} icon={faBus} /></div>
                            <div className={s.textPreview}>трансфер</div>
                        </div>
                        <div className={s.clickButton}> <FontAwesomeIcon className={s.color} icon={faArrowCircleRight} size="2x" pull="right"/></div>
                    </div>

                </div>
            </div>

        </div>


    )

}

export default CardOfTours