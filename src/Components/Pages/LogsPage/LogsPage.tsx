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
function LogsPage() {
   const [showModal, setShowModal] = useState(false);
      
        const handleModalShow = () => setShowModal(true);
        const handleModalHide = () => setShowModal(false);
  const rows: Record<string, string | number>[] = [
  
  ];
  const LogsInputs = [
    { id: 'Id', placeholder: 'ID', ariaLabel: 'ID', disabled: true, style: { backgroundColor: 'rgba(0,230,200,0.08)', color: 'rgba(255,255,255,0.59)' } },
    { id: 'Date', placeholder: 'Date', ariaLabel: 'Date' },
    { id: 'Details', placeholder: 'Details', ariaLabel: 'Details' },
    { id: 'image1', placeholder: 'Select Obseved Image', ariaLabel: 'Select Image', type: 'file' },

    
    
   
  ];

  const headers = ['ID', 'Date', 'Details', 'Image','Actions'];
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
              <Table rows={rows} headers={headers} />
            </GlassCard>
          </div>
        </div>
      </div>
      {showModal && (
                    <ModalPage onClose={handleModalHide} inputs={LogsInputs} btnLabel="Add Logs" title="Add Logs"/>
                      
                  )}
    </BodyContainer>
  </div>
 
  )
}

export default LogsPage
