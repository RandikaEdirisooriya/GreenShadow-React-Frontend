import React from 'react';

interface FormControlProps {
  inputs: {
    id: string;
    placeholder: string;
    ariaLabel: string;
    type?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    options?: { value: string; label: string }[];
  }[];
}

const FormControl: React.FC<FormControlProps> = ({ inputs }) => {
  return (
    <div>
      {inputs.map((input, index) => {
        if (input.type === 'select') {
          return (
            <div className="mb-1" key={index}>
              <select
                className="form-select mb-3"
                id={input.id}
                required
                aria-label={input.ariaLabel}
              >
                <option value="">{input.placeholder}</option>
                {input.options?.map((option, idx) => (
                  <option value={option.value} key={idx}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        if (input.type === 'file') {
          return (
            <div className="mb-1" key={index}>
              <label
                htmlFor={input.id}
                className="form-label me-2"
                style={{ color: 'rgba(0,230,200,0.56)', fontSize: '0.9rem' }}
              >
                {input.placeholder}
              </label>
              <input
                type="file"
                className="form-control1"
                id={input.id}
                required
                aria-label={input.ariaLabel}
              />
            </div>
          );
        }

        return (
          <div className="mb-1" key={index}>
            <input
              type={input.type || 'text'}
              className="form-control1"
              id={input.id}
              placeholder={input.placeholder}
              required
              aria-label={input.ariaLabel}
              disabled={input.disabled}
              style={input.style}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FormControl;
