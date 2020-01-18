import React from 'react';
import s from './filter.module.css'
import { Slider } from 'antd';
import "antd/dist/antd.css";
import Saesons from './seasons/seasons';
import PriceFilter from './priceFilter/priceFilter';
import CalendarFilter from './calendar/calendarFilter';
import CardOfTour from './cardofTours/cardOfTour';
import { FilterPageWrapper, FilterWrapper, SeasonsWrapper, PriceWrapper, CalendarWrapper, FindButton } from './filterStyle'



const FilterPage = () => {
    return (
        <FilterPageWrapper className='FilterPageWrapper'>

            <div className={s.filter}>
                <FilterWrapper className='FilterWrapper'>
                    <SeasonsWrapper className='SeasonsWrapper'>
                        <h4>Время года</h4>
                        <Saesons props={'seasonsWrapper'} />
                    </SeasonsWrapper>
                    <PriceWrapper className='PriceWrapper'>
                        <h4>Цена</h4>
                        <PriceFilter />
                    </PriceWrapper>
                    <CalendarWrapper className='CalendarWrapper'>
                        <h4>Даты заселения</h4>  
                        <CalendarFilter />
                    </CalendarWrapper>
                  
                    <FindButton className='FindButton'>Найти</FindButton>
                </FilterWrapper>



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

           

        </FilterPageWrapper>

    )

}

export default FilterPage