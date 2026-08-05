import React, { useState } from "react";
import styles from "../assets/ForgotPassword.module.css";
import {Link} from 'react-router-dom';

const ForgotPassword = () => {

  return (
    <div className={`${styles.container} container-fluid`}>
      <div className={styles.formWrapper}>
        {/* Logo */}
        <div className={styles.logoBox}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="#4F46E5" />
            <path
              d="M7 8h10M7 12h10M7 16h6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className={styles.logoText}>
            Notes<span className={styles.logoTextBold}>Hub</span>
          </span>
        </div>

        {/* Card */}
        <div className={styles.card}>
          <h1 className={styles.heading}>Forgot Password</h1>
          <p className={styles.subheading}>
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          <form >
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
                  placeholder="name@example.com"
                />
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className={`btn w-100 ${styles.submitBtn}`}>
              Send Reset Link
            </button>
          </form>

          {/* Divider */}
          <div className={`d-flex align-items-center my-4 ${styles.dividerRow}`}>
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerText}>OR</span>
            <span className={styles.dividerLine}></span>
          </div>

          {/* Back to login */}
          <Link to="/login" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M11 18l-6-6 6-6"
                stroke="#4F46E5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Login
          </Link>
        </div>

        {/* Help text */}
        <p className={styles.helpText}>
          Need help? <span className={styles.helpLink}>Contact Support</span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;