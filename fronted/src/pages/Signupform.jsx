import React, { useState } from "react";
import styles from "../assets/SignForm.module.css";
import {Link, useNavigate} from 'react-router-dom';
import {apiUrl} from '../components/Https';

const SignupForm = () => {

    const navigate = useNavigate();

    const [formErr, setFormmErr] = useState({
        name:'',
        email:'',
        password:'',
        confirm_password:''
    });
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        passoword:'',
        confirm_password:''
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
        const res = await fetch(`${apiUrl}/account`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then(resp=> resp.json())
        .then((result=>{
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
                setFormData({ name: '', email: '', password: '', confirm_password: '' });
                navigate('/login');
            }
        }));
    }
 
  return (
    <div className="container-fluid">
        <div className="row border vh-100 d-flex justify-content-center align-items-center">
            <div className={`${styles.card} ${styles.formWrapper}`}>
                {/* Logo */}
                <div className={`d-flex align-items-center mb-2 ${styles.logoRow}`}>
                <div className={styles.logoIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#4F46E5" />
                    <path d="M7 8h10M7 12h10M7 16h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <span className={styles.logoText}>NotesHub</span>
                </div>

                {/* Heading */}
                <h1 className={styles.heading}>Join our workspace</h1>
                <p className={styles.subheading}> Start capturing your thoughts with clarity and speed. </p> 
                {/* Form */}
                <form onSubmit={submitData}>
                {/* Full Name */}
                <div className="mb-4">
                    <label htmlFor="fullName" className={styles.label}> Full Name </label>
                    <div className={styles.inputGroup}>
                        <span className={styles.inputIcon}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="8" r="4" stroke="#6B7280" strokeWidth="1.8" />
                            <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </span>
                        <input type="text" onChange={handleChange} value={formData.name} id="fullName" name="name" className={styles.input} />
                    </div>
                    <span className="text-danger">{formErr.name}</span>
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className={styles.label}> Email Address </label>
                    <div className={styles.inputGroup}>
                        <span className={styles.inputIcon}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#6B7280" strokeWidth="1.8" />
                            <path d="M3 7l9 6 9-6"  stroke="#6B7280" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <input type="email" onChange={handleChange} value={formData.email} id="email" name="email" className={styles.input} placeholder="name@company.com" />
                    </div>
                    <span className="text-danger">{formErr.email}</span>
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className={styles.label}> Password </label>
                    <div className={styles.inputGroup}>
                        <span className={styles.inputIcon}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <rect x="5"  y="11" width="14" height="9" rx="2" stroke="#6B7280" strokeWidth="1.8" />
                            <path d="M8 11V8a4 4 0 018 0v3" stroke="#6B7280" strokeWidth="1.8" />
                            </svg>
                        </span>
                        <input type="password" onChange={handleChange} value={formData.password} id="password" name="password" className={styles.input}  placeholder="••••••••" />
                    </div>
                    <span className="text-danger">{formErr.password}</span>
                </div>

                {/* Confirm Password */}
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className={styles.label}> Confirm Password </label>
                    <div className={styles.inputGroup}>
                    <span className={styles.inputIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <rect  x="5"  y="11"
                            width="14"
                            height="9"
                            rx="2"
                            stroke="#6B7280"
                            strokeWidth="1.8"
                        />
                        <path
                            d="M8 11V8a4 4 0 017.8-1.3"
                            stroke="#6B7280"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                        </svg>
                    </span>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirm_password"
                        onChange={handleChange}
                        value={formData.confirm_password}
                        className={styles.input}
                        placeholder="••••••••"
                    />
                    </div>
                    <span className="text-danger">{formErr.confirm_password}</span>
                </div>
                {/* Submit */}
                <button type="submit" className={`btn w-100 ${styles.submitBtn}`}>
                    Create Account
                </button>
                </form>

                {/* Login link */}
                <p className={styles.loginText}>
                Already have an account?{" "}
                <Link to="/login" className={styles.link}> Login </Link>
                </p>
            </div>
        </div>
    </div>
  );
};

export default SignupForm;