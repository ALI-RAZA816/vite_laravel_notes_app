import React, { useState, useRef } from "react";
import styles from "../assets/VerifyEmail.module.css";
import {Link} from 'react-router-dom';

const VerifyEmail = () => {
  
  return (
    <div className={`${styles.container} container-fluid`}>
      <div className={styles.formWrapper}>
        {/* Logo */}
        <div className={styles.logoRow}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <ellipse cx="12" cy="6" rx="7" ry="3" fill="#4F46E5" />
            <path
              d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6"
              fill="#4F46E5"
            />
            <path
              d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"
              fill="#4F46E5"
            />
          </svg>
          <h2 className={styles.logoText}>NotesHub</h2>
        </div>

        {/* Card */}
        <div className={styles.card}>
          <h1 className={styles.heading}>Verify your email</h1>
          <p className={styles.subheading}>
            We've sent a 6-digit code to your email address. Please enter it
            below to continue.
          </p>

          <form>
            {/* OTP inputs */}
            <div className={`d-flex justify-content-center mb-4 ${styles.otpRow}`}>
                <input
                  type="text"
                  inputMode="numeric"
                  className={styles.otpInput}
                />
            </div>

            {/* Submit */}
            <button type="submit" className={`btn w-100 ${styles.submitBtn}`}>
              Verify Code
            </button>
          </form>

          {/* Resend */}
          <p className={styles.resendText}>
            Didn't receive the code?{" "}
            <a href="#" className={styles.resendLink}>
              Resend
            </a>
          </p>

          <hr className={styles.divider} />

          {/* Back to login */}
          <Link to="/login" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M11 18l-6-6 6-6"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;