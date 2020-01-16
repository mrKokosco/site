import React from 'react'
import styled from 'styled-components'

export const GridVerical = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows:30px;
    color: #EEEEEE;
    font-size: 16px;   
`

export const SeasonWrapper = styled(GridVerical)`
grid-template-columns: repeat(auto-fill,minmax(188px,200px));
`

// @media screen and (max-width: 900px) and (min-width: 600px){
//     color: #tttttt
// }