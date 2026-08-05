import React, { useState } from "react";
import styles from "../assets/EditProfile.module.css";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdLockOutline, MdOutlineNotificationsNone } from "react-icons/md";



const EditProfile = () => {


  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Edit Profile</h1>
      <p className={styles.pageSubtitle}>
        Manage your public information and how others see you on NotesHub.
      </p>

      {/* Main card */}
      <div className={styles.card}>
        {/* Profile picture */}
        <div className={`d-flex align-items-center ${styles.pictureRow}`}>
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarPlaceholder}>
              <BsPersonFillAdd />
            </div>
          </div>

          <div className="ms-4">
            <h2 className={styles.pictureTitle}>Profile Picture</h2>
            <p className={styles.pictureHint}>JPG, GIF or PNG. Max size of 2MB.</p>
            <div className="d-flex">
              <label htmlFor="profileUpload" className={styles.uploadBtn}>
                Upload
              </label>
              <input
                id="profileUpload"
                type="file"
                accept="image/png, image/jpeg, image/gif"
                className={styles.hiddenInput}
              />
              <button type="button" className={styles.removeBtn}>
                Remove
              </button>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Form fields */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="fullName" className={styles.fieldLabel}>
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              className={styles.textInput}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="email" className={styles.fieldLabel}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className={styles.textInput}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="phone" className={styles.fieldLabel}>
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              className={styles.textInput}
            />
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="jobTitle" className={styles.fieldLabel}>
              Job Title
            </label>
            <input
              id="jobTitle"
              type="text"
              className={styles.textInput}
            />
          </div>

          <div className="col-12">
            <label htmlFor="bio" className={styles.fieldLabel}>
              Bio
            </label>
            <textarea
              id="bio"
              className={styles.textarea}
              rows={4}
            ></textarea>
          </div>
        </div>

        <hr className={styles.divider} />

        {/* Actions */}
        <div className={`d-flex justify-content-end ${styles.actionsRow}`}>
          <button type="button" className={styles.cancelBtn}>
            Cancel
          </button>
          <button type="button" className={styles.saveBtn}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;