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
import Header from './components/Header';
import Favorite from './pages/Favorite';
import SingleNote from './pages/SingleNote';
import UserManagement from './pages/UserManagement';
import SettingsPage from './pages/SettingsPage';
import EditProfile from './pages/EditProfile';

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
            <Route path='notes' element={<Header/>}>
              <Route index element={<NotesDashboard/>}/>
              <Route path='singlenote' element={<SingleNote/>}/>
            </Route>
            <Route path='favourite' element={<Header/>}>
              <Route index element={<Favorite/>}/>
            </Route>
            <Route path='users' element={<Header/>}>
              <Route index element={<UserManagement/>}/>
              <Route path='edituser' element={<EditProfile/>}/>
            </Route>
            <Route path='setting' element={<Header/>}>
              <Route index element={<SettingsPage/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
