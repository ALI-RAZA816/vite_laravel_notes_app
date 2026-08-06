import React, { useContext, useState } from "react";
import styles from "../assets/NoteModel.module.css";
import { AppContext } from "../context/AppContext";
import { apiUrl } from "../components/Https";

export default function NoteModel() {
  const {showNoteModel, setNoteModel, notesType, allCategory, hideNote} = useContext(AppContext);

  const [noteErr, setNoteErr] = useState({
    title:'',
    category_id:'',
    user_id:'',
    content:''
  });

  const [noteData, setNoteData] = useState({
    title:'',
    category_id:'',
    user_id:'',
    content:''
  });

  const handleChange = (event)=>{
    const {name, value} = event.target
    setNoteData((prev)=>({
      ...prev,
      [name]:value
    }));
  }

  const addnote = async (event)=>{
    event.preventDefault();
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('userId');

    const payload = {
      ...noteData,
      user_id:id
    }
    
    
    const res = await fetch(`${apiUrl}/note`,{
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'Authorization':`Bearer ${token}`
      },
      body:JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then((result)=>{
      console.log(result);
      if(result.status === 400){
        setNoteErr((prev)=>({
          ...prev,
          [result.type]:result.message
        }));
      }else if(result.status === 200){
        setNoteModel(false);
      }
    })
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
          <form onSubmit={addnote}>
            {/* Note Title */}
            <div className="mb-4">
              <label htmlFor="noteTitle" className={styles.label}>
                Note Title
              </label>
              <input
                id="noteTitle"
                type="text"
                name="title"
                value={noteData.title}
                onChange={handleChange}
                className={`form-control ${styles.input}`}
                placeholder="What's on your mind?"
              />
              <span className="text-danger">{noteErr.title}</span>
            </div>
            {/* Category + Visual Inspiration */}
            <div className="row mb-4">
              <div className="col">
                <label htmlFor="category" className={styles.label}>
                  Category
                </label>
                <select
                  id="category" name="category_id" value={noteData.category_id} onChange={handleChange}
                  className={`form-select ${styles.select}`}
                >
                  <option value="" disabled>Select Category </option>
                  {allCategory.map(item=>{
                    return <option key={item.id} value={item.id}>{item.category_name}</option>
                  })}
                  
                </select>
                <span className="text-danger">{noteErr.category_id}</span>
              </div>
            </div>
              {/* Content */}
            <div className="mb-3">
              <label htmlFor="content" className={styles.label}>
                Content
              </label>
              <textarea
                value={noteData.content}
                onChange={handleChange}
                id="content" name="content"
                className={`form-control ${styles.textarea}`}
                placeholder="Start typing your note here..."
              ></textarea>
              <span className="text-danger">{noteErr.content}</span>
            </div>
            {/* Footer */}
            <div className={`${styles.footer} d-flex justify-content-end align-items-center`}>
              <button onClick={hideNote} type="button" className={styles.cancelBtn}>Cancel</button>
              {notesType === 'addbtn' ? <button type="submit" className={styles.saveBtn} >
                Save Note
              </button>:
              <button type="submit" className={styles.saveBtn} >
                Edit Note
              </button>}
            </div>
          </form>
        </div>



      </div>
    </div>
  );
}