import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
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
import { addItem, updateItem } from '../../../Reducer/slice/EquipmentItem';


 

function EquipmentPage() {
  const equipment = useSelector((state: RootState) => state.equipment.items);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    Name: '',
    Status: '',
    Type: '',
    FieldId: '',
    staffId: '',
  });

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleModalShow = () => {
    setFormData({ id: '', Name: '', Status: '', Type: '', FieldId: '', staffId: '' });
    setUpdateMode(false);
    setShowModal(true);
  };

  const handleUpdateModalShow = (equipment: typeof formData) => {
    setFormData(equipment);
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

  const rows = equipment.map(equip => ({
    id: equip.id,
    Name: equip.Name,
    Status: equip.Status,
    Type: equip.Type,
    FieldId: equip.FieldId,
    staffId: equip.staffId,
  }));

  const EquipmentInputs = [
    { id: 'id', placeholder: 'ID', ariaLabel: 'ID', style: { backgroundColor: 'rgba(0,230,200,0.08)', color: 'rgba(255,255,255,0.59)' } },
    { id: 'Name', placeholder: 'Name', ariaLabel: 'Name' },
    { id: 'Status', placeholder: 'Status', ariaLabel: 'Status' },
    { id: 'Type', placeholder: 'Type', ariaLabel: 'Type' },
    
    
    {
      id: 'FieldId',
      placeholder: 'Select Field ID',
      ariaLabel: 'Field ID',
      type: 'select',
      options: [{ value: 'Field1', label: 'Field 1' }, { value: 'Field2', label: 'Field 2' }],
    },
    {
      id: 'staffId',
      placeholder: 'Select staff ID',
      ariaLabel: 'staff ID',
      type: 'select',
      options: [{ value: 'staff1', label: 'staff 1' }, { value: 'staff2', label: 'staff 2' }],
    },
  ];

  const headers = ['ID', 'Name', 'status', 'Type', 'Field', 'Staff'];
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
                  <Button lable="Add New Equipment" onClick={handleModalShow} />
                </div>
                <Table rows={rows} headers={headers} onEdit={handleUpdateModalShow} />
              </GlassCard>
            </div>
          </div>
        </div>
      </BodyContainer>
      {showModal && (
        <ModalPage
          onClose={handleModalHide}
          inputs={EquipmentInputs}
          btnLabel={updateMode ? 'Update Equipment' : 'Add Equipment'}
          title={updateMode ? 'Update Equipment' : 'Add Equipment'}
          onSubmit={handleSubmit}
          formData={formData}
          onInputChange={handleInputChange}
        />
      )}
    </div>
  );
}

export default EquipmentPage
