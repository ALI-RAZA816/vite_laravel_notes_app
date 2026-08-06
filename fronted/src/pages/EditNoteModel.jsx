import React, { useContext, useState } from "react";
import styles from "../assets/NoteModel.module.css";
import { AppContext } from "../context/AppContext";
import { apiUrl } from "../components/Https";

export default function EditNoteModel() {
  
  const {allCategory,fetchEditNote, fetchNotes, editNoteHandler, setShowEditNote} = useContext(AppContext);

  const UpdateNote = async (event)=>{
    event.preventDefault();
    const token = localStorage.getItem('token');
    const res = await fetch(`${apiUrl}/update`,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json',
        'Authorization':`Berear ${token}`
      },
      body:JSON.stringify(fetchEditNote)
    })
    .then(resp => resp.json())
    .then((result)=>{
      if(result.status === 200){
        setShowEditNote(false);
        fetchNotes()
      }
    });
  }

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
              <h2 className={styles.title}>Edit Note</h2>
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
          <form onSubmit={UpdateNote}>
            {/* Note Title */}
            <div className="mb-4">
              <label htmlFor="noteTitle" className={styles.label}>
                Note Title
              </label>
              <input
                id="noteTitle"
                type="text"
                name="title"
                onChange={editNoteHandler}
                value={fetchEditNote.title}
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
                  id="category" name="category_id"
                  onChange={editNoteHandler}
                  value={fetchEditNote.category_id}
                  className={`form-select ${styles.select}`}
                >
                  <option defaultValue disabled>Select Category </option>
                  {allCategory.map(item=>{
                    return <option key={item.id} value={item.id}>{item.category_name}</option>
                  })}
                </select>
              </div>
            </div>
              {/* Content */}
            <div className="mb-3">
              <label htmlFor="content" className={styles.label}>
                Content
              </label>
              <textarea onChange={editNoteHandler}
                id="content" name="content" defaultValue={fetchEditNote.content}
                className={`form-control ${styles.textarea}`}
                placeholder="Start typing your note here..."
              ></textarea>
            </div>
            {/* Footer */}
            <div className={`${styles.footer} d-flex justify-content-end align-items-center`}>
              <button onClick={()=>setShowEditNote(false)} type="button" className={styles.cancelBtn}>Cancel</button>
              <button type="submit" className={styles.saveBtn} >Edit Note</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}