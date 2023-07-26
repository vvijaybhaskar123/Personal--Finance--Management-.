import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Expense/ViewExpence.css'
const ViewExpence = () => {
  const [fetcheData,setFechedData]=useState([])
  const navigate=useNavigate()
  useEffect(() => {
    async function fetching() {
      const response = await JSON.parse(localStorage.getItem("createExpenceData"));
      setFechedData(response)
      console.log(response)
    }
    fetching();
  },[]);
  
    const NaviageToCreateExpence=()=>{
      navigate('/CreateExpence')
    }
  
  return (
    <div>
      <div className='view-container'>
        <h1>My Expence Manager</h1>
        <input placeholder='Filter By Date Of Expence'/>
        <input placeholder='Search Expence by Name'/>
        <button onClick={NaviageToCreateExpence}>New Expence</button>
      </div>
    <table>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Date of Expense</th>
        <th>Description</th>
        <th>Expense Amount</th>
        <th>Updated at</th>
        <th>Created by</th>
       <th></th>
      </tr>
      {fetcheData.map((item) => {
        const { nameValue, categoryValue, dateOfExpenceValue, desciptionValue, expenenceAmoutValue } = item;
        return (
          <tr>
            <td>{nameValue}</td>
            <td>{categoryValue}</td>
            <td>{dateOfExpenceValue}</td>
            <td>{desciptionValue}</td>
            <td>{expenenceAmoutValue}</td>
          </tr>
        );
      })}
    </table>
    </div>
  );
  
}

export default ViewExpence
