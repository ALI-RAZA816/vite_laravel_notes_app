import React from 'react';
import styles from '../assets/Header.module.css';
import {Outlet} from 'react-router-dom'

export default function Header() {
  return (
    <>
        <header className={`d-flex align-items-center justify-content-between ${styles.topbar}`}>
            <span className={styles.logo}>NotesHub</span>
            <div className={styles.searchWrapper}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={styles.searchIcon}>
                <circle cx="11" cy="11" r="7" stroke="#9CA3AF" strokeWidth="1.8" />
                <path d="M21 21l-4.3-4.3" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <input
                type="text"
                className={styles.searchInput}
                placeholder="Search your notes..."
                />
            </div>
            <div className={`d-flex align-items-center ${styles.topbarActions}`}>
                <button type="button" className={styles.iconBtn} aria-label="Notifications">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                    d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
                    stroke="#111827"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                    <path d="M13.7 21a2 2 0 01-3.4 0" stroke="#111827" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                </button>
                <button type="button" className={styles.iconBtn} aria-label="Settings">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="3" stroke="#111827" strokeWidth="1.8" />
                    <path
                    d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82V15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
                    stroke="#111827"
                    strokeWidth="1.4"
                    />
                </svg>
                </button>
                <div className={styles.avatar}>JD</div>
            </div>
        </header>
        <Outlet/>
    </>
  )
}
