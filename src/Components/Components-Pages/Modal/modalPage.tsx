import React from 'react';
import FormControl from './FormControl';

type InputField = {
  id: string; 
  label: string; 
  type: string; 
  placeholder?: string; 
};

type Props = {
  onClose: () => void;
  inputs: any;
  btnLabel: string;
  title: string;
  onInputChange: (id: string, value: string) => void; 
  onSubmit: () => void; 
  formData: Record<string, string>; 
};

const ModalPage: React.FC<Props> = ({
  onClose,
  inputs,
  btnLabel,
  title,
  onInputChange,
  onSubmit,
  formData,
}) => {
  const handleInputChange = (id: string, value: string) => {
    onInputChange(id, value);
  };

  const handleSubmit = () => {
    onSubmit();
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
              onClick={onClose}
            />
          </div>
          <div className="modal-body">
            <FormControl
              inputs={inputs.map((input: InputField) => ({
                ...input,
                value: formData[input.id] || "",
              }))}
              onInputChange={handleInputChange}
            />
            <button className="btn btn-primary w-100" onClick={handleSubmit}>
              {btnLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPage;
