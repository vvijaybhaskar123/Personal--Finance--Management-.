import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../SignInForm/SignInForm.css'


const SignInForm = () => {
  const navigate=useNavigate()
  const [enteredEmail,setEmailValue]=useState('')
  const [enteredPassword,setPasswordValue]=useState('')
  const [EmailError,setEmailError]=useState(true)
  const [passwordError,setPasswordError]=useState(true)

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
  const submitHandler = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("Data")) || [];

    const result = data.filter((item) => {
      const { EmailValue, PasswordValue } = item;
      return EmailValue === enteredEmail && PasswordValue === enteredPassword;
    });
    console.log(result)

    if (result.length > 0) {
      localStorage.setItem('loginedDetails', JSON.stringify(result[0]));
      navigate('/ViewExpence')
    } else {
      alert("Invalid email or password");
    }
    setEmailValue("");
    setPasswordValue("");
  };
  return (
    <div>
    <div className='containe'>
      <form className='Form-containe'>
        <label>Email</label>
        <input  type='text' placeholder='Enter Your Email' name='email' value={enteredEmail} onChange={EmailChangeHandler}/>
        <p className='erro'> {EmailError ? '':'Enter the Value'}</p>
        <label>Password</label>
        <input type='password' placeholder='Enter your password' name='password' value={enteredPassword} onChange={PasswordChangeHandler}/>
        <p className='erro'> {passwordError ? '':'Enter the Value'}</p>
       <input type='submit' className='submi' onClick={submitHandler}/>
      </form>
    </div>
    <Link   to='/SignUpForm'><h3 className="signup">Dont Have Account ? Sign Up</h3></Link>
    </div>
  )
}

export default SignInForm
