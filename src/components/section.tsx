import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect} from 'react';



function Footer ({location , setLocation, hours,  dayOfYear, dayOfWeek, weekNumber, setDayOfYear, setDayOfWeek, setWeekNumber}){

  
  

    useEffect(()=>{
        let requestLocation  = async () =>{

            let response = await axios.get('http://worldtimeapi.org/api/timezone/Asia/Tbilisi/')
               let timezone =   response.data.timezone
               let dayYear = response.data.day_of_year
               let dayWeek = response.data.day_of_week
               let week = response.data.week_number
                    
                    setLocation(timezone)  
                    setDayOfYear(dayYear)
                    setDayOfWeek(dayWeek)
                    setWeekNumber(week)
             } ;
            
        requestLocation();
    },[])
        
   

   
       

    return(
     <>
   
        
         <SectionStyle>
            <div className="sectionbox">
                <p className='sectiontext'>CURRENT TIMEZONE</p>
                <h2>{location}</h2>
            </div>    
            <div className="sectionbox">
                <p className='sectiontext'>Day of the year</p>
                <h2>{dayOfYear}</h2>
            </div>  
            <div className="sectionbox">
                <p className='sectiontext'>Day of the week</p>
                <h2>{dayOfWeek}</h2>
            </div>  
            <div className="sectionbox">
                <p className='sectiontext'>Week number</p>
                <h2>{weekNumber}</h2>
            </div>  
                

         </SectionStyle>
     </>
    )
}
            

            


        
                    



export default Footer;

const SectionStyle = styled.div<any>`
width:375px;
height:250px;
padding-top:20px;
margin-top:40px;
background-color: rgba(${props => props.dark > 18 || props.dark < 6 ? '255,255,255,0.75' : '0,0,0,0.75'});
backdrop-filter: blur(20.3871px);
border:none;





display:flex;
flex-direction: column;
align-items: center;

@media screen and (min-width:768px){
    width:768px;
    height:410px;
    margin-top:70px;
    
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

}
@media screen and (min-width:1000px){
    width:100vw;
    height:350px;
    margin-top:64px;
    
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

}
@media screen and (min-width:1400px){
    width:100vw;
    height:500px;
    margin-top:64px;
   
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

}
`
