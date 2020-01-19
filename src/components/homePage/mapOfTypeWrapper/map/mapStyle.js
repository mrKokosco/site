import React from 'react'; 
import styled from 'styled-components';
import bg from '../../../../images/map.png'
import bg2 from '../../../../images/map2.png'
export const MapWrapper = styled.div`
    background: url(${bg2}) center center no-repeat;
    background-size: 100% 100%;
    border-radius: 8px;
    display: grid;
    height: 442px;
    grid-template-columns: repeat(29, 24px);
    grid-template-rows: repeat(17, 34px);


`

export const Pointer = styled.div`
    width: 24px;
    height: 34px;
    color:${props =>props.color};
    grid-row-start: ${props => props.rowStart};
    grid-column-start: ${props => props.colStart};
    grid-row-end: ${props => props.rowEnd};
    grid-column-end: ${props => props.colEnd};
    cursor:pointer;
    .Point{
        filter: ${props =>(props.activlight ? 
            'drop-shadow(0px 3.83234px 10.2455px #C4D7E2)':'drop-shadow(-1px 3.83234px 3.2455px #2B2E30)')} 
            // filter: drop-shadow(-1px 3.83234px 3.2455px #2B2E30);
    }

`

export const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
img{
    border-radius: 8px;
}
h6{
    font-size:12px;
    overflow-y: auto;
    max-height: 200px;
    max-width: 366px;
    color:#35383C;
    ::-webkit-scrollbar {
        width: 10px;
    }
     
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
    }
     
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
       color: #A3A3A3;
       background:#A3A3A3;
        
    }

}

`