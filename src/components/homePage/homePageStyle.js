import React from 'react'; 
import styled from 'styled-components';
import bg from '../../images/bg_toursFilter_cards.png'

export const Container = styled.div`
display: grid;


@media (min-width:576px) {  
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    height: 100%;
    // background-color: #2faf5d;
    align-items: center;
    justify-items: center; 
    // background: url(${bg}) center center;
  }
`

export const MapWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    height: 100%;
`

