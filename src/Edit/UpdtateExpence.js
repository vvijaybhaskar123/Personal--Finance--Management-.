


import React from 'react'

import { useParams } from 'react-router-dom';
import  '../Edit/UpdtateExpence.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdtateExpence  = () => {

    const { id } = useParams();
  const naviagte=useNavigate()
  const data = JSON.parse(localStorage.getItem('createExpenceData'));
  const item = data[id];
  console.log(item)

  const [emailValue, setEmail] = useState(item?.emailValue || '');
  const [nameValue, setName] = useState(item?.nameValue || '');
  const [desciptionValue, setdesciption] = useState(item?.desciptionValue || '');
  const [categoryValue, seCategory] = useState(item?.categoryValue || '');
  const [dateOfExpenceValue, setdateOfExpence] = useState(item?.dateOfExpenceValue || '');
  const [expenenceAmoutValue, setexpenenceAmout] = useState(item?.expenenceAmoutValue || '');

  const nameHandler=(e)=>{
    setName(e.target.value)
  }
  const descriptionHandler=(e)=>{
    setdesciption(e.target.value)
  }
  const categoryHandler=(e)=>{
    seCategory(e.target.value)
  }
  const dateOfExpenceHandler=(e)=>{
    setdateOfExpence(e.target.value)
  }
  const expenenceAmoutHandler=(e)=>{
    setexpenenceAmout(e.target.value)
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(nameValue==="" || desciptionValue==="" ||categoryValue===""||dateOfExpenceValue===""||expenenceAmoutValue===""){
      alert('Please Fill details')
    }
    else{
      const createExpenceData={
        nameValue:nameValue,
        desciptionValue:desciptionValue,
        categoryValue:categoryValue,
        dateOfExpenceValue:dateOfExpenceValue,
        expenenceAmoutValue:expenenceAmoutValue,
        emailValue: emailValue,
        lastUpdated: new Date().toISOString()
      }
      const storedData= JSON.parse(localStorage.getItem("createExpenceData"))|| []
      storedData.splice(id,1,createExpenceData)
      localStorage.setItem('createExpenceData',JSON.stringify(storedData))

      naviagte('/ViewExpence')
    }
  
   setName('')
   setdesciption('')
   seCategory('')
   setdateOfExpence('')
   setexpenenceAmout('')
   
  }
 const NaviagetToExpence =()=>{
  naviagte('/ViewExpence')
 }
  return (
    <div >
      <div>
        <h1>Edit Expense</h1>
      </div>
      <div>
        <form className='create-formExpence-container'>
          <label>Name</label>
          <input type="text" placeholder='Name of The Expence' name='name' value={nameValue}  onChange={nameHandler}/>
          <label>Email</label>
          <input type="email" placeholder="Email" name="email" value={emailValue} onChange={e => setEmail(e.target.value)} />
          <label>Description</label>
          <input type='text' placeholder='Describe The Expence' name='desciption'  value={desciptionValue}  onChange={descriptionHandler}/>
          <label> Category</label>
          <select  value={categoryValue} onChange={categoryHandler}>
            <option value="Health">Health</option>
            <option value="Electronics">Electronics</option>
            <option value="Travel">Travel</option>
            <option value="Education">Education</option>
            <option value="Books">Books</option>
            <option value="Others">Others</option>
          </select>
          <label>Date Of Expence</label>
          <input type='date' placeholder='Date Of Expence' name='dateOfExpence'  value={dateOfExpenceValue}   onChange={dateOfExpenceHandler}/>
          <label>Expence Amount</label>
          <input type='number' placeholder='Expence Amount In Inr' name='expenenceAmout'  value={expenenceAmoutValue}  onChange={expenenceAmoutHandler} />
          
        </form>
        <div className='cancel-create'>
        <button className='cancel' onClick={NaviagetToExpence}>Cancel</button>
          <button className='Create' onClick={handleSubmit}>Create</button>
          </div>
      </div>
    </div>
  )
}

export default UpdtateExpence
