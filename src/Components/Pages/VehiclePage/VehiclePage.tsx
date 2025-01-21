import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { addItem, updateItem } from '../../../Reducer/slice/VehicleItem';
import ModalPage from '../../Components-Pages/Modal/modalPage';
import HeaderContainer from '../../HeadersContainer/HeaderContainer';
import BodyContainer from '../../BodyContainer/BodyContainer';
import TitleSection from '../../Components-Pages/TitleComponent/TitleSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Pages.css';
import GlassCard from '../../Components-Pages/GlassCard/GlassCard';
import Button from '../../Components-Pages/Button/Button';
import Table from '../../Components-Pages/Table/Table';

function VehiclePage() {
  const vehicles = useSelector((state: RootState) => state.vehicle.items);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    PlateNumber: '',
    Category: '',
    status: '',
    FuelType: '',
    staffId: ''
  });

  

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleModalShow = () => {
    setFormData({ id: '', PlateNumber: '', Category: '', status: '', FuelType: '', staffId: '' });
    setUpdateMode(false);
    setShowModal(true);
  };

  const handleUpdateModalShow = (vehicle: typeof formData) => {
    setFormData(vehicle);
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

  const rows = vehicles.map(vehicle => ({
    id: vehicle.id,
    PlateNumber: vehicle.PlateNumber,
    Category: vehicle.Category,
    status: vehicle.status,
    FuelType: vehicle.FuelType,
    staffId: vehicle.staffId
  }));

  const VehicleInputs = [
    { id: 'id', placeholder: 'ID', ariaLabel: 'ID', disabled: updateMode },
    { id: 'PlateNumber', placeholder: 'Plate Number', ariaLabel: 'PlateNumber' },
    { id: 'Category', placeholder: 'Category', ariaLabel: 'Category' },
    { id: 'status', placeholder: 'Status', ariaLabel: 'status' },
    {
      id: 'FuelType',
      placeholder: 'Select Fuel Type',
      ariaLabel: 'Fuel',
      type: 'select',
      options: [{ value: 'Petrol', label: 'Petrol' }, { value: 'Diesel', label: 'Diesel' }]
    },
    {
      id: 'staffId',
      placeholder: 'Select Staff ID',
      ariaLabel: 'Staff ID',
      type: 'select',
      options: [{ value: 'staff1', label: 'Staff 1' }, { value: 'staff2', label: 'Staff 2' }]
    }
  ];

  const headers = ['ID', 'Plate Number', 'Category', 'Status', 'Fuel Type', 'Staff ID'];

  return (
    <div>
      <HeaderContainer />
      <BodyContainer>
        <div className="glass-container my-4 p-4">
          <div className="content">
            <TitleSection title="Vehicle" />
            <div className="glass-cards mb-4">
              <GlassCard>
                <h1>Vehicle</h1>
              </GlassCard>
            </div>
            <div className="glass-cards">
              <GlassCard>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Button lable="Add New Vehicle" onClick={handleModalShow} />
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
      </BodyContainer>
      {showModal && (
        <ModalPage
          onClose={handleModalHide}
          inputs={VehicleInputs}
          btnLabel={updateMode ? 'Update Vehicle' : 'Add Vehicle'}
          title={updateMode ? 'Update Vehicle' : 'Add Vehicle'}
          onSubmit={handleSubmit}
          formData={formData}
          onInputChange={handleInputChange}
        />
      )}
    </div>
  );
}

export default VehiclePage;
