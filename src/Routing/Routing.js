import React from 'react'
import SignInForm from '../SignInForm/SignInForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInForm/>}/>
        <Route path='/SignUpForm' element={<SignUpForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing