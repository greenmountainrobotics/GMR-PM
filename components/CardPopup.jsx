import React from 'react';
import PopupPortal from './PopupPortal';

const CardPopup = ({ message, closePopup }) => {
  return(
    <PopupPortal close={closePopup}>
        <h2 className='popup-text'>This is a popup!</h2>
        <p className='popup-text'>{message}</p>
    </PopupPortal>
  );
};

export default CardPopup;