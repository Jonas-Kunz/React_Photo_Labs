import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { state, dispatch, photos } = props;
  const { id, location, similar_photos, urls, user } = state.modalState.photo;
  console.log("photos in Modal", photos);
  // console.log("if this shows state has gotten to here", state.modalState);

  const similar_photosArray = Object.values(similar_photos);
  console.log("similar Photos array in Modal", similar_photosArray);

  return (
    <div className="photo-details-modal">
      <header className="photo-details-modal__top-bar">
        <button
          className="photo-details-modal__close-button"
          onClick={() =>
            dispatch({
              type: "setModalState",
              data: { isOpen: false, photo: null },
            })
          }
          aria-label="close modal button"
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </header>
      <main className="photo-details-modal__images">
        <section>
          <PhotoFavButton
            state={state}
            dispatch={dispatch}
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
            state={state}
            dispatch={dispatch}
          />
        </section>
      </main>
    </div>
  );
};

export default PhotoDetailsModal;
