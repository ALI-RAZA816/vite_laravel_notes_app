import {Link} from 'react-router-dom'
import React, { useState } from "react";
import styles from "../assets/SettingsPage.module.css";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineEdit } from "react-icons/md";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { MdOutlineFileDownload, MdOutlineDeleteOutline } from "react-icons/md";


const SettingsPage = () => {

  return (
    <div className={styles.pageWrapper}>

      {/* Page heading */}
      <div className={styles.headingBlock}>
        <h1 className={styles.pageTitle}>Settings</h1>
        <p className={styles.pageSubtitle}>
          Manage your account, preferences, and workspace environments.
        </p>
      </div>

      {/* Account Profile */}
      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Account Profile</h2>
        <div className={`d-flex align-items-center justify-content-between ${styles.profileRow}`}>
          <div className="d-flex align-items-center">
            <div className={styles.profilePhotoWrapper}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
                alt="Alex Thompson"
                className={styles.profilePhoto}
              />
              <label htmlFor="profile" className={styles.editPhotoBtn}>
                <MdOutlineEdit />
                  <input type="file" id='profile' hidden />
              </label>
            </div>
            <div className="ms-3">
              <div className={styles.profileName}>Alex Thompson</div>
              <div className={styles.profileEmail}>alex.thompson@example.com</div>
            </div>
          </div>
          <Link to="/forgottonpassword">
            <button type="button" className={styles.changePasswordBtn}>
              Change Password
            </button>
          </Link>
        </div>
      </section>

      {/* Workspace */}
      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Workspace</h2>


        <div className={`d-flex align-items-center justify-content-between ${styles.workspaceRow} ${styles.dangerRow}`}>
          <div className="d-flex align-items-center">
            <MdOutlineDeleteOutline className={`${styles.workspaceIcon} ${styles.dangerIcon}`} />
            <div className="ms-3">
              <div className={`${styles.workspaceLabel} ${styles.dangerLabel}`}>Delete Account</div>
              <div className={styles.workspaceDesc}>
                Permanently remove your account and all data. This action is irreversible.
              </div>
            </div>
          </div>
          <button type="button" className={styles.deleteBtn}>
            Delete
          </button>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;