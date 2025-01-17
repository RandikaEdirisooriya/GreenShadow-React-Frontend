// components/AddCropButton/AddCropButton.js
import React from 'react';
type Props = {
    onClick: () => void;
    modalTarget: string;
    lable: string
}
function Button({ onClick, modalTarget,lable }: Props) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target={modalTarget}
      onClick={onClick}
    >
      <i className="bi bi-plus"></i>{lable}
    </button>
  );
}

export default Button;
