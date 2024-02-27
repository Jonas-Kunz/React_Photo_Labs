import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    location,
    urls,
    user,
    state,
    photoId,
    photo,
    openModal,
    addFavPhoto,
    removeFavPhoto,
    modalClass
  } = props;

  return (
    <article className={`photo-list__item${modalClass}`}>
      <PhotoFavButton
        state={state}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
        photoId={photoId}
        aria-label="click on this button to like the picture"
      />
      <img
        src={urls.regular}
        className={`photo-list__image${modalClass}`}
        alt="main image"
        onClick={() => openModal(photo)}
        aria-label="click on image to view Full Size Image"
      />
      <footer className={`photo-list__user-details${modalClass}`}>
        <img
          src={user.profile}
          className={`photo-list__user-profile${modalClass}`}
          alt={`profile picture of ${user.username}`}
        />
        <div
          className={`photo-list__user-info${modalClass}`}
          aria-label="division containing user information"
        >
          {user.username}
          <div className={`photo-list__user-location${modalClass}`} aria-label="use location">
            {location.city}, {location.country}
          </div>
        </div>
      </footer>
    </article>
  );
};

export default PhotoListItem;
