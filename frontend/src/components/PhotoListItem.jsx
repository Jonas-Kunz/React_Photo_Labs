import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const {id, imageSource, profile, username, location} = props.sampleDataForPhotoListItem;
  return (
    <article key={id} className="photo-list__item">
      <img src={imageSource} className="photo-list__image"/>
      <footer className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info" >
          {username}
          <div className="photo-list__user-location">{location.city}, {location.country}</div> 
        </div>
      </footer>
    </article>
  )
};

export default PhotoListItem;
