import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";
// PhotoListItem gets props from PhotoList and creates a photo component
// it also passes favourites and toggleFavourite to PhotoFavButton so when users click on the button it alters the likedPhoto object
const PhotoListItem = (props) => {
  const { location, urls, user, state, photoId, photo, dispatch } = props;
  const favourites = state.favourites;
  console.log("favourites in photolist item", favourites);
  console.log("state in PhotoListItem:", state);
  console.log("photo in PhotoListItem:", photo);

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
        onClick={() =>
          dispatch({
            type: "setModalState",
            data: { isOpen: true, photo: photo },
          })
        }
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
