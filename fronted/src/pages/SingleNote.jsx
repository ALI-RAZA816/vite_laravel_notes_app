import React, { useState } from "react";
import styles from "../assets/SingleNote.module.css";
import { MdFormatBold, MdFormatItalic, MdFormatSize } from "react-icons/md";
import { MdOutlineFormatListBulleted, MdOutlineChecklist } from "react-icons/md";
import { MdOutlineImage, MdOutlineIosShare } from "react-icons/md";
import { MdOutlineStarOutline, MdStar, MdOutlineAccessTime } from "react-icons/md";

const SingleNote = () => {
  const [isFavorite, setIsFavorite] = useState(true);

  const [actionItems, setActionItems] = useState([
    { id: 1, label: "Finalize UI design system", checked: true },
    { id: 2, label: "Setup CI/CD pipelines", checked: false },
    { id: 3, label: "Security audit of API endpoints", checked: false },
  ]);

  const toggleItem = (id) => {
    setActionItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className={styles.detailWrapper}>
      {/* Floating toolbar */}
      <div className={`d-flex align-items-center justify-content-center ${styles.toolbar}`}>
        <button type="button" className={styles.toolBtn} title="Bold">
          <MdFormatBold />
        </button>
        <button type="button" className={styles.toolBtn} title="Italic">
          <MdFormatItalic />
        </button>
        <button type="button" className={styles.toolBtn} title="Text size">
          <MdFormatSize />
        </button>
        <span className={styles.toolDivider}></span>
        <button type="button" className={styles.toolBtn} title="Bulleted list">
          <MdOutlineFormatListBulleted />
        </button>
        <button type="button" className={styles.toolBtn} title="Checklist">
          <MdOutlineChecklist />
        </button>
        <span className={styles.toolDivider}></span>
        <button type="button" className={styles.toolBtn} title="Insert image">
          <MdOutlineImage />
        </button>
        <button type="button" className={styles.toolBtn} title="Share">
          <MdOutlineIosShare />
        </button>
        <button type="button" className={styles.saveBtn}>
          Save
        </button>
      </div>

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
            onClick={() => setIsFavorite((prev) => !prev)}
            aria-label="Toggle favorite"
          >
            {isFavorite ? <MdStar /> : <MdOutlineStarOutline />}
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

          <h3 className={styles.sectionHeading}>Action Items</h3>
          <div className={`d-flex flex-wrap align-items-center ${styles.checklist}`}>
            {actionItems.map((item) => (
              <label key={item.id} className={styles.checklistItem}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleItem(item.id)}
                  className={styles.checkboxInput}
                />
                <span className={item.checked ? styles.checkedLabel : ""}>
                  {item.label}
                </span>
              </label>
            ))}
          </div>

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