import React from 'react'
import { Link } from 'react-router-dom'
import  '../SignUpForm/SignUpForm.css'
import { useState } from 'react'

const SignUpForm = () => {
  const [EmailValue,setEmailValue]=useState('')
  
  const [PasswordValue,setPasswordValue]=useState('')
  const [conformPasswordValue ,setconformPasswordValue]=useState('')
  const [EmailError,setEmailError]=useState(true)
  const [passwordError,setPasswordError]=useState(true)
  const [conformpasswordError,setconformPasswordError]=useState(true)
  const [data,setData]=useState([])

  const EmailChangeHandler =(e)=>{
    setEmailValue(e.target.value)
    if(e.target.value ===''){
      setEmailError(false)
    }
    else{
      setEmailError(true)
    }

  }
  const PasswordChangeHandler =(e)=>{
  
    setPasswordValue(e.target.value)
    if(e.target.value ===''){
      setPasswordError(false)
    }
    else{
      setPasswordError(true)
    }

  }
  const ConformPasswordChangeHandler =(e)=>{
  
    setconformPasswordValue(e.target.value)

    if(e.target.value === PasswordValue){
      setconformPasswordError(true)
    }
    else{
      setconformPasswordError(false)
    }
    
  }
  const handleSubmitHandler=(e)=>{
    e.preventDefault()

    if(EmailValue ==="" || PasswordValue ==="" || conformPasswordValue ===""){
      alert("please Fill the form Properly ")
    }
    else{
      const setTheDate={
        EmailValue:EmailValue,
        PasswordValue:PasswordValue,
        conformPasswordValue:conformPasswordValue
      }
     const storedData = JSON.parse(localStorage.getItem("Data")) || [];
    storedData.push(setTheDate);
    localStorage.setItem("Data", JSON.stringify(storedData));
    }

    setEmailValue('')
    setPasswordValue('')
    setconformPasswordValue('')
    
  }
  return (
    <div>
    <div className='container'>
      <form className='Form-container'>
        <label>Email</label>
        <input  type='text' placeholder='Enter Your Email' name='email' value={EmailValue} onChange={EmailChangeHandler}/>
        <p className='error'> {EmailError ? '':'Enter the Value'}</p>
        <label>Password</label>
        <input type='password' placeholder='Enter your password' name='password'value={PasswordValue} onChange={PasswordChangeHandler}/>
        <p className='error'> {passwordError ? '':'Enter the Value'}</p>
        <label>Conform Password</label>
        <input  type='password' placeholder='Enter conform password' name='conform Password' value={conformPasswordValue} onChange={ConformPasswordChangeHandler}/>
        <p className='error'> {conformpasswordError ? " ":'Enter correct password'}</p>
       <input type='submit' className='submit' onClick={handleSubmitHandler}/>
      </form>
    </div>
    <Link to='/'><h1 className='SignIn'>Sign In</h1></Link>
    </div>
  )
}

export default SignUpForm
