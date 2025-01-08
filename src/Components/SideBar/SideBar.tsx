import React from 'react';
import './SideBar.css';
import MenuItems from '../MenuItems/MenuItems';

interface SideBarProps {
  isSidebarVisible: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ isSidebarVisible }) => {
  return (
    <div className={`sidebar ${isSidebarVisible ? '' : 'hidden'}`}>
      <nav>
        <div className="nav_list">
          <MenuItems linktext="Home" url="/" className="nav_link">
            <span className="nav_icon icon-home"></span>
          </MenuItems>

          <MenuItems linktext="Staff" url="/staff" className="nav_link">
            <span className="nav_icon icon-staff"></span>
          </MenuItems>

          <MenuItems linktext="Field" url="/field" className="nav_link">
            <span className="nav_icon icon-field"></span>
          </MenuItems>

          <MenuItems linktext="Crop" url="/crop" className="nav_link">
            <span className="nav_icon icon-crop"></span>
          </MenuItems>

          <MenuItems linktext="Equipment" url="/equipment" className="nav_link">
            <span className="nav_icon icon-equipment"></span>
          </MenuItems>

          <MenuItems linktext="Vehicles" url="/vehicles" className="nav_link">
            <span className="nav_icon icon-vehicles"></span>
          </MenuItems>

          <MenuItems linktext="Logs" url="/logs" className="nav_link">
            <span className="nav_icon icon-logs"></span>
          </MenuItems>

          <MenuItems linktext="Staff Field" url="/stafffield" className="nav_link">
            <span className="nav_icon icon-staff-field"></span>
          </MenuItems>

          <div className="logout_section">
            <MenuItems linktext="Logout" url="/logout" className="nav_link">
              <span className="nav_icon icon-logout"></span>
            </MenuItems>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
