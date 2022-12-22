import styled from 'styled-components';
import refresh from '../assets/desktop/refresh.svg';
import axios from 'axios';
import {useState, useEffect} from 'react';



function Quote(){

  const  [content,setContent]   = useState ("")
  const [authors,setAuthors]  = useState("")


  useEffect(()=>{
    let requestQuotes  = async () =>{

        let response = await axios.get('https://api.quotable.io/random?minLength=100&maxLength=200')
           let quotes =   response.data.content
           let authors = response.data.author 
                
                setContent (quotes)
                setAuthors (authors)
                
         } ;
        
         requestQuotes();
},[])
    
 
  const handleClick =() =>{
    window.location.reload()
  }



    return(
      <> 
        <QuoteStyle>
          {content}
        </QuoteStyle>
        <button onClick={handleClick}> <img className='refresh'  src={refresh} alt='refresh'/></button>
        <h3>{authors}</h3>
      </>    
    )
}
export default Quote;

const QuoteStyle= styled.div`
    
  width:290px;
  height:66px;
  top:32px;
  position:absolute;
  left:26px;
 
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
   display: flex;
  align-items: flex-end;
color:#FFFF;

     
@media screen and (min-width:768px){
    width:70%;
    height:84px;
    font-family: 'Inter';
    font-style: normal;
    font-size: 18px;
    line-height: 28px;
       left:64px;
    top:80px;
    text-align:left;

  }  

    @media screen and (min-width:1000px){
      
      width:45%;
      position:relative;
       left:130px;
      
      top:56px;
   
   
}
`






