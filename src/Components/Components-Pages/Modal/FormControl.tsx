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
    onInputChange: (id: string, value: string) => void;
}

const FormControl: React.FC<FormControlProps> = ({ inputs, onInputChange }) => {
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
                                onChange={(e) => onInputChange(input.id, e.target.value)}
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
                            onChange={(e) => onInputChange(input.id, e.target.value)}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default FormControl;
