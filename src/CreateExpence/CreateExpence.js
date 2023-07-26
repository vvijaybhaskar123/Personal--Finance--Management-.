import React from 'react'
import '../CreateExpence/CreateExpence.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateExpence = () => {
  const naviagte=useNavigate()
  const [nameValue,setName]=useState('')
  const [desciptionValue,setdesciption]=useState('')
  const [categoryValue,seCategory]=useState('')
  const [dateOfExpenceValue,setdateOfExpence]=useState('')
  const [expenenceAmoutValue,setexpenenceAmout]=useState('')

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
        expenenceAmoutValue:expenenceAmoutValue
      }
      const storedData= JSON.parse(localStorage.getItem("createExpenceData"))|| []
      storedData.push(createExpenceData)
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
        <h1>Create New Expense</h1>
      </div>
      <div>
        <form className='create-formExpence-container'>
          <label>Name</label>
          <input type="text" placeholder='Name of The Expence' name='name' value={nameValue}  onChange={nameHandler}/>
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

export default CreateExpence
