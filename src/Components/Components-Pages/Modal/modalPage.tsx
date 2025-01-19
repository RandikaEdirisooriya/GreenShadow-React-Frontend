import React from 'react';
import FormControl from './FormControl';

type props={
  onClose: () => void,
  inputs: any,
  btnLabel: string
  title: string

}

function ModalPage({onClose,inputs,btnLabel ,title}:props ) {
  return (
    <div
      className="modal show"
      id="exampleModalLong"
      aria-labelledby="exampleModalLongTitle"
      style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="logo floating">
              <span className="logo-icon">🌳</span>
            </div>
            <br />
            <h1>{title}</h1>
            <button
              type="button"
              className="btn-close"
              style={{ color: 'red' }}
              onClick={onClose} // Close modal on button click
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="login-container1">
              <form>
                <FormControl inputs={inputs}/>
                <button 
                  type="button"
                  className="btn1 btn-primary1 w-100 mb-3"
                  onClick={() => console.log('Add Crop button clicked')}
                >
                 {btnLabel}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPage;
