import React, { useState } from 'react'
import './Count.scss'
/*
if you need to define any function then everything ie,functions should be written above the return statement below the return acts as a body here useState is nothing but setting current value and future value 

*/ 
const  Count=()=> {
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count-1);
    };

  return (
    <div>
      <h1> Count:{count}</h1>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decreasse</button>
    </div>
  )
}

export default Count
