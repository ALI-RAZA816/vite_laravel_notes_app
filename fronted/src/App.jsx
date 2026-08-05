import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupForm from './pages/Signupform'
import LoginForm from './pages/Loginform';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/Verifyemail';
import ResetPassword from './pages/ResetPassword';
import Sidebar from './components/Sidebar';
import NotesDashboard from './pages/NotesDashboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/forgottonpassword" element={<ForgotPassword/>}/>
          <Route path="/verifyemail" element={<VerifyEmail/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/dashboard" element={<Sidebar/>}>
            <Route path='notes' element={<NotesDashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
