import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { state, openModal, closeModal, addFavPhoto, removeFavPhoto, photos } =
    props;
  const { id, location, similar_photos, urls, user } = state.modalState;
  const similar_photosArray = Object.values(similar_photos).map((photo) => {
    const photoObj = photos.find((ph) => ph.id === photo.id);
    return photoObj;
  });

  return (
    <div className="photo-details-modal">
      <header className="photo-details-modal__top-bar">
        <button
          className="photo-details-modal__close-button"
          onClick={() => closeModal(null)}
          aria-label="close modal button"
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </header>
      <main className="photo-details-modal__images">
        <section>
          <PhotoFavButton
            state={state}
            addFavPhoto={addFavPhoto}
            removeFavPhoto={removeFavPhoto}
            photoId={id}
            aira-label="like Photo Button"
          />
          <img src={urls.full} className="photo-details-modal__image" />
          <footer className="photo-details-modal__photographer-details">
            <img
              src={user.profile}
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info">
              {user.username}
              <div className="photo-details-modal__photographer-location">
                {location.city}, {location.country}
              </div>
            </div>
          </footer>
        </section>
        <section>
          <header className="photo-details-modal__header">
            <h3>Similar Photos</h3>
          </header>
          <PhotoList
            aria-label="list of similar photos"
            photos={similar_photosArray}
            openModal={openModal}
            closeModal={closeModal}
            addFavPhoto={addFavPhoto}
            removeFavPhoto={removeFavPhoto}
            state={state}
          />
        </section>
      </main>
    </div>
  );
};

export default PhotoDetailsModal;
