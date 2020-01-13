import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calender from './components/widget/calendar';
import Calender2 from './components/widget/calendar2';
import FilterPage from './components/filterPage/filterPage';
import Header from './components/header/header';



function App() {
  return (
    <div className="wrapper">
      <div class='jjj'>КККККпривет</div>
      <Header className='header'/>
      <div className='content'>
        <FilterPage />       

      </div>
    </div>
  );
}

export default App;
