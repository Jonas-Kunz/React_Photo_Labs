import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
// each photo will contain this component
// it is a button that recieves state, dispatch and the id of the photo
function PhotoFavButton(props) {
  // when the user clicks on the PhotoFavButton the onClick executes handleClick wich simply executes the dispatch with
  // type type "toggleFavourite" and the data being the photoId.
  // and if the photo is in favourites then the Favicon will display red, and if not it will be unfilled.
  const { state, dispatch, photoId } = props;
  const favourites = state.favourites;
  const handleClick = () => {
    dispatch({ type: "toggleFavourite", data: photoId });
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
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
