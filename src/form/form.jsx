import React, { useState } from 'react'
import './form.css';
import meme from '../memebackend/meme';

function Form() {
  const [Sak,Setsak]=useState('');

  const getrandomn=()=>{
      const memeArray=meme.data.memes;
      const randomno=Math.floor(Math.random()* memeArray.length)
       Setsak(memeArray[randomno].url)
      


  }

  
  return (
    <div>

    <div className='parents-class'>
    
      
        <input className='type..' type='text' placeholder='first' />
        <input className='type..' type='text' placeholder='second'/>    
        <button className='clickme' onClick={getrandomn}>Press Me To Generate Meme</button>
       
    </div>
    <p style={{zIndex:100}}>{Sak}</p>


    </div>
    
  
     
   
 
  )
}

export default Form