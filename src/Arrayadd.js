import React, { useState } from 'react'


const Arrayadd = () => {
    const [inputvalue,setInputValue]=useState("");
const [submittedValue,setsubmittedValue]=useState([""]);

const handleSubmit = () =>{
   setsubmittedValue([...submittedValue,inputvalue]);
    setInputValue(""); 
}
  return (
    <div>
       <input
       type='text'
       value={inputvalue}
       onChange={(e)=>setInputValue(e.target.value)}
       
       />
       <button onClick={handleSubmit}>Add</button>
       <ul>
        {submittedValue.map((items)=>{
            <li >{items}</li>
        })}
        </ul>      
    </div>
  )
}


export default Arrayadd
