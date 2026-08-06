import React, { useState } from "react";
import styles from "../assets/LoginForm.module.css";
import { Link, useNavigate} from 'react-router-dom';
import { apiUrl } from "../components/Https";

const LoginForm = () => {

  const navigate =  useNavigate();
  const [formErr, setFormmErr] = useState({
    email:'',
    password:''
  });

  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const handleChange = (event)=>{
    const {name, value} = event.target;
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }));
  }

  const submitData = async (event)=>{
    event.preventDefault();
    const res = await fetch(`${apiUrl}/login`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then(resp=> resp.json())
    .then((result)=> {
      if(result.status === 400){
        setFormmErr((prev)=>({
            ...prev,
            [result.type]:result.message
        }));
      }else if(result.status === 409){
         setFormmErr((prev)=>({
            ...prev,
            [result.type]:result.message
        }));
      }
      else if(result.status === 200){
        localStorage.setItem('token', result.token);
        localStorage.setItem('role', result.role);
        setFormData({email: '', password: ''});
        navigate('/dashboard/notes');
      }
    })
  }

  return (
    <div className={`container-fluid vh-100 d-flex justify-content-center align-items-center`}>
      <div className={styles.formWrapper}>
        {/* Logo */}
        <div className={`d-flex align-items-center justify-content-center mb-3 ${styles.logoRow}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#4F46E5" />
            <path
              d="M7 8h10M7 12h10M7 16h6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className={styles.logoText}>NotesHub</span>
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>NotesHub</h1>
        <p className={styles.subheading}>Focus your thoughts, organize your world.</p>

        {/* Card */}
        <div className={styles.card}>
          <form onSubmit={submitData}>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="#6B7280"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M3 7l9 6 9-6"
                      stroke="#6B7280"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="name@company.com"
                />
              </div>
              <span className="text-danger">{formErr.email}</span>
            </div>

            {/* Password */}
            <div className="mb-3">
              <div className={`d-flex align-items-center justify-content-between ${styles.passwordRow}`}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <Link to="/forgottonpassword" className={styles.forgotLink}>
                  Forgot password?
                </Link>
              </div>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="5"
                      y="11"
                      width="14"
                      height="9"
                      rx="2"
                      stroke="#6B7280"
                      strokeWidth="1.8"
                    />
                    <path d="M8 11V8a4 4 0 018 0v3" stroke="#6B7280" strokeWidth="1.8" />
                  </svg>
                </span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  className={styles.input}
                  placeholder="••••••••"
                />
              </div>
              <span className="text-danger">{formErr.password}</span>
            </div>

            {/* Submit */}
            <button type="submit" className={`btn w-100 d-flex align-items-center justify-content-center ${styles.submitBtn}`}>
              Sign In
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={styles.arrowIcon}>
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Register link */}
        <p className={styles.registerText}>
          Don't have an account?{" "}
          <Link to="/" className={styles.link}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;