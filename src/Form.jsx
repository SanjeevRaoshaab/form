import React, { useState,useEffect } from 'react'
import "./Form.css";
function Form() {
    const data={name:'' , email:'',password:''}
    const [inputdata,setinputdata]=useState(data)
    const [flag,setflag]=useState(false)

    useEffect(()=>{
     console.log("Registration")
    },[flag])
     function handledata(e){
        setinputdata({...inputdata, [e.target.name]:e.target.value})
        console.log(inputdata)
     }
     function handlesubmit(e){
    e.preventDefault();
    if(!inputdata.name || !inputdata.email || !inputdata.password){
        alert("please fill all the fields")
    }else{
        setflag(true)
    }
     }
  return (
    <>
   <pre>{(flag)?<h2 className='content'>Hello {inputdata.name},You are registered successfully</h2>:''}</pre>
<div className="container">
      <form className="containe" onSubmit={handlesubmit}>
      <div className="header">
        <h2>Registration Form</h2>
      </div>
        <div className='form'>
            <input type="text" name="name" placeholder='Enter Your Name' value={inputdata.name} onChange={handledata}/>
        </div>
        <div className='form'>
            <input type="text" name="email" placeholder='Enter Your Email' value={inputdata.email} onChange={handledata}/>
        </div>
        <div className='form'>
            <input type="text" name="password" placeholder='Enter Your password' value={inputdata.password} onChange={handledata}/>
        </div>
        <div>
            <button className='btn' type='submit'>Submit</button>
        </div>
        
    </form>
    </div>
    </>
  )
}

export default Form