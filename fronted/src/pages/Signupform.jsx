import React, { useState } from "react";
import styles from "../assets/SignForm.module.css";
import {Link} from 'react-router-dom';

const SignupForm = () => {

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
                <form>
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
                    <input type="text" id="fullName" name="fullName" className={styles.input} />
                    </div>
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
                    <input type="email" id="email" name="email" className={styles.input} placeholder="name@company.com" />
                    </div>
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
                    <input type="password" id="password" name="password" className={styles.input}  placeholder="••••••••" />
                    </div>
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
                        name="confirmPassword"
                        className={styles.input}
                        placeholder="••••••••"
                    />
                    </div>
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