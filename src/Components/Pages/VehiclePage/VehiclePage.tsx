import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { addItem } from '../../../Reducer/slice/VehicleItem';
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
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    PlateNumber: '',
    Category: '',
    status: '',
    FuelType: '',
    staffId: ''
  });

  const vehicles = useSelector((state: RootState) => state.vehicle.items);
  const dispatch = useDispatch(); // Hook for dispatching actions

  // Handle form input changes
  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission to add vehicle
  const handleSubmit = () => {
    if (Object.values(formData).every(val => val !== '')) {
      dispatch(addItem(formData)); // Dispatching the action to Redux store
      handleModalHide(); // Close modal after submit
    } else {
      alert('Please fill all fields!');
    }
  };

  const handleModalShow = () => setShowModal(true);
  const handleModalHide = () => setShowModal(false);

  const rows = vehicles.map(vehicle => ({
    id: vehicle.id,
    PlateNumber: vehicle.PlateNumber,
    Category: vehicle.Category,
    status: vehicle.status,
    FuelType: vehicle.FuelType,
    staffId: vehicle.staffId
  }));

  const VehicleInputs = [
    { id: 'id', placeholder: 'ID', ariaLabel: 'ID' },
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
                  setFormData={setFormData}
                  handleModalShow={handleModalShow}
                  
                 

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
          btnLabel="Add Vehicle"
          title="Add Vehicle"
          onSubmit={handleSubmit}
          formData={formData}
          onInputChange={handleInputChange}
        />
      )}
    </div>
  );
}

export default VehiclePage;
