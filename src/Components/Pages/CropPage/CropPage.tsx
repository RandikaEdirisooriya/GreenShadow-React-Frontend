import React, { useState } from 'react';
import HeaderContainer from '../../HeadersContainer/HeaderContainer';
import BodyContainer from '../../BodyContainer/BodyContainer';
import TitleSection from '../../Components-Pages/TitleComponent/TitleSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Pages.css';
import GlassCard from '../../Components-Pages/GlassCard/GlassCard';
import AddCropButton from '../../Components-Pages/Button/Button';
import Table from '../../Components-Pages/Table/Table';
import ModalPage from '../../Components-Pages/Modal/modalPage';
import FormControl from '../../Components-Pages/Modal/FormControl';

const CropPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalHide = () => setShowModal(false);

  const rows: Record<string, string | number>[] = [];
  const headers = ['ID', 'Category', 'Common Name', 'Scientific Name', 'Image', 'Season', 'Field', 'Log', 'Actions'];

  const cropInputs = [
    { id: 'cropId', placeholder: 'ID', ariaLabel: 'ID', disabled: true, style: { backgroundColor: 'rgba(0,230,200,0.08)', color: 'rgba(255,255,255,0.59)' } },
    { id: 'category', placeholder: 'Category', ariaLabel: 'Category' },
    { id: 'commonName', placeholder: 'Common Name', ariaLabel: 'Common Name' },
    { id: 'scientificName', placeholder: 'Scientific Name', ariaLabel: 'Scientific Name' },
    { id: 'image', placeholder: 'Select Image', ariaLabel: 'Select Image', type: 'file' },
    {
      id: 'season',
      placeholder: 'Select Season',
      ariaLabel: 'Season',
      type: 'select',
      options: [
        { value: 'Spring', label: 'Spring' },
        { value: 'Summer', label: 'Summer' },
        { value: 'Monsoon', label: 'Monsoon' },
        { value: 'Autumn', label: 'Autumn' },
        { value: 'Winter', label: 'Winter' },
        { value: 'Harvest', label: 'Harvest' },
      ],
    },
    {
      id: 'field',
      placeholder: 'Select Field ID',
      ariaLabel: 'Field ID',
      type: 'select',
      options: [{ value: 'Field1', label: 'Field 1' }, { value: 'Field2', label: 'Field 2' }],
    },
    {
      id: 'log',
      placeholder: 'Select Log ID',
      ariaLabel: 'Log ID',
      type: 'select',
      options: [{ value: 'Log1', label: 'Log 1' }, { value: 'Log2', label: 'Log 2' }],
    },
  ];


  return (
    <div>
      <HeaderContainer />
      <BodyContainer>
        <div className="glass-container my-4 p-4">
          <div className="content">
            <TitleSection title="Crop" />

            <div className="glass-cards mb-4">
              <GlassCard>
                <h1>Crop</h1>
              </GlassCard>
            </div>

            <div className="glass-cards">
              <GlassCard>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <AddCropButton
                    lable="Add New Crop"
                    onClick={handleModalShow} 
                  />
                  
                </div>
                <Table rows={rows} headers={headers} />
              </GlassCard>
            </div>
          </div>
        </div>
        {showModal && (
                    <ModalPage onClose={handleModalHide} inputs={cropInputs} btnLabel="Add Crop" title="Add Crop"/>
                      
                  )}
      </BodyContainer>
    </div>
  );
};

export default CropPage;
