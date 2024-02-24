import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
// PhotoList gets props from the HomeRoute containing the photos array, state, and dispatch
const PhotoList = (props) => {
  const { photos, state, dispatch } = props;
  // inside PhotoList an array photoListItems is created containing a PhotoListItem for each element in the photos array
  // this PhotListItem is given all the information for the specific photo as well as the state and dispatch.
  const photoListItems = photos.map((photo) => (
    <PhotoListItem
      aria-label="list of images"
      photoId={photo.id}
      key={photo.id}
      urls={photo.urls}
      user={photo.user}
      location={photo.location}
      state={state}
      dispatch={dispatch}
      photo={photo}
    />
  ));
  return <ul className="photo-list">{photoListItems}</ul>;
};

export default PhotoList;
