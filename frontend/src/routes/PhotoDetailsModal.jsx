import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { setModalDisplay, modalState, likedPhotos, toggleLikePhoto } = props;
  const { id, location, similar_photos, urls, user } = modalState.photo;
  const similar_photosArray = Object.values(similar_photos);
  console.log(similar_photosArray);
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={() => setModalDisplay({isOpen: false})} >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <div className="photo-details-modal__images">
        <article className="photo-details-modal__photographer-info" >
          <PhotoFavButton likedPhotos={likedPhotos} toggleLikePhoto={toggleLikePhoto} id={id}/>
          <img src={urls.full} className="photo-details-modal__image" onClick={() => setModalDisplay({isOpen: true, photo: photo})}/>
          <footer className="photo-details-modal__photographer-details">
            <img src={user.profile} className="photo-details-modal__photographer-profile" />
            <div className="photo-details-modal__photographer-info">
              {user.username}
              <div className="photo-details-modal__photographer-location">
                {location.city}, {location.country}
              </div>
            </div>
          </footer>
        </article>
        
      </div>
      <div className="photo-details-modal__images">
        <header className="photo-details-modal__header">
          <b>Similar Photos</b>
        </header>
        <PhotoList
          photos={similar_photosArray}
          likedPhotos={likedPhotos}
          toggleLikePhoto={toggleLikePhoto}
          setModalDisplay={setModalDisplay}
          modalState={modalState}
        />
      </div>
      
    </div>
  )
};

export default PhotoDetailsModal;
