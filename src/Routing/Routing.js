import React from 'react'
import SignInForm from '../SignInForm/SignInForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import ViewExpence from '../Expense/ViewExpence'
import CreateExpence from '../CreateExpence/CreateExpence'
import UpdtateExpence from '../Edit/UpdtateExpence'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInForm/>}/>
        <Route path='/SignUpForm' element={<SignUpForm/>}/>
        <Route path='/ViewExpence' element={<ViewExpence/>}/>
        <Route path='/CreateExpence' element={<CreateExpence/>}/>
        <Route path='/UpdtateExpence/:id' element={<UpdtateExpence/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing