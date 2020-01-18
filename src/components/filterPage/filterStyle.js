import React from 'react';
import styled from 'styled-components';

export const FilterPageWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
`

export const FilterWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 90px 110px 1fr 40px;
    grid-auto-rows: 44px;
    grid-gap: 28px;
    padding: 20px 20px 10px 20px;
    border-radius: 0 11px 11px 0px;
    background-color: #35383cf5;
    
`

export const SeasonsWrapper = styled.div`
    display: grid;
    grid-template-columns: 183px;
    grid-template-rows: 36px 1fr;
    h4{
        color:#EEEEEE;
    }

    div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    div .ant-checkbox-inner{
        width: 23px;
        height: 23px;
        border-radius: 8px;
    }

    div .ant-checkbox-inner::after{
        transform: rotate(45deg) scale(1.2) translate(-31%, -69%);
    }

    span{
        font-size: 17px
    }
`
export const PriceWrapper= styled.div`
    display: grid;
    grid-template-rows: 45px 1fr 1fr;
    grid-template-columns: 258px;
    font-family: PFHighwaySansPro R;
    font-size: 16px;

    h4, h5{
        color: #EEEEEE;
    }
    .ant-input-number{
        height: 26px;
        font-family: PFHighwaySansPro R;
        font-size:16px;
    }
    .ant-input-number-input-wrap{
        font-family: PFHighwaySansPro R;
        font-size:16px;
        height: 26px;
    }
    .ant-input-number-input{
        height: 26px;
        padding: 0 6px;
    }
`
export const CalendarWrapper =styled.div`
    h4, h5{
        color: #EEEEEE;
    }
    .react-datepicker{
        font-family: 'PFHighwaySansPro R';       
        font-size: 15px;        
        background-color: #35383cf5;
        color: #000;
        border: 0;
        border-radius: 0.3rem;
        display: inline-block;
        position: relative;
        padding: 0 10px 0 10px;
    }
    .react-datepicker div{
        font-family: 'PFHighwaySansPro R';       
        font-size: 15px; 
        font-weight: normal;
        
    }   
    .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
        color: #eee;
        display: inline-block;
        width: 1.7rem;
        line-height: 1.7rem;
        text-align: center;
        margin: 0.166rem;
    }
    .react-datepicker__header {
        text-align: center;
        background-color: #35383c;
        border-bottom: 2px solid #25272a;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 5px;
        padding-top: 8px;
        position: relative;
    }
    .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {
        margin-top: 0;
        font-family: 'PFHighwaySansPro R';
        color: #eee;
        font-weight: bold;
        font-size: 0.944rem;
    }
    .react-datepicker__day--disabled{
        cursor: default;
        color: #8b8b8b;
    }
    .react-datepicker__day:hover{
        background-color: #282a2d;
    }
    .react-datepicker__navigation--next, .react-datepicker__navigation--previous{
        outline: 0;

    }
`
export const FindButton = styled.div`
    text-align: center;
    width: 258px;
    background: #EEEEEE;
    color: #35383C;
    padding: 7px;
    border-radius: 8px;
    box-shadow: -7px 4px 15.829px rgb(32,32,33);



`