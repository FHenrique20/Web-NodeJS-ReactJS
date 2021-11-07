
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  return (
    
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"></link>
        <h1>Contador de Pessoas</h1>
        <Count />
        
        
          
        
        
      </div>
    
  );
}


export default App;



function Count() {
  const [count, setCount] = useState(0);

  return (
    <div class="form-row text-center">
        <div class="col-12">
          <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} type="button" class="btn btn-success">+</button>
            <br></br>
            <button onClick={() => setCount(count + -1)} type="button" class="btn btn-danger">-</button>
        </div>   
            
        </div>
      </div>
    


  );
}



 
