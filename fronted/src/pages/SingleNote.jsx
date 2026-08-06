import React, { useContext, useState } from "react";
import styles from "../assets/SingleNote.module.css";
import { MdFormatBold, MdFormatItalic, MdFormatSize } from "react-icons/md";
import { MdOutlineFormatListBulleted, MdOutlineChecklist } from "react-icons/md";
import { MdOutlineImage, MdOutlineIosShare } from "react-icons/md";
import { MdOutlineStarOutline, MdStar, MdOutlineAccessTime } from "react-icons/md";
import { AppContext } from "../context/AppContext";

const SingleNote = () => {
  
  const {singleNote} = useContext(AppContext);
  
  return (
    <div className={styles.detailWrapper}>

      {/* Note card */}
      <div className={styles.noteCard}>
        <div className={`d-flex align-items-center justify-content-between ${styles.metaRow}`}>
          <div className="d-flex align-items-center">
            <span className={styles.tagBadge}>{singleNote.category_name}</span>
          </div>
          <button
            type="button"
            className={styles.favoriteBtn}
          >
        <MdStar />  <MdOutlineStarOutline />
          </button>
        </div>

        <h1 className={styles.noteTitle}>{singleNote.title}</h1>

        <div className={styles.noteBody}>
          <h3 className={styles.sectionHeading}>Overview</h3>
          <p>
            {singleNote.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNote;