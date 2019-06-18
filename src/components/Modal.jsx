import React from 'react';

const Modal = ( { onClose } ) => { 
  const title = 'Congratulations'; 
  const message = 'You have successfully passed the registration';
  return (
    <div className="modal-window">
      <div className="modal-content">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        <button type="button" className="close-window" onClick={ onClose }>Ok</button>
      </div>
      <div className="modal-overlay" />
    </div>
  );
}

export default Modal;
