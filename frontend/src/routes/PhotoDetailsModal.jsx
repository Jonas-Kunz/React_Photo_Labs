import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { setModalDisplay } = props
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setModalDisplay(false)} >
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
