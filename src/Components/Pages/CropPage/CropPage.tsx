import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { addItem, updateItem } from '../../../Reducer/slice/CropItem';

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

const CropPage = () => {
  const crops = useSelector((state: RootState) => state.crop.items);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    Category: '',
    CommonName: '',
    SciencetificName: '',
    Image: '',
    Season: '',
    FieldId: '',
    LogId: ''
  });

  const handleInputChange = (id: string, value: string | File) => {
    setFormData(prev => ({
      ...prev,
      [id]: value instanceof File ? value : value,
    }));
  };

  const handleModalShow = () => {
    setFormData({ id: '', Category: '', CommonName: '', SciencetificName: '', Image: '', Season: '', FieldId: '', LogId: '' });
    setUpdateMode(false);
    setShowModal(true);
  };

  const handleUpdateModalShow = (crops: typeof formData) => {
    setFormData(crops);
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

   const rows = crops.map(crop => ({
    id: crop.id,
    Category: crop.Category,
    CommonName: crop.CommonName,
    SciencetificName: crop.SciencetificName,
    Image: crop.Image,
    Season: crop.Season,
    FieldId: crop.FieldId,
    LogId: crop.LogId,
  }));

  const headers = ['ID', 'Category', 'Common Name', 'Scientific Name', 'Image', 'Season', 'Field', 'Log' ];

  const cropInputs = [
    { id: 'id', placeholder: 'ID', ariaLabel: 'ID', style: { backgroundColor: 'rgba(0,230,200,0.08)', color: 'rgba(255,255,255,0.59)' } },
    { id: 'Category', placeholder: 'Category', ariaLabel: 'Category' },
    { id: 'CommonName', placeholder: 'Common Name', ariaLabel: 'Common Name' },
    { id: 'SciencetificName', placeholder: 'Scientific Name', ariaLabel: 'Scientific Name' },
    { id: 'Image', placeholder: 'Select Image', ariaLabel: 'Select Image', type: 'file' },
    {
      id: 'Season',
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
      id: 'FieldId',
      placeholder: 'Select Field ID',
      ariaLabel: 'Field ID',
      type: 'select',
      options: [{ value: 'Field1', label: 'Field 1' }, { value: 'Field2', label: 'Field 2' }],
    },
    {
      id: 'LogId',
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
          inputs={cropInputs}
          btnLabel={updateMode ? 'Update Crop' : 'Add Crop'}
          title={updateMode ? 'Update Crop' : 'Add Crop'}
          onSubmit={handleSubmit}
          formData={formData}
          onInputChange={handleInputChange}
        />
      )}
      </BodyContainer>
    </div>
  );
};

export default CropPage;
