import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
// each photo will contain this component
// it is a button that recieves favourites, toggleFavourites, and the id of the photo
function PhotoFavButton(props) {
  // when the user clicks on the PhotoFavButton the onClick executes handleClick wich simply executes toggleFavourite with the photo id either
  // adding or removing the photo from the likedPhoto object,
  //and if the photo is in favourites then the Favicon will display red, and if not it will be unfilled.
  const { favourites, toggleFavourite, photoId } = props;
  const handleClick = () => {
    toggleFavourite(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={!!favourites[photoId]} displayAlert={!!favourites[photoId]}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
