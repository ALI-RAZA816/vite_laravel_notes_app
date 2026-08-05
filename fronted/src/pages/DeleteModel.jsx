import React, { useContext } from "react";
import styles from "../assets/DeleteModel.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { AppContext } from "../context/AppContext";

export default function DeleteModel() {
  const {hideDelete} = useContext(AppContext)
  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} card text-center`} role="dialog" aria-modal="true">
        <div className={styles.iconBox}>
          <RiDeleteBinLine className={`${styles.icon}`}/>
        </div>

        <h2 className={styles.title}>Delete Note</h2>

        <p className={styles.message}>
          Are you sure you want to delete this note?
          <br />
          This action cannot be undone.
        </p>

        <div className={`d-flex ${styles.actions}`}>
          <button  onClick={hideDelete} type="button" className={styles.cancelBtn} >
            Cancel
          </button>
          <button type="button" className={styles.deleteBtn} >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}