import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {

  const { photos } = props
  
  const photoListItems = photos.map(photo => <PhotoListItem key={photo.id} urls={photo.urls} user={photo.user} location={photo.location}/>) 
  return (
    <ul className="photo-list">
      {photoListItems}
    </ul>
  );
};

export default PhotoList;
