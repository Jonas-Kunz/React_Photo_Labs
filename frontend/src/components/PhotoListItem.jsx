import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";
// PhotoListItem gets props from PhotoList and creates a photo component
// it also passes likedPhotos and toggleLikePhoto to PhotoFavButton so when users click on the button it alters the likedPhoto object
const PhotoListItem = (props) => {
  const { location, urls, user, likedPhotos, toggleLikePhoto, id, setIsOpen } = props;
 
  return (
    <article className="photo-list__item" onClick={() => setIsOpen(true)}>
      <PhotoFavButton likedPhotos={likedPhotos} toggleLikePhoto={toggleLikePhoto} id={id}/>
      <img src={urls.regular} className="photo-list__image" />
      <footer className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          {user.username}
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </footer>
    </article>
  );
};

export default PhotoListItem;
