import React, { useState } from "react";
import styles from "../assets/SingleNote.module.css";
import { MdFormatBold, MdFormatItalic, MdFormatSize } from "react-icons/md";
import { MdOutlineFormatListBulleted, MdOutlineChecklist } from "react-icons/md";
import { MdOutlineImage, MdOutlineIosShare } from "react-icons/md";
import { MdOutlineStarOutline, MdStar, MdOutlineAccessTime } from "react-icons/md";

const SingleNote = () => {
  
  return (
    <div className={styles.detailWrapper}>

      {/* Note card */}
      <div className={styles.noteCard}>
        <div className={`d-flex align-items-center justify-content-between ${styles.metaRow}`}>
          <div className="d-flex align-items-center">
            <span className={styles.tagBadge}>PROJECT</span>
            <span className={`d-flex align-items-center ${styles.readTime}`}>
              <MdOutlineAccessTime className="me-1" />
              5 min read
            </span>
          </div>
          <button
            type="button"
            className={styles.favoriteBtn}
          >
        <MdStar />  <MdOutlineStarOutline />
          </button>
        </div>

        <h1 className={styles.noteTitle}>Project Alpha Roadmap</h1>
        <p className={styles.lastEdited}>Last edited 2 hours ago</p>

        <div className={styles.noteImage}>
          <img
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80"
            alt="Workspace with laptop and notebook"
          />
        </div>

        <div className={styles.noteBody}>
          <h3 className={styles.sectionHeading}>Overview</h3>
          <p>
            The Project Alpha Roadmap outlines our strategic vision for the
            next quarter. We are focusing on enhancing user collaboration
            tools and refining the core note-taking engine for seamless
            synchronization across all devices.
          </p>

          <h3 className={styles.sectionHeading}>Key Milestones</h3>
          <p>
            <strong>Phase 1:</strong> Architecture overhaul and database
            migration (Oct 15).
            <br />
            <strong>Phase 2:</strong> Real-time co-editing implementation via
            WebSockets (Nov 1).
            <br />
            <strong>Phase 3:</strong> Beta launch for internal stakeholders
            (Nov 20).
          </p>
          <p className={styles.closingText}>
            By the end of the year, Alpha should be ready for public beta. We
            need to ensure that the minimalist aesthetic remains consistent
            throughout the expanded feature set.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNote;