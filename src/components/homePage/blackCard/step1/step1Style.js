import React from 'react'; 
import styled from 'styled-components';
import button from '../../../../images/forward.png'

export const Card = styled.div`
background: #35383C;
box-shadow: 0px 8px 18px rgba(39,60,72,0.18);
border-radius: 8px;
display: grid;
grid-template-columns: 1fr 42px;
grid-template-rows: 1fr;
max-width: 674px;
height: 385px;
padding: 20px 7px 0px 7px;
h4{
    text-align: center;
}


@media (max-width:576px) {      
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100px;
    width: 100%;
    height: 100%;
    padding: 20px 40px 0px 40px;
    border-radius: 0;
h4{
    text-align: center;
    padding-bottom: 60px;
}
.ant-input-number, .ant-input-number-input{
    height: 40px;
}
.ant-checkbox-inner::after{

    transform: rotate(45deg) scale(1.6) translate(0%, -85%);
}
  }
@media (min-width:576px) {  
    
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 100px;
    width: 100%;
    height: 100%;
    padding: 20px 40px 0px 40px;
    border-radius: 0;
h4{
    text-align: center;
    padding-bottom: 60px;
}
.ant-input-number, .ant-input-number-input{
    height: 40px;
}
.ant-checkbox-inner::after{

    transform: rotate(45deg) scale(1.6) translate(0%, -85%);
}
  }
  
@media (min-width:960px) {  
    background: #35383C;
    box-shadow: 0px 8px 18px rgba(39,60,72,0.18);
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 42px;
    grid-template-rows: 1fr;
    max-width: 674px;
    height: 385px;
    padding: 20px 40px 0px 40px;
    h4{
        text-align: center;
    }
    .ant-checkbox-inner::after{

        transform: rotate(45deg) scale(1.6) translate(5%,-66%);
    }
  }
   
`
export const CardWrapper = styled.div`
display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 99px 1fr

    @media (max-width:576px) {  
        grid-template-rows: 65px 1fr;
      }

     
`

export const Container = styled.div`
display: grid;
grid-template-columns: 296px 337px;
grid-template-rows: 130px 100px;
label{
    margin-bottom: 10px;
}
span{
    font-family: 'PFHighwaySansPro R';
    color:#EEEEEE;
    width: 20px;
    height: 20px;
    border-radius: 7px;
}
.ant-input-number-handler-wrap span{
    border-radius: 0px;
}
@media (max-width:576px) {   

    grid-template-columns: 1fr;
    grid-template-rows: 40px 130px 40px 61px;
    grid-gap: 14px;
    .SeasonWrapper{
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        color: #EEEEEE;
        font-size: 16px;
    }

    .SeasonWrapper div{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .SeasonWrapper span{
        width: 40px;
        height: 40px;
    }
    h3{
        padding-left: 0;
    }
    
  }

  @media (min-width:576px) {   

    .SeasonWrapper{
        grid-template-columns: repeat(auto-fill,minmax(188px,220px));
        grid-auto-rows: 1fr;
        color: #EEEEEE;
        font-size: 16px;
    }

    .SeasonWrapper div{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .SeasonWrapper span{
        width: 40px;
        height: 40px;
    }
    h3{
        padding-left: 0;
    }
    
  }
  @media (min-width:960px) {   

    .SeasonWrapper span{
        width: 30px;
        height: 30px;
    }
    h3{
        padding-left: 0;
    }
    
  }
`
export const ImgWrapper = styled.div`
position: relative;
    left: -13px;
    display: grid;
    align-items: center;
div{
    box-shadow: 0px 8px 18px #282A2D;
    border-radius:50%;
    cursor:pointer;
    transition:all ease-in .1;
}
div:hover{
    transform:scale(1.1)
}
@media (max-width:576px) {   
           
    justify-items: center;
    align-self: center;
  }
@media (min-width:576px) {   
           
    justify-items: center;
    align-self: center;
  }
  @media (min-width:960px) {   
    left: -23px;
  }

`

export const ButtonImg = styled.img.attrs({
    src:button
})`

 
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