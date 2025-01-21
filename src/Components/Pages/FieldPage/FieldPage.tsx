import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { addItem, updateItem } from '../../../Reducer/slice/FieldItem';
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
    const field = useSelector((state: RootState) => state.field.items);
    const dispatch = useDispatch();
   const [showModal, setShowModal] = useState(false);
     const [updateMode, setUpdateMode] = useState(false);
      const [formData, setFormData] = useState({
        id: '' ,
        Name: '',
        Location: '',
        ExtentSize: '',
        Cam1: '',
        Cam2: '',
        LogId: ''
      });



  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleModalShow = () => {
    setFormData({ id: '', Name: '', Location: '', ExtentSize: '', Cam1: '', Cam2: '', LogId: '' });
    setUpdateMode(false);
    setShowModal(true);
  };

  const handleUpdateModalShow = (field: typeof formData) => {
    setFormData(field);
    setUpdateMode(true);
    setShowModal(true);
  };

  const handleModalHide = () => setShowModal(false);

  const handleSubmit = () => {
   
    if (Object.values(formData).every(val => val !== '')) {
     
      if (updateMode) {
        dispatch(updateItem(formData));
      } else {
        dispatch(addItem(formData));
      }
      handleModalHide();
    } else {
      alert('Please fill all fields!');
    }
  };

  const rows=field.map((field) => ({
    id: field.id,
    Name: field.Name,
    Location: field.Location,
    ExtentSize: field.ExtentSize,
    Cam1: field.Cam1,
    Cam2: field.Cam2,
    LogId: field.LogId
  }))
  const FieldInputs = [
    { id: 'id', placeholder: 'ID', ariaLabel: 'ID', style: { backgroundColor: 'rgba(0,230,200,0.08)', color: 'rgba(255,255,255,0.59)' } },
    { id: 'Name', placeholder: 'Name', ariaLabel: 'Name' },
    { id: 'Location', placeholder: 'Location', ariaLabel: 'Location' },
    { id: 'ExtentSize', placeholder: 'ExtentSize', ariaLabel: 'ExtentSize' },
    { id: 'Cam1', placeholder: 'Select Image One', ariaLabel: 'Select Image', type: 'file' },
    { id: 'Cam2', placeholder: 'Select Image Two', ariaLabel: 'Select Image', type: 'file' },
    
    
    {
      id: 'LogId',
      placeholder: 'Select Log ID',
      ariaLabel: 'Log ID',
      type: 'select',
      options: [{ value: 'Log1', label: 'Log 1' }, { value: 'Log2', label: 'Log 2' }],
    },
  ];

  const headers = ['ID', 'Name', 'Location', 'Extent Size', 'Cam 1', 'Cam2','Log Id'];
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
              <Table rows={rows} headers={headers} onEdit={handleUpdateModalShow} />
            </GlassCard>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalPage
          onClose={handleModalHide}
          inputs={FieldInputs}
          btnLabel={updateMode ? 'Update Field' : 'Add Field'}
          title={updateMode ? 'Update Field' : 'Add Field'}
          onSubmit={handleSubmit}
          formData={formData}
          onInputChange={handleInputChange}
        />
      )}
    </BodyContainer>
  </div>
 
  )
}

export default FieldPage
