import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [num,setNum]=useState(0)
  const [num2,setNum2]=useState(0)
  const [resultado,setResultado]=useState(0)
  return (
    
    <div>
        <h1>Multiplicador de números</h1>
        
        
        {num1(num,setNum)}
        {Num2(num2,setNum2)}
        {calcular(num,num2,setResultado)}
        {fresultado(resultado)} 
        
        
    </div>
    
  );
}


export default App;


const num1=(num,snum)=> {
  return(
    <div>
      <input type="text" value ={num} onChange={(e)=>{snum(e.target.value)}}  />
    </div>
  )
}

const Num2=(num2,snum2)=> {
  return(
    <div>
      <input type="text" value ={num2} onChange={(e)=>{snum2(e.target.value)}}  />
    </div>
  )
}

const calcular=(num,num2,sr)=>{
  const calc=()=>{
    sr(num*num2)
  }
  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

const fresultado=(r)=>{
    return(
      <div>
        <p>Resultado: {r} </p>
      </div>
    )
}

