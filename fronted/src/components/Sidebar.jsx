import React, { useContext, useState } from "react";
import styles from "../assets/Sidebar.module.css";
import { CgNotes } from "react-icons/cg";
import { MdOutlineStarOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineNewLabel } from "react-icons/md";
import{Link, Outlet} from 'react-router-dom'
import CategoryModel from "../pages/CategoryModel";
import {AppContext} from "../context/AppContext";

const Sidebar = () => {

    const { openModel, setopenModel} = useContext(AppContext);
    const showModel = (event)=>{
        event.preventDefault();
        setopenModel(true);
    }

  return (
    <>
    {openModel && <CategoryModel/>}
    <div className="container-fluid p-0">
        <div className="row">
            <div className="col-2 p-0">
                <div className={styles.sidebar}>
                    {/* Personal workspace label */}
                    <p className={styles.sectionLabel}>Personal Workspace</p>
                    {/* Nav items */}
                    <ul className={`list-unstyled ${styles.navList}`}>
                        <li>
                            <a href="#" className="text-decoration-none"><button type="button" className={`d-flex btn align-items-center w-100 ${styles.button}`}><CgNotes className="me-2"/><span>All Notes</span></button></a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none"><button type="button" className={`d-flex btn align-items-center w-100 ${styles.button}`}><MdOutlineStarOutline className="fs-5 me-2" /><span>Favorite</span></button></a>
                        </li>
                        <li>
                            <a href="#" onClick={showModel} className="text-decoration-none"><button type="button" className={`d-flex btn align-items-center w-100 ${styles.button} `}><MdOutlineNewLabel className="me-2" /><span>Add Category</span></button></a>
                        </li>
                    </ul>
                    {/* Bottom links */}
                    <div className={styles.bottomSection}>
                        <button type="button" className={`d-flex align-items-center w-100 ${styles.bottomItem}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                            <path
                            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            />
                        </svg>
                        Settings
                        </button>
                        <button type="button" className={`d-flex align-items-center w-100 ${styles.bottomItem}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                            <path
                            d="M9.5 9a2.5 2.5 0 015 0c0 1.5-2 1.8-2 3.3"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            />
                            <circle cx="12" cy="16.5" r="0.9" fill="currentColor" />
                        </svg>
                        Help
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-10"><Outlet/></div>
        </div>
    </div>
    </>
  );
};

export default Sidebar;