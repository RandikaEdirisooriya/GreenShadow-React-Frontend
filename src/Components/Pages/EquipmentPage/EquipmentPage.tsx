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


 

function EquipmentPage() {

    const [showModal, setShowModal] = useState(false);
  
    const handleModalShow = () => setShowModal(true);
    const handleModalHide = () => setShowModal(false);
  const rows: Record<string, string | number>[] = [
  
  ];

  const EquipmentInputs = [
    { id: 'equipmentId', placeholder: 'ID', ariaLabel: 'ID', disabled: true, style: { backgroundColor: 'rgba(0,230,200,0.08)', color: 'rgba(255,255,255,0.59)' } },
    { id: 'Name', placeholder: 'Name', ariaLabel: 'Name' },
    { id: 'Status', placeholder: 'Common Name', ariaLabel: 'Common Name' },
    { id: 'Type', placeholder: 'Type', ariaLabel: 'Type' },
    
    
    {
      id: 'field',
      placeholder: 'Select Field ID',
      ariaLabel: 'Field ID',
      type: 'select',
      options: [{ value: 'Field1', label: 'Field 1' }, { value: 'Field2', label: 'Field 2' }],
    },
    {
      id: 'staff',
      placeholder: 'Select staff ID',
      ariaLabel: 'staff ID',
      type: 'select',
      options: [{ value: 'staff1', label: 'staff 1' }, { value: 'staff2', label: 'staff 2' }],
    },
  ];

  const headers = ['ID', 'Name', 'status', 'Type', 'Field', 'Staff','Actions'];
  return (
    <div>
    <HeaderContainer />
    <BodyContainer>
      <div className="glass-container my-4 p-4">
        <div className="content">
          <TitleSection title="Equipment" />

          <div className="glass-cards mb-4">
            <GlassCard>
              <h1>Equipment</h1>
              
            </GlassCard>
          </div>

          <div className="glass-cards">
            <GlassCard>
              <div className="d-flex justify-content-between align-items-center mb-3">
              <Button
                    lable="Add New Equipment"
                    onClick={handleModalShow} 
                  />
              </div>
              <Table rows={rows} headers={headers} />
            </GlassCard>
          </div>
        </div>
      </div>
      {showModal && (
                    <ModalPage onClose={handleModalHide} inputs={EquipmentInputs} btnLabel="Add Equipment" title="Add  Equipment"/>
                      
                  )}
    </BodyContainer>
  </div>
  )
}

export default EquipmentPage
