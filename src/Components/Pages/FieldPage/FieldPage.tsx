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

function FieldPage() {
   const [showModal, setShowModal] = useState(false);
    
      const handleModalShow = () => setShowModal(true);
      const handleModalHide = () => setShowModal(false);
  const rows: Record<string, string | number>[] = [
  
  ];
  const FieldInputs = [
    { id: 'fieldId', placeholder: 'ID', ariaLabel: 'ID', disabled: true, style: { backgroundColor: 'rgba(0,230,200,0.08)', color: 'rgba(255,255,255,0.59)' } },
    { id: 'Name', placeholder: 'Name', ariaLabel: 'Name' },
    { id: 'Location', placeholder: 'Location', ariaLabel: 'Location' },
    { id: 'image1', placeholder: 'Select Image One', ariaLabel: 'Select Image', type: 'file' },
    { id: 'image2', placeholder: 'Select Image Two', ariaLabel: 'Select Image', type: 'file' },
    
    
    {
      id: 'log',
      placeholder: 'Select Log ID',
      ariaLabel: 'Log ID',
      type: 'select',
      options: [{ value: 'Log1', label: 'Log 1' }, { value: 'Log2', label: 'Log 2' }],
    },
  ];

  const headers = ['ID', 'Name', 'Location', 'Extent Size', 'Cam 1', 'Cam2','Log Id','Actions'];
  return (
    <div>
    <HeaderContainer />
    <BodyContainer>
      <div className="glass-container my-4 p-4">
        <div className="content">
          <TitleSection title="Field" />

          <div className="glass-cards mb-4">
            <GlassCard>
              <h1>Field</h1>
            </GlassCard>
          </div>

          <div className="glass-cards">
            <GlassCard>
              <div className="d-flex justify-content-between align-items-center mb-3">
              <Button
                    lable="Add New Field"
                    onClick={handleModalShow} 
                  />
              </div>
              <Table rows={rows} headers={headers} />
            </GlassCard>
          </div>
        </div>
      </div>
      {showModal && (
                    <ModalPage onClose={handleModalHide} inputs={FieldInputs} btnLabel="Add Field" title="Add Field"/>
                      
                  )}
    </BodyContainer>
  </div>
 
  )
}

export default FieldPage
