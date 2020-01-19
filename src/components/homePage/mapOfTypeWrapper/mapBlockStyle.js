import React from 'react'; 
import styled from 'styled-components';
import bg from '../../../images/bgforMapBox.png'

export const MapOfTypeWrapper = styled.div`
    display: grid;
    background: url(${bg}) center center no-repeat;
    background-size: 100% 100%;
    
    grid-template-columns: 1fr 691px;
    grid-template-rows: 1fr;
    height: 100%;
    background-color: #35383c;
    padding: 80px 40px 40px 40px;
    grid-gap: 64px;
     h2{
        font-size: 40px;
        width: 73%;
        font-family: Peace Sans;
        color: #EEEEEE
    }
    
    
`
export const PlaceWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(129px,129px));
grid-auto-rows: 40px;
grid-gap: 14px;

`
export const PlaceButton = styled.div`
    padding: 8px 0px 6px 15px;
    background: ${props => props.bg};
    border-radius: 8px;
    color:#493f43c9;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 24px;
    cursor:pointer;
    user-select: none;
    h4{
        font-family: PFHighwaySansPro M;
    font-size: 16px;
    color:#493f43c9;
    }
    svg{
        margin-left: 5px;
        height: 26px
    }&:active{
        filter: brightness(.1);
    }&:hover{
        filter: brightness(.6);
    }
`
export const ButtonIndivid = styled.div`
    padding: 10px 15px 10px 15px;
    border-radius: 8px;
    border: 1px solid #EEEEEE;
    color: #EEEEEE;
    display: grid;
    width: 259px;
    user-select: none;
    h4{
        font-family: PFHighwaySansPro M;
    font-size: 16px;
    color:#EEEEEE;
    }
    svg{
        margin-left: 5px;
        height: 26px
    }&:hover{
        background: #6d6d6d;
        cursor:pointer;
    }

`