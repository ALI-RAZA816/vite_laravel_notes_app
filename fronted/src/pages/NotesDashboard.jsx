import React, { useContext, useState } from "react";
import styles from "../assets/NotesDashboard.module.css";
import { AppContext } from "../context/AppContext";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import {Link} from 'react-router-dom';



const NotesDashboard = () => {

  const {showNoteModel, setNoteModel, showNote, allNotes, showDelete} = useContext(AppContext);


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
              <Link className="text-decoration-none" to="/dashboard/notes/singlenote" key={item.id}>
                <div className={styles.noteCard}>
                  <div className={styles.noteCardBody}>
                    <div className={`d-flex align-items-center justify-content-between ${styles.noteTop}`}>
                      <span className={`${styles.tag} `}>{item.category_name}</span>
                      <span className={styles.noteDate}>{item.note_date}</span>
                    </div>
                    <h3 className={styles.noteTitle}>{item.title}</h3>
                    <p className={styles.noteExcerpt}>{item.content}</p>
                  </div>
                  <div className={styles.icons}>
                    <div className={`${styles.icon} me-2`}>
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
              </Link>
            ))}
          </div>
      </main>

      {/* Floating add button */}
      <button onClick={()=>showNote('addbtn')} type="button" className={styles.fab} aria-label="Add note">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
};

export default NotesDashboard;