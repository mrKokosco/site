import React from 'react'; 
import styled from 'styled-components';
import familyPreview from '../../../../images/familyPreview.png'
import { ExceptionMap } from 'antd/lib/result';
const famaly =familyPreview

export const CardWrpper = styled.div`
    display: grid;    
    @media (min-width:600px) {  
        grid-template-columns: 1fr;
      }
    @media (min-width:812px) {  
        grid-template-columns: minmax(300px,794px) 214px;
      }
      
`

export const Card = styled.div`
background: #35383C;
box-shadow: 0px 8px 18px rgba(39,60,72,0.18);
border-radius: 8px;
display: grid;


h4{
    padding-left: 32px;
}
@media (min-width:600px) {  
    grid-template-columns: 97vw;
    grid-template-rows: 55px 220px;
    max-width: 812px;
    height: 385px;
    padding: 20px 0px 0px 0px;
  }
@media (min-width:812px) {  
    grid-template-columns: 1fr;
grid-template-rows: 55px 220px;
    max-width: 794px;
    height: 385px;
    padding: 20px 204px 0px 7px;
  }
   
    
    
`
export const ImagesWrapper = styled.div`
    z-index: 1;
    position: relative;
    left: -176px;
    top: 66px;
    img{
        max-width: 362px;
    }
`

export const PreviewPic= styled.div`
display:none;
@media (min-width:812px) {  
    background-color: white;
background-color: white;
background: linear-gradient(359.52deg,#202020 4.68%,rgba(53,56,60,0) 75%),url(${props => props.pic }) center center no-repeat;
background-size: cover;
height: 66%;
width: 181%;
box-shadow: 0px 8px 18px rgba(33, 33, 33, 0.39);
border-radius: 15.3947px;
display:block;
  }

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
@media (min-width:600px) {  
   
    grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
    grid-template-rows: 120px 1fr;
    grid-gap: 20px;
  }

@media (min-width: 723px) {  
   
    grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
    grid-template-rows: 120px 1fr;
    grid-gap: 20px;
  }
@media (min-width: 803px) {  
    
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 120px 1fr;
    grid-gap: 20px;
  }

 


    div{
        text-align: center;
        
    }
    div:hover{
        

    }
    h5{
        color:#AAADB2;
        text-align: center;
    }

    img{
        vertical-align: middle;
        border-style: none;
        width: 40%;
        border-radius: 50%;
        padding-bottom: 9px;
        transition: all .3s ease;
    }
    img:hover{
        filter: sepia(70%);
        cursor:pointer
       
    }
   
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