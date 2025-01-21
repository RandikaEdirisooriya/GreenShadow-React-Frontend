import React from 'react'
import { useState } from 'react';
import HeaderContainer from '../../HeadersContainer/HeaderContainer';
import BodyContainer from '../../BodyContainer/BodyContainer';
import TitleSection from '../../Components-Pages/TitleComponent/TitleSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Pages.css'
import GlassCard from '../../Components-Pages/GlassCard/GlassCard';
import Button from '../../Components-Pages/Button/Button';
import Table from '../../Components-Pages/Table/Table';
import ModalPage from '../../Components-Pages/Modal/modalPage';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { addItem, updateItem } from '../../../Reducer/slice/LogItem';
function LogsPage() {
   const logs = useSelector((state: RootState) => state.log.items);
     const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
     const [updateMode, setUpdateMode] = useState(false);
     const [formData, setFormData] = useState({
      id: '',
      Date: '',
      Details: '',
      Image1: ''
     });


     
         const handleInputChange = (id: string, value: string) => {
           setFormData(prev => ({
             ...prev,
             [id]: value
           }));
         };
       
         const handleModalShow = () => {
           setFormData({ id: '', Date: '', Details: '', Image1: '' });
           setUpdateMode(false);
           setShowModal(true);
         };
       
         const handleUpdateModalShow = (logs: typeof formData) => {
           setFormData(logs);
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
  const rows=logs.map(log=>({
    id:log.id,Date:log.Date,Details:log.Details,Image1:log.Image1}))
  const LogsInputs = [
    { id: 'id', placeholder: 'ID', ariaLabel: 'ID', style: { backgroundColor: 'rgba(0,230,200,0.08)', color: 'rgba(255,255,255,0.59)' } },
    { id: 'Date', placeholder: 'Date', ariaLabel: 'Date' },
    { id: 'Details', placeholder: 'Details', ariaLabel: 'Details' },
    { id: 'Image1', placeholder: 'Select Obseved Image', ariaLabel: 'Select Image', type: 'file' },

    
    
   
  ];

  const headers = ['ID', 'Date', 'Details', 'Image'];
  return (
    <div>
    <HeaderContainer />
    <BodyContainer>
      <div className="glass-container my-4 p-4">
        <div className="content">
          <TitleSection title="LOGS" />

          <div className="glass-cards mb-4">
            <GlassCard>
              <h1>LOGS</h1>
            </GlassCard>
          </div>

          <div className="glass-cards">
            <GlassCard>
              <div className="d-flex justify-content-between align-items-center mb-3">
              <Button
                    lable="Add New Logs"
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
          inputs={LogsInputs}
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

export default LogsPage
