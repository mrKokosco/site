import React from 'react';
import s from './filter.module.css'
import { Slider } from 'antd';
import "antd/dist/antd.css";
import Saesons from './seasons/seasons';
import PriceFilter from './priceFilter/priceFilter';
import CalendarFilter from './calendar/calendarFilter';
import CardOfTour from './cardofTours/cardOfTour';



const FilterPage = () => {
    return (
        <div className={s.filterPage}>

            <div className={s.filter}>
                <div className={s.filterWrapper}>
                    <Saesons />
                    <PriceFilter />
                    <CalendarFilter />

                </div>



            </div>
            <div className={s.cardsOfTours}>
                <div className={s.cadrsWrapper}>
                    <div className={s.cardsOfTours_content}>
                        <CardOfTour />
                        <CardOfTour />
                        <CardOfTour />
                        <CardOfTour />
                        <CardOfTour />
                        <CardOfTour />
                        <CardOfTour />
                    </div>
                </div>


            </div>

        </div>

    )

}

export default FilterPage