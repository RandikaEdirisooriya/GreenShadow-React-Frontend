// components/AddCropButton/AddCropButton.js
import React from 'react';
type Props = {
    onClick: () => void;
   
    lable: string
}
function Button({ onClick,lable }: Props) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
     
      onClick={onClick}
    >
      <i className="bi bi-plus"></i>{lable}
    </button>
  );
}

export default Button;
