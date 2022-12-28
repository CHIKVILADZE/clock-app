import React from 'react';
import styled from 'styled-components';
import './App.css';
import Day from './components/day';
import {  useState } from 'react';
import Footer from './components/section'






function App() {

  let today = new Date();

    let hours = addZero (today.getHours());
    let min = addZero (today.getMinutes())

    let  time :number | string = `${hours} : ${min}`
    function addZero (num : number){
      return num<10 ? `0${num}` :num
    }


  const [section, setSection] = useState(null)
  const [location, setLocation] = useState(null)
  const[more, setMore]=useState(false)
  const [night, setNight] = useState(false)
  const[dayOfYear, setDayOfYear]=useState()
  const[dayOfWeek, setDayOfWeek]=useState()
  const[weekNumber, setWeekNumber]=useState()

  const handleClick = () =>{
    setMore(!more)
  }
  

 
     return (
    <div className="app">
      <Day section={section} setSection={setSection} 
      location={location} setLocation={setLocation}
      more={more} setMore={setMore}
      handleClick={handleClick} night={night} setNight={setNight}
      dayOfYear={dayOfYear} setDayOfYear={setDayOfYear}
      dayOfWeek={dayOfWeek} setDayOfWeek={setDayOfWeek}
      weekNumber={weekNumber} setWeekNumber={setWeekNumber}
       />
      
    </div>
  ); 
}

export default App;
   


 




