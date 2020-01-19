import React, { useState } from 'react'
import "antd/dist/antd.css";
import BlackCard from './blackCard/blackCard'
import { Container} from './homePageStyle'
import MapBlock from './mapOfTypeWrapper/mapBlock';





const HomePage = () => {    

    
    return (
        < >
            <Container className='Container'>
                <BlackCard className='BlackCard' />
            </Container>
            <MapBlock/>




        </>




    )
}

export default HomePage