import React from 'react';
import styled from 'styled-components';
import day from '../assets/mobile/day.jpg';
import Quote from './quote';
import sun from '../assets/desktop/sun.svg';
import down from '../assets/desktop/down.svg'
import up from '../assets/desktop/up.svg';
import Footer from './section';
import night from '../assets/mobile/night.jpg';
import moon from '../assets/desktop/moon.svg';





function Day ({section, setSection,location,setLocation, more, setMore,handleClick, night, setNight}) {
    let today = new Date();

    let hours = addZero (today.getHours());
    let min = addZero (today.getMinutes())
  
    let  time :string = `${hours} : ${min}`
    function addZero (num : number){
      return num<10 ? `0${num}` :num
    }
    console.log(hours)
 

return(
    <div className="app">
     {!more == true ?
    <DayTime hours={hours}>
        <div className="main">
          <Quote/>
          <TimeZoneStyle>
          {hours > 12 || hours < 6 ? 
           <div className='sunmoon'>
                <img className="sun" src={sun} alt='sun'/>
                <p>GOOD MORNING</p>
            </div> 
            : 
            <div className='sunmoon'>
                <img className="sun" src={moon} alt='moon'/>
                <p>GOOD EVENING</p>
            </div>
            }
           
            <div className='clock'>
                {time}
            </div>
            
            <div className='location'>IN TBILISI GE</div>
            <div className="btnbox">
                <p className="moreless">MORE</p>
                <BtnStyle onClick={handleClick}><img src={down}/></BtnStyle>
            </div>
          </TimeZoneStyle>   
        </div>
    </DayTime>     
    :
    <DayTime hours={hours}>
        <div className="main">
          
          <TimeZoneStyle2>

                {hours > 12 || hours < 6 ? 
           <div className='sunmoon'>
                <img className="sun" src={sun} alt='sun'/>
                <p>GOOD MORNING</p>
            </div> 
            : 
            <div className='sunmoon'>
                <img className="sun" src={moon} alt='moon'/>
                <p>GOOD EVENING</p>
            </div>
            }
            <div className='clock'>
                {time}
            </div>
            
            <div className='location'>IN TBILISI GE</div>
            <div className="btnbox2">
                <p className="moreless">LESS</p>
                <BtnStyle onClick={handleClick}><img  src={up}/></BtnStyle>
            </div>
          </TimeZoneStyle2> 
          <Footer location={location} setLocation={setLocation} hours={hours}/>  
        </div>
    </DayTime>  

     }
         
          
       
  



    </div>
)
}


export default Day;


const  DayTime   = styled.div<any>`
    width:375px;
    height:667px;
    
    position:relative;
    background-color:#D8D8D8;
    background-blend-mode:multiply;
    border:1px solid black;
    top:0;
    left:0;
    background-image: url(${props => props.hours > 12 && props.hours < 6 ? night : day});
    background-repeat:no-repeat;
    background-size: 100% 100%;

     
   @media screen and (min-width:768px){
    width:100%;
    height:1024px;
    background-image: url(${props => props.hours > 12 && props.hours < 6 ? night : day});
    background-repeat:no-repeat;
    background-size: 768px 1024px;
    
   }
   
   @media screen and (min-width:1000px){
    width:100vw;
    height:800px;
    background-image: url(${props => props.hours > 12 && props.hours < 6 ? night : day});
    background-repeat:no-repeat;
    image-rendering: auto;
    background-size: 100% 800px;
    overflow-x:hidden;
    overflow-y:hidden;
   }
    `



const TimeZoneStyle = styled.div`
display:flex;
margin-top:355px;
margin-left:26px;


width:490px;
flex-direction: column;

@media screen and (min-width:768px){
   margin-top:520px;
   margin-left:64px;
}

@media screen and (min-width:1000px){
   margin-top:375px;
   margin-left:130px;
   width:100%;
}

@media screen and (min-width:1400px){
 
   margin-left:200px;
   
}
`
const TimeZoneStyle2 = styled.div`
display:flex;
margin-top:0;
margin-left:26px;



flex-direction: column;


@media screen and (min-width:768px){
   margin-top:115px;
   margin-left:64px;
}

@media screen and (min-width:1000px){
   margin-top:115px;
   margin-left:164px;
}
@media screen and (min-width:1000px){
   
   margin-left:200px;

}
`

const BtnStyle = styled.button`
width:32px;
height:32px;
background-color:rgba(48, 48, 48, 1);
border-radius:50%;
border:none;
margin-left:0px;
cursor:pointer;
display:flex;
align-items:center;
justify-content: center;

@media screen and (min-width:768px){
    width:40px;
    height:40px;

}




`
