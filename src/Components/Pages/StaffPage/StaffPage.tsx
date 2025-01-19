import React from 'react'
import { useState } from 'react';
import ModalPage from '../../Components-Pages/Modal/modalPage';
import HeaderContainer from '../../HeadersContainer/HeaderContainer';
import BodyContainer from '../../BodyContainer/BodyContainer';
import TitleSection from '../../Components-Pages/TitleComponent/TitleSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Pages.css'
import GlassCard from '../../Components-Pages/GlassCard/GlassCard';
import Button from '../../Components-Pages/Button/Button';
import Table from '../../Components-Pages/Table/Table';
function StaffPage() {
  const rows: Record<string, string | number>[] = [
  
  ];
    const [showModal, setShowModal] = useState(false);
      
        const handleModalShow = () => setShowModal(true);
        const handleModalHide = () => setShowModal(false);
        const staffInputs = [
          { id: 'staffCode', placeholder: 'Staff Code', ariaLabel: 'Staff Code' },
          { id: 'firstName', placeholder: 'First Name', ariaLabel: 'First Name' },
          { id: 'lastName', placeholder: 'Last Name', ariaLabel: 'Last Name' },
          {
            id: 'designation',
            placeholder: 'Select Designation',
            ariaLabel: 'Designation',
            type: 'select',
            options: [
              { value: 'Manager', label: 'Manager' },
              { value: 'Assistant', label: 'Assistant' },
              { value: 'Supervisor', label: 'Supervisor' },
            ],
          },
          { id: 'joinedDate', placeholder: 'Joined Date', ariaLabel: 'Joined Date', type: 'date' },
          { id: 'dob', placeholder: 'Date of Birth', ariaLabel: 'Date of Birth', type: 'date' },
          { id: 'buildingName', placeholder: 'Building Name', ariaLabel: 'Building Name' },
          { id: 'laneName', placeholder: 'Lane Name', ariaLabel: 'Lane Name' },
          { id: 'city', placeholder: 'City', ariaLabel: 'City' },
          { id: 'province', placeholder: 'Province', ariaLabel: 'Province' },
          { id: 'postalCode', placeholder: 'Postal Code', ariaLabel: 'Postal Code' },
          { id: 'contactNumber', placeholder: 'Contact Number', ariaLabel: 'Contact Number', type: 'tel' },
          {
            id: 'gender',
            placeholder: 'Select Gender',
            ariaLabel: 'Gender',
            type: 'select',
            options: [
              { value: 'Male', label: 'Male' },
              { value: 'Female', label: 'Female' },
              { value: 'Other', label: 'Other' },
            ],
          },
          { id: 'email', placeholder: 'Email', ariaLabel: 'Email', type: 'email' },
          {
            id: 'role',
            placeholder: 'Select Role',
            ariaLabel: 'Role',
            type: 'select',
            options: [
              { value: 'Admin', label: 'Admin' },
              { value: 'Staff', label: 'Staff' },
              { value: 'HR', label: 'HR' },
            ],
          },
          {
            id: 'logId',
            placeholder: 'Select Log ID',
            ariaLabel: 'Log ID',
            type: 'select',
            options: [
              { value: 'Log1', label: 'Log 1' },
              { value: 'Log2', label: 'Log 2' },
            ],
          },
        ];
      
      

  const headers = ['ID', 'ROLE', 'Last Name', 'Designation', 'Gender','Joining Date' ,'Date of Birth','Address','Phone Number','Email','Actions'];
  return (
    <div>
    <HeaderContainer />
    <BodyContainer>
      <div className="glass-container my-4 p-4">
        <div className="content">
          <TitleSection title="Staff" />

          <div className="glass-cards mb-4">
            <GlassCard>
              <h1>Staff</h1>
            </GlassCard>
          </div>

          <div className="glass-cards">
            <GlassCard>
              <div className="d-flex justify-content-between align-items-center mb-3">
              <Button
                    lable="Add New Staff"
                    onClick={handleModalShow} 
                  />
              </div>
              <Table rows={rows} headers={headers} />
            </GlassCard>
          </div>
        </div>
      </div>
      {showModal && (
                    <ModalPage onClose={handleModalHide} inputs={staffInputs} btnLabel="Add Staff" title="Add Staff"/>
                      
                  )}
    </BodyContainer>
  </div>
 
  )
}

export default StaffPage
