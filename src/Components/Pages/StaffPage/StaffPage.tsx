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
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { addItem, updateItem } from '../../../Reducer/slice/StaffItem';
function StaffPage() {

const staffs = useSelector((state: RootState) => state.staff.items);
  const dispatch = useDispatch();
 const [showModal, setShowModal] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    role: '',
    firstName: '',
    lastName: '',
    designation: '',
    gender: '',
    joiningDate: '',
    dob: '',
    address: '',
    phoneNumber: '',
    email: '',
    LogId: ''
  });
  
  
    const handleInputChange = (id: string, value: string) => {
      setFormData(prev => ({
        ...prev,
        [id]: value
      }));
    };
  
    const handleModalShow = () => {
      setFormData({ id: '', role: '', firstName: '', lastName: '', designation: '', gender: '', joiningDate: '', dob: '', address: '', phoneNumber: '', email: '', LogId: '' });
      setUpdateMode(false);
      setShowModal(true);
    };
  
    const handleUpdateModalShow = (staff: typeof formData) => {
      setFormData(staff);
      setUpdateMode(true);
      setShowModal(true);
    };
  
    const handleModalHide = () => setShowModal(false);
  
    const handleSubmit = () => {
      dispatch(addItem(formData)); 
      if (Object.values(formData).every(val => val !== '')) {
        if (updateMode) {
          dispatch(updateItem(formData)); 
        } else {
         
        }
        handleModalHide();
      } else {
        alert('Please fill all fields!');
      }
    };

  const rows=staffs.map((staff) => ({
    id: staff.id,
    role: staff.role,
    firstName: staff.firstName,
    lastName: staff.lastName,
    designation: staff.designation,
    gender: staff.gender,
    joiningDate: staff.joiningDate,
    dob: staff.dob,
    address: staff.address,
    phoneNumber: staff.phoneNumber,
    email: staff.email,
    LogId: staff.LogId
  }));
   
        const staffInputs = [
          { id: 'id', placeholder: 'Staff Code', ariaLabel: 'Staff Code' },
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
          { id: 'joiningDate', placeholder: 'Joined Date', ariaLabel: 'Joined Date', type: 'date' },
          { id: 'dob', placeholder: 'Date of Birth', ariaLabel: 'Date of Birth', type: 'date' },
          { id: 'buildingName', placeholder: 'Building Name', ariaLabel: 'Building Name' },
          { id: 'laneName', placeholder: 'Lane Name', ariaLabel: 'Lane Name' },
          { id: 'address', placeholder: 'City', ariaLabel: 'City' },
          { id: 'province', placeholder: 'Province', ariaLabel: 'Province' },
          { id: 'postalCode', placeholder: 'Postal Code', ariaLabel: 'Postal Code' },
          { id: 'phoneNumber', placeholder: 'Contact Number', ariaLabel: 'Contact Number', type: 'tel' },
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
            id: 'LogId',
            placeholder: 'Select Log ID',
            ariaLabel: 'Log ID',
            type: 'select',
            options: [
              { value: 'Log1', label: 'Log 1' },
              { value: 'Log2', label: 'Log 2' },
            ],
          },
        ];
      
      

  const headers = ['ID', 'ROLE','First Name', 'Last Name', 'Designation', 'Gender','Joining Date' ,'Date of Birth','Address','Phone Number','Email','Log Id'];
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
              <Table
                  rows={rows}
                  headers={headers}
                  onEdit={handleUpdateModalShow} 
                />
            </GlassCard>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalPage
          onClose={handleModalHide}
          inputs={staffInputs}
          btnLabel={updateMode ? 'Update Staff' : 'Add Staff'}
          title={updateMode ? 'Update Staff' : 'Add Staff'}
          onSubmit={handleSubmit}
          formData={formData}
          onInputChange={handleInputChange}
        />
      )}
    </BodyContainer>
  </div>
 
  )
}

export default StaffPage
