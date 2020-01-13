import React from 'react';
import logo from './logo.svg';
import Calender from './components/widget/calendar';
import Calender2 from './components/widget/calendar2';
import FilterPage from './components/filterPage/filterPage';
import Header from './components/header/header';
import './App.css';





function App() {
  return (
    <div className="wrapper">
      <h1 className='jjj'>КККККпривет</h1>
      <Header className='header'/>
      <div className='content'>
        <FilterPage />       

      </div>
    </div>
  );
}

export default App;
