import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupForm from './pages/Signupform'
import LoginForm from './pages/Loginform';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
