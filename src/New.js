import React, { useEffect, useState } from 'react'

function New() {
    const[users,setusers]=useState([]);
    useEffect(()=>{
        const fetchuser=async()=>{
            try{
                const response=await fetch("https://reqres.in/api/users")
                const result=response.json();
                setusers(result.data)
            }catch(error){
                console.log("error occured");
            }
        };
        fetchuser();
    },[])
  return (
    <div>
        <ul>
            {users.map((items)=>{
                <li >
                    <p>{items.email}</p>
                    <p>{items.first_name}</p>
                    <p>{items.last_name}</p>
                    <img src={items.avatar}/>
                </li>
            })}
        </ul>
      
    </div>
  )
}

export default New
