import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";
// PhotoListItem gets props from PhotoList and creates a photo component
// it also passes favourites and toggleFavourite to PhotoFavButton so when users click on the button it alters the likedPhoto object
const PhotoListItem = (props) => {
  const {
    location,
    urls,
    user,
    favourites,
    toggleFavourite,
    photoId,
    setModalDisplay,
    photo,
  } = props;
  // console.log("photo Object", photo);
  return (
    <article className="photo-list__item">
      <PhotoFavButton
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        photoId={photoId}
        aria-label="click on this button to like the picture"
      />
      <img
        src={urls.regular}
        className="photo-list__image"
        alt="main image"
        onClick={() => setModalDisplay({ isOpen: true, photo: photo })}
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
