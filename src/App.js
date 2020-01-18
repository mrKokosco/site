import React from 'react';
import logo from './logo.svg';
import Calender from './components/widget/calendar';
import Calender2 from './components/widget/calendar2';
import FilterPage from './components/filterPage/filterPage';
import Header from './components/header/header';
import './App.css';
import HomePage from './components/homePage/homePage';
import {Content} from './contentStyle'





function App() {
  return (
    <div className="wrapper">      
      <Header className='header'/>
      <Content className='Content'>
        <HomePage/>
        
        {/* <FilterPage />        */}

      </Content>
    </div>
  );
}

export default App;
