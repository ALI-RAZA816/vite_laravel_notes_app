import React, { useContext, useState } from "react";
import styles from "../assets/CategoryModel.module.css";
import { AppContext } from "../context/AppContext";
import { RiDeleteBin6Line } from "react-icons/ri";
<RiDeleteBin6Line />


const CategoryModel = ({ onClose }) => {

   const { openModel, setopenModel} = useContext(AppContext);
    const hideModel = (event)=>{
        event.preventDefault();
        setopenModel(false);
    }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={`d-flex align-items-start justify-content-between ${styles.header}`}>
          <div>
            <h2 className={styles.title}>Manage Categories</h2>
            <p className={styles.subtitle}>Organize your thoughts with colors</p>
          </div>
          <button onClick={hideModel}
            type="button"
            className={styles.closeBtn}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#111827"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Create form */}
        <form className={styles.createBox}>
          <input
            type="text"
            className={styles.input}
            placeholder="Category Name"
          />
        <button type="submit" className={`btn ${styles.createBtn}`}>
            Create
        </button>
        </form>

        {/* Category list */}
        <ul className={`list-unstyled ${styles.categoryList}`}>
            <li className={`d-flex justify-content-between align-items-center ${styles.categoryItem}`}>
              <span>Personal</span><RiDeleteBin6Line style={{cursor:"pointer"}} className="fs-5" />
            </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryModel;