import React, { useContext, useState } from "react";
import styles from "../assets/NoteModel.module.css";
import { AppContext } from "../context/AppContext";

export default function NoteModel() {
    const {showNoteModel, setNoteModel, notesType, allCategory, hideNote} = useContext(AppContext);
  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} card`} role="dialog" aria-modal="true">
        {/* Header */}
        <div className={`${styles.header} d-flex align-items-start justify-content-between`}>
          <div className="d-flex align-items-center">
            <div className={styles.iconBox}>
              <i className={`bi bi-pencil-square ${styles.icon}`}></i>
            </div>
            <div className="ms-3">
              <h2 className={styles.title}>{notesType === 'addbtn' ? "Create New Note" : "Edit Note"}</h2>
              <p className={styles.subtitle}>WORKSPACE &bull; NOTESHUB</p>
            </div>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            aria-label="Close"
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Body */}
        <div className={styles.body}>
          {/* Note Title */}
          <div className="mb-4">
            <label htmlFor="noteTitle" className={styles.label}>
              Note Title
            </label>
            <input
              id="noteTitle"
              type="text"
              className={`form-control ${styles.input}`}
              placeholder="What's on your mind?"
            />
          </div>

          {/* Category + Visual Inspiration */}
          <div className="row mb-4">
            <div className="col">
              <label htmlFor="category" className={styles.label}>
                Category
              </label>
              <select
                id="category"
                className={`form-select ${styles.select}`}
              >
                {allCategory.map(item=>{
                  return <option value={item.id}>{item.category_name}</option>
                })}
                
              </select>
            </div>
          </div>

          {/* Content */}
          <div className="mb-3">
            <label htmlFor="content" className={styles.label}>
              Content
            </label>
            <textarea
              id="content"
              className={`form-control ${styles.textarea}`}
              placeholder="Start typing your note here..."
            ></textarea>
          </div>
        </div>

        {/* Footer */}
        <div className={`${styles.footer} d-flex justify-content-end align-items-center`}>
          <button onClick={hideNote} type="button" className={styles.cancelBtn}>Cancel</button>
          {notesType === 'addbtn' ? <button type="button" className={styles.saveBtn} >
            Save Note
          </button>:
          <button type="button" className={styles.saveBtn} >
            Edit Note
          </button>}
        </div>
      </div>
    </div>
  );
}