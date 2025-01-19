import React from 'react';
import FormControl from './FormControl';

type Props = {
    onClose: () => void;
    inputs: any; // Array of input fields
    btnLabel: string;
    title: string;
    onInputChange: (id: string, value: string) => void; // Function to handle input changes
    onSubmit: () => void; // Function to handle form submission
    formData: any; // Holds form data to pre-fill fields
};

const ModalPage: React.FC<Props> = ({ onClose, inputs, btnLabel, title, onInputChange, onSubmit, formData }) => {
    // Handle input changes within the modal
    const handleInputChange = (id: string, value: string) => {
        onInputChange(id, value); // Call the parent component's input change handler
    };

    const handleSubmit = () => {
        onSubmit(); // Call the parent component's submit handler
    };

    return (
        <div
            className="modal show"
            style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        
                        <h1>{title}</h1>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose} // Close the modal
                        />
                    </div>
                    <div className="modal-body">
                        {/* Render form controls dynamically based on inputs */}
                        <FormControl 
                            inputs={inputs}
                           
                            onInputChange={handleInputChange}
                        />
                        <button className="btn btn-primary w-100" onClick={handleSubmit}>
                            {btnLabel} {/* Button label passed as prop */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPage;
