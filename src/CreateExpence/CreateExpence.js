import React from 'react'
import '../CreateExpence/CreateExpence.css'
const CreateExpence = () => {
  return (
    <div >
      <div>
        <h1>Create New Expense</h1>
      </div>
      <div>
        <form className='create-formExpence-container'>
          <label>Name</label>
          <input type="text" placeholder='Name of The Expence' />
          <label>Description</label>
          <input type='text' placeholder='Describe The Expence' />
          <label> Category</label>
          <select>
            <option value="Health">Health</option>
            <option value="Electronics">Electronics</option>
            <option value="Travel">Travel</option>
            <option value="Education">Education</option>
            <option value="Books">Books</option>
            <option value="Others">Others</option>
          </select>
          <label>Date Of Expence</label>
          <input type='datetime-local' placeholder='Date Of Expence' />
          <label>Expence Amount</label>
          <input type='number' placeholder='Expence Amount In Inr' />
          
        </form>
        <div className='cancel-create'>
        <button className='cancel'>Cancel</button>
          <button className='Create'>Create</button>
          </div>
      </div>
    </div>
  )
}

export default CreateExpence
