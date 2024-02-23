import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
// PhotoList gets props from the HomeRoute containing the photos array, the toggleFavourite function to set the sate, 
//and the favourites object containign any liked photos
const PhotoList = (props) => {
  const { photos, toggleFavourite, favourites, setModalDisplay, modalState } = props;
  // inside PhotoList an array photoListItems is created containing a PhotoListItem for each element in the photos array
  // this PhotListItem is given all the information for the specific photo as well as the favourites object, and the toggleFavourite function
  // so that each photo can be added or removed from the likedPhoto object
  const photoListItems = photos.map((photo) => (
    <PhotoListItem
      aria-label="list of images"
      photoId={photo.id}
      key={photo.id}
      urls={photo.urls}
      user={photo.user}
      location={photo.location}
      favourites={favourites}
      toggleFavourite={toggleFavourite}
      setModalDisplay={setModalDisplay}
      modalState={modalState}
      photo={photo}
    />
  ));
  return <ul className="photo-list">{photoListItems}</ul>;
};

export default PhotoList;
