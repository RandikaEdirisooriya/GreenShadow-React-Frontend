import React from 'react';

interface FormControlProps {
    inputs: {
        id: string;
        placeholder: string;
        ariaLabel: string;
        type?: string;
        disabled?: boolean;
        style?: React.CSSProperties;
        options?: { value: string; label: string }[]; // For select options
        value?: string;
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
                                value={input.value || ""} // Pre-fill value
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

                // Handle file input type
                if (input.type === 'file') {
                    return (
                        <div className="mb-1" key={index}>
                            <input
                                type="file"
                                className="form-control1"
                                id={input.id}
                                required
                                aria-label={input.ariaLabel}
                                disabled={input.disabled}
                                style={input.style}
                                onChange={(e) => onInputChange(input.id, e.target.files ? e.target.files[0].name : '')}
                            />
                        </div>
                    );
                }

                // Handle other types of input (text, etc.)
                return (
                    <div className="mb-1" key={index}>
                        <input
                            type={input.type || 'text'}
                            className="form-control1"
                            id={input.id}
                            placeholder={input.placeholder}
                            required
                            aria-label={input.ariaLabel}
                            value={input.value || ""}
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
