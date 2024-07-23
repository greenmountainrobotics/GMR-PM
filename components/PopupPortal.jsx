// src/PopupPortal.js

import React from 'react';
import ReactDOM from 'react-dom';

const PopupPortal = ({ children, close }) => {
  return ReactDOM.createPortal(
    <div className="popup_overlay" onClick={close}>
      <div className="popup_modal" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="close-button" onClick={close}>Close</button>
      </div>
    </div>,
    document.body
  );
};

export default PopupPortal;
