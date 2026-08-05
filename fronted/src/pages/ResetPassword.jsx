import React, { useState } from "react";
import styles from "../assets/ResetPassword.module.css";
import {Link} from "react-router-dom";


const ResetPassword = () => {

  return (
    <div className={`${styles.container} container-fluid`}>
      <div className={styles.formWrapper}>

        {/* Card */}
        <div className={styles.card}>
          <h1 className={styles.heading}>Set new password</h1>
          <p className={styles.subheading}>
            Your new password must be different from previous passwords.
          </p>

          <form >
            {/* New Password */}
            <div className="mb-4">
              <label htmlFor="newPassword" className={styles.label}>
                New Password
              </label>
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className={styles.input}
                  placeholder="Min. 8 characters"
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                >
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className={styles.input}
                  placeholder="Re-enter password"
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                >
                </button>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className={`btn w-100 ${styles.submitBtn}`}>
              Reset Password
            </button>
          </form>

          <hr className={styles.divider} />

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
      </div>
    </div>
  );
};

export default ResetPassword;