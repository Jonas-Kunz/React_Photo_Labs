import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, state, openModal, closeModal, removeFavPhoto, addFavPhoto, modalClass } =
    props;

  const photoListItems = photos.map((photo) => (
    <PhotoListItem
      aria-label="list of images"
      photoId={photo.id}
      key={photo.id}
      urls={photo.urls}
      user={photo.user}
      location={photo.location}
      state={state}
      addFavPhoto={addFavPhoto}
      removeFavPhoto={removeFavPhoto}
      closeModal={closeModal}
      openModal={openModal}
      photo={photo}
      modalClass={modalClass}
    />
  ));
  return <ul className={`photo-list${modalClass}`} >{photoListItems}</ul>;
};

export default PhotoList;
