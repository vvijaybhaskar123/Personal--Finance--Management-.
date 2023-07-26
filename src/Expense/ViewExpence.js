import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import '../Expense/ViewExpence.css';

const ViewExpence = () => {
  const [fetcheData, setFechedData] = useState([]);
  const navigate = useNavigate();
  const [searchByName, setSearchByName] = useState('');
  const [searchByDate, setSearchByDate] = useState('');

  useEffect(() => {
    async function fetching() {
      const response = JSON.parse(localStorage.getItem('createExpenceData')) || [];
      setFechedData(response);
      console.log(response);
    }
    fetching();
  }, []);

  
  const serchNameHandler = (e) => {
    setSearchByName(e.target.value);
    console.log(searchByName);
  };

  const searchDateHandler = (e) => {
    setSearchByDate(e.target.value);
    console.log(searchByDate);
  };
const UpateHndler=(id)=>{
  navigate(`/UpdtateExpence/${id}`);
}
  const NaviageToCreateExpence = () => {
    navigate('/CreateExpence');
  };
  
  const  deleteTheData=(id)=>{
    const data = JSON.parse(localStorage.getItem("createExpenceData"))
    data.splice(id,1)
    localStorage.setItem("createExpenceData",JSON.stringify(data))
    setFechedData(data)
  }
  let result = fetcheData;
  
  if (searchByName) {
    result = result.filter((item) => {
      const { nameValue } = item;
      const searchByNamelowecase = searchByName.toLowerCase();
      const nameValuelowercase = nameValue.toLowerCase();
      return nameValuelowercase.includes(searchByNamelowecase);
    });
  }
  
  if (searchByDate) {
    result = result.filter((item) => {
      const { dateOfExpenceValue } = item;
      return new Date(dateOfExpenceValue).getTime() >= new Date(searchByDate).getTime();
    });
  }

  const loggedInUser = JSON.parse(localStorage.getItem('loginedDetails'));
  const loggedInUserEmail = loggedInUser?.EmailValue;


  const logoutHandler=()=>{
    navigate('/')
  }


 

  return (
    <div>
      <div className="view-container">
        <h1>My Expence Manager</h1>
        <input
          type="date"
          placeholder="Filter By Date Of Expence"
          value={searchByDate}
          onChange={searchDateHandler}
        />
        <input
          placeholder="Search Expence by Name"
          value={searchByName}
          onChange={serchNameHandler}
        />
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
          <th>Delete</th>
        </tr>
        {result.map((item,index) => {
          const {
            nameValue,
            categoryValue,
            dateOfExpenceValue,
            desciptionValue,
            expenenceAmoutValue,
            lastUpdated,
            emailValue
          } = item;
          return (
            <tr>
              <td>{nameValue}</td>
              <td>{categoryValue}</td>
              <td>{dateOfExpenceValue}</td>
              <td>{desciptionValue}</td>
              <td>{expenenceAmoutValue}</td>
              <td>{lastUpdated ? moment(lastUpdated).fromNow() : ''}</td>
              <td>{emailValue === loggedInUserEmail ? 'me' : emailValue}</td>
              <td>
              <button onClick={()=>{UpateHndler(index)}}>update</button>
              <button onClick={()=>{
                deleteTheData(index)
              }}>delete</button>
                </td>
            </tr>
          );
        })}
      </table>
      <div class="parent">
      <button className='btn' onClick={logoutHandler}>Log Out</button>
      </div>
    </div>
  );
};

export default ViewExpence;
