import React, { useState } from "react";
import styles from "../assets/UserManagement.module.css";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineBolt, MdOutlineHourglassEmpty } from "react-icons/md";
import { LuListFilter } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import {Link} from 'react-router-dom';


const statusStyles = {
  Active: styles.statusActive,
  Inactive: styles.statusInactive,
  Pending: styles.statusPending,
};

const roleStyles = {
  Admin: styles.roleAdmin,
  Editor: styles.roleEditor,
  Viewer: styles.roleViewer,
};

const initialUsers = [
  {
    id: 1,
    name: "Alex Simmons",
    email: "alex.s@noteshub.com",
    initials: "AS",
    avatarColor: "#eae7ff",
    initialsColor: "#5b4bf5",
    role: "Admin",
    status: "Active",
    lastActive: "Oct 24, 2023",
  },
  {
    id: 2,
    name: "Maya Chen",
    email: "maya.c@noteshub.com",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    role: "Editor",
    status: "Active",
    lastActive: "Oct 23, 2023",
  },
  {
    id: 3,
    name: "James Roland",
    email: "james.r@noteshub.com",
    initials: "JR",
    avatarColor: "#eef0f4",
    initialsColor: "#4b4d57",
    role: "Viewer",
    status: "Inactive",
    lastActive: "Sep 12, 2023",
  },
  {
    id: 4,
    name: "Elena Kovic",
    email: "elena.k@noteshub.com",
    initials: "EK",
    avatarColor: "#fde3e3",
    initialsColor: "#d92d20",
    role: "Editor",
    status: "Pending",
    lastActive: "—",
  },
];

const UserManagement = () => {
  const [users] = useState(initialUsers);
  const [filterText, setFilterText] = useState("");

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(filterText.toLowerCase()) ||
      u.email.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className={styles.pageWrapper}>
      {/* Page heading */}
      <div className={`d-flex align-items-start justify-content-between ${styles.headingRow}`}>
        <div>
          <h1 className={styles.pageTitle}>User Management</h1>
          <p className={styles.pageSubtitle}>Manage team members, roles, and permissions.</p>
        </div>
      </div>

      {/* Stat cards */}
      <div className={`row ${styles.statsRow}`}>
        <div className="col-md-4">
          <div className={styles.statCard}>
            <div className="d-flex align-items-center justify-content-between">
              <span className={styles.statLabel}>Total Users</span>
              <span className={`${styles.statIcon} ${styles.statIconPurple}`}>
                <HiOutlineUsers />
              </span>
            </div>
            <div className={styles.statValueRow}>
              <span className={styles.statValue}>24</span>
              <span className={styles.statDeltaPositive}>+2 this month</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className={styles.statCard}>
            <div className="d-flex align-items-center justify-content-between">
              <span className={styles.statLabel}>Active Now</span>
              <span className={`${styles.statIcon} ${styles.statIconGray}`}>
                <MdOutlineBolt />
              </span>
            </div>
            <div className={styles.statValueRow}>
              <span className={styles.statValue}>12</span>
              <span className={styles.statDeltaNeutral}>50% of total</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className={styles.statCard}>
            <div className="d-flex align-items-center justify-content-between">
              <span className={styles.statLabel}>Inactive</span>
              <span className={`${styles.statIcon} ${styles.statIconGray}`}>
                <MdOutlineHourglassEmpty />
              </span>
            </div>
            <div className={styles.statValueRow}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statDeltaWarning}>85% of total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table card */}
      <div className={styles.tableCard}>
        {/* Filter bar */}
        <div className={`d-flex align-items-center ${styles.filterBar}`}>
          <div className={styles.filterInputWrapper}>
            <LuListFilter className={styles.filterIcon} />
            <input
              type="text"
              className={styles.filterInput}
              placeholder="Filter users..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>
            <select name="" id="" className="form-select w-25">
                <option value="">All Roles</option>
                <option value="">Admin</option>
                <option value="">Viewer</option>
                <option value="">Editor</option>
            </select>
            <select name="" id="" className="form-select w-25">
                <option value="">All Status</option>
                <option value="">Active</option>
                <option value="">Inactive</option>
            </select>
        </div>

        {/* Table */}
        <table className={`table ${styles.usersTable}`}>
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Active</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="d-flex align-items-center">
                    {user.photo ? (
                      <img src={user.photo} alt={user.name} className={styles.userPhoto} />
                    ) : (
                      <div
                        className={styles.userInitials}
                        style={{
                          background: user.avatarColor,
                          color: user.initialsColor,
                        }}
                      >
                        {user.initials}
                      </div>
                    )}
                    <div className="ms-3">
                      <div className={styles.userName}>{user.name}</div>
                      <div className={styles.userEmail}>{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`${styles.roleBadge} ${roleStyles[user.role]}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`d-flex align-items-center ${styles.statusCell} ${statusStyles[user.status]}`}>
                    <span className={styles.statusDot}></span>
                    {user.status}
                  </span>
                </td>
                <td className={styles.lastActive}>{user.lastActive}</td>
                <td className="text-end">
                  <button type="button" className={styles.moreBtn} aria-label="More options">
                    <Link to="/dashboard/users/edituser"><MdModeEditOutline className="me-3 fs-5"/></Link>
                    <RiDeleteBinLine className="fs-5" style={{color:'rgb(153, 2, 2)'}} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer / pagination */}
        <div className={`d-flex align-items-center justify-content-between ${styles.tableFooter}`}>
          <span className={styles.showingText}>
            Showing {filteredUsers.length} of 24 users
          </span>
          <div className={`d-flex align-items-center ${styles.pagination}`}>
            <button type="button" className={styles.pageBtn} disabled>
              <MdChevronLeft />
            </button>
            <span className={styles.pageNumber}>1</span>
            <button type="button" className={styles.pageBtn}>
              <MdChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;