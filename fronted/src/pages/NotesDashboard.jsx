import React, { useContext, useState } from "react";
import styles from "../assets/NotesDashboard.module.css";
import { AppContext } from "../context/AppContext";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import {Link, useNavigate} from 'react-router-dom';
import { apiUrl } from "../components/Https";


const NotesDashboard = () => {

  const {showNoteModel, setNoteModel, setFetchEditNote, fetchEditNote, setShowEditNote, showNote, setFetchEdit, setSingleNote, allNotes, showDelete} = useContext(AppContext);
  const navigate = useNavigate();
  
  const singleView = async (id)=>{

    if(!id || id == null){
      navigate('/dashboard/notes');
      return;
    }
    const token = localStorage.getItem('token');
    const res = await fetch(`${apiUrl}/singlenote/${id}`,{
      method:'GET',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json',
        'Authorization':`Berear ${token}`
      },
    })
    .then(resp => resp.json())
    .then((result) =>{
      if(result.status == 200){
        navigate('/dashboard/notes/singlenote');
        setSingleNote(result.note);
        
      }
    })
  }


  const fetchEdit = async (id)=>{
    const token = localStorage.getItem('token');
    const res = await fetch(`${apiUrl}/fetchedit/${id}`,{
      method:'GET',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json',
        'Authorization':`Berear ${token}`
      },
    })
    .then(resp => resp.json())
    .then((result) =>{
      if(result.status == 200){
        setFetchEditNote({
          id:result.note.id,
          title:result.note.title,
          category_id:result.note.category_id,
          content:result.note.content,
        });
       
      }
    })
  }

  return (
    <div className={styles.mainWrapper}>
      {/* Content */}
      <main className={styles.content}>
        <div className={`d-flex align-items-start justify-content-between ${styles.headerRow}`}>
          <div>
            <h1 className={styles.pageTitle}>All Notes</h1>
            <p className={styles.pageSubtitle}>Organize your thoughts, one note at a time.</p>
          </div>

          <div className={`d-flex ${styles.actionButtons}`}>
                <select className="form-select">
                    <option value="all">All Categories</option>
                    <option value="Work">Work</option>
                    <option value="Ideas">Ideas</option>
                    <option value="Important">Important</option>
                    <option value="Personal">Personal</option>
                </select>
            <select className="form-select">
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="titleAsc">Title (A-Z)</option>
                <option value="titleDesc">Title (Z-A)</option>
            </select>
          </div>
        </div>

        {/* Notes grid */}
        <div className={styles.notesGrid}>
            {allNotes.map((item) => (
              <div onClick={()=>singleView(item.id)} key={item.id} className={styles.noteCard}>
                  <div className={styles.noteCardBody}>
                    <div className={`d-flex align-items-center justify-content-between ${styles.noteTop}`}>
                      <span className={`${styles.tag} ${styles.tagWork} `}>{item.category_name}</span>
                      <span className={styles.noteDate}>{item.note_date}</span>
                    </div>
                    <h3 className={styles.noteTitle}>{item.title}</h3>
                    <p className={styles.noteExcerpt}>{item.content}</p>
                  </div>
                  <div className={styles.icons}>
                    <div onClick={(event)=>{event.stopPropagation(), setShowEditNote(true), fetchEdit(item.id)}} className={`${styles.icon} me-2`}>
                      <MdOutlineEdit className={`${styles.editIcon}`} />
                    </div>
                    <div className={`${styles.icon} me-2`}>
                      <MdOutlineStarOutline className={`${styles.start}`} />
                    </div>
                    <div onClick={showDelete} className={`${styles.icon}`}>
                      <RiDeleteBinLine className={`${styles.deleteIcon}`}/>
                    </div>
                </div>
              </div>
            ))}
          </div>
      </main>

      {/* Floating add button */}
      <button onClick={showNote} type="button" className={styles.fab} aria-label="Add note">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default NotesDashboard;