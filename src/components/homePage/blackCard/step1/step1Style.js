import React from 'react'; 
import styled from 'styled-components';

export const Card = styled.div`
    background: #35383C;
    box-shadow: 0px 8px 18px rgba(39,60,72,0.18);
    border-radius: 8px;
    display: grid;
    grid-template-rows: 80px 1fr;
    padding: 56px;
    max-width: 649px;
    max-width: 649px;
    h4{
        text-align: center;
}
`
export const Container = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
grid-auto-rows: 66px;
`

// .blackCard{
//     

// }

// .filterType{
//     display: grid;
//     grid-template-rows: 92px 62px;
//     grid-template-columns: 1fr 1fr;
//     width: 518px;

// }