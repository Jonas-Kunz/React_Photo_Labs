import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { setModalDisplay, modalState, favourites, toggleFavourite } = props;
  const { photoId, location, similar_photos, urls, user } = modalState.photo;
  const similar_photosArray = Object.values(similar_photos);

  return (
    <div className="photo-details-modal">
      <header className="photo-details-modal__top-bar">
        <button
          className="photo-details-modal__close-button"
          onClick={() => setModalDisplay({ isOpen: false })}
          aria-label="close modal button"
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </header>
      <main className="photo-details-modal__images">
        <section>
          <PhotoFavButton
            favourites={favourites}
            toggleFavourite={toggleFavourite}
            photoId={photoId}
            aira-label="like Photo Button"
          />
          <img
            src={urls.full}
            className="photo-details-modal__image"
          />
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
            favourites={favourites}
            toggleFavourite={toggleFavourite}
          />
        </section>
      </main>
    </div>
  );
};

export default PhotoDetailsModal;
