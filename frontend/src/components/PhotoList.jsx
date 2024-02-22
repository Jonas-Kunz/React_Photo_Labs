import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
// PhotoList gets props from the HomeRoute containing the photos array, the toggleLikePhoto function to set the sate, 
//and the likedPhotos object containign any liked photos
const PhotoList = (props) => {
  const { photos, toggleLikePhoto, likedPhotos } = props;
  // inside PhotoList an array photoListItems is created containing a PhotoListItem for each element in the photos array
  // this PhotListItem is given all the information for the specific photo as well as the likedPhotos object, and the toggleLikePhoto function
  // so that each photo can be added or removed from the likedPhoto object
  const photoListItems = photos.map((photo) => (
    <PhotoListItem
      id={photo.id}
      key={photo.id}
      urls={photo.urls}
      user={photo.user}
      location={photo.location}
      likedPhotos={likedPhotos}
      toggleLikePhoto={toggleLikePhoto}
    />
  ));
  return <ul className="photo-list">{photoListItems}</ul>;
};

export default PhotoList;
