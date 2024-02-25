import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { state, addFavPhoto, removeFavPhoto, photoId } = props;
  const favourites = state.favourites;
  const toggleFavourite = (photo) => {
    favourites[photoId] ? removeFavPhoto(photo) : addFavPhoto(photo);
  };

  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => toggleFavourite(photoId)}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={!!favourites[photoId]}
          displayAlert={!!favourites[photoId]}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
