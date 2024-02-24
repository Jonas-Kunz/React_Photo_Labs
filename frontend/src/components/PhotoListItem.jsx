import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";
// PhotoListItem gets props from PhotoList and creates a photo component
// it also passes the state and dispatch to PhotoFavButton to Favorite Images
// when the photo is rendered on the home route the modalState will be false eg closed so each photoListItem is rendered
// with a onClick within the image so a user can open a modal to view the full image. If the photoListItem is rendered
// within the modal the onClick is not rendered so that users cannot open a modal within a modal.
const PhotoListItem = (props) => {
  const { location, urls, user, state, photoId, photo, dispatch } = props;
  const isOpen = state.modalState.isOpen;
  // this function is here so that users cannot open a modal within a modal. Becasue nested modals require passing
  // the full photo object to each similar photo which is difficult with the way the photos data is stored.
  const handleOpenModal = () => {
    if (!isOpen) {
      dispatch({
        type: "setModalState",
        data: { isOpen: true, photo: photo },
      });
    }
  };

  return (
    <article className="photo-list__item">
      <PhotoFavButton
        state={state}
        dispatch={dispatch}
        photoId={photoId}
        aria-label="click on this button to like the picture"
      />
      <img
        src={urls.regular}
        className="photo-list__image"
        alt="main image"
        onClick={handleOpenModal}
        aria-label="click on image to view Full Size Image"
      />
      <footer className="photo-list__user-details">
        <img
          src={user.profile}
          className="photo-list__user-profile"
          alt={`profile picture of ${user.username}`}
        />
        <div
          className="photo-list__user-info"
          aria-label="division containing user information"
        >
          {user.username}
          <div className="photo-list__user-location" aria-label="use location">
            {location.city}, {location.country}
          </div>
        </div>
      </footer>
    </article>
  );
};

export default PhotoListItem;
