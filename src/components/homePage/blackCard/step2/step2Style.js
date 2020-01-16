import React from 'react'; 
import styled from 'styled-components';
import familyPreview from '../../../../images/familyPreview.png'
import { ExceptionMap } from 'antd/lib/result';
const famaly =familyPreview

export const CardWrpper = styled.div`
    display: grid;
    grid-template-columns: minmax(300px,674px) 131px
`

export const Card = styled.div`
background: #35383C;
box-shadow: 0px 8px 18px rgba(39,60,72,0.18);
border-radius: 8px;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 55px 220px;
padding: 56px;
max-width: 649px;
height: 385px;
padding-right: 255px;
padding-top: 20px;
padding-left: 7px;
   
    h4{
        text-align: left;
        padding-left: 22px;
        color:#AAADB2;
    }
    
`
export const ImagesWrapper = styled.div`
    z-index: 1;
    position: relative;
    left: -235px;
    top: 66px;
    img{
        max-width: 362px;
    }
`

export const Ecp= styled.div`
background-color: white;
background-color: white;
background: linear-gradient(359.52deg,#202020 4.68%,rgba(53,56,60,0) 75%),url(${props => props.pic }) center center no-repeat;
background-size: cover;
height: 66%;
width: 275%;
box-shadow: 0px 8px 18px rgba(33, 33, 33, 0.39);
border-radius: 15.3947px;

`

export const Container = styled.div`display: grid;
grid-template-columns: 2fr 1fr;
grid-template-rows: 1fr;
grid-auto-rows: 66px;
img{
    vertical-align: middle;
border-style: none;
width: 28%;
}
`

export const WithWho = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 120px 1fr;

div{
    text-align: center;
    
}
h5{
    color:#AAADB2;
}
img{
    vertical-align: middle;
    border-style: none;
    width: 61%;
    border-radius: 50%;
    padding-bottom: 9px;
}
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