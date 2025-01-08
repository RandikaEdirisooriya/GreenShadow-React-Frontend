import React, { useState } from 'react';
import avatar from '../../assets/Images/avatar.png';
import './NavBarContainer.css'; // Import the CSS file
import 'bootstrap-icons/font/bootstrap-icons.css';
import SideBar from '../SideBar/SideBar'; // Import SideBar

const NavBarContainer: React.FC = () => {
  // State to control sidebar visibility
  const [isSidebarVisible, setSidebarVisible] = useState<boolean>(true);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div>
      <header className="header">
        {/* Toggle Button */}
        <div className="header-toggle" onClick={toggleSidebar}>
          <i className="bi bi-list" id="header-toggle"></i>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input type="text" className="form-control" placeholder="Search..." />
        </div>

        {/* Icons and Profile Avatar */}
        <div className="icon-container">
          <button className="icon-btn">
            <i className="bi bi-bell"></i>
          </button>
          <button className="icon-btn">
            <i className="bi bi-gear"></i>
          </button>
          <img src={avatar} alt="Profile" className="profile-avatar" />
        </div>
      </header>

      {/* Pass the sidebar visibility state to the SideBar */}
      <SideBar isSidebarVisible={isSidebarVisible} />
    </div>
  );
}

export default NavBarContainer;
