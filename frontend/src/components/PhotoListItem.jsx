import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';
// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const PhotoListItem = (props) => {
  const { location, urls, user } = props
  return (
    <article  className="photo-list__item">
      <PhotoFavButton/>
      <img src={urls.regular} className="photo-list__image"/>
      <footer className="photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile"/>
        <div className="photo-list__user-info" >
          {user.username}
          <div className="photo-list__user-location">{location.city}, {location.country}</div> 
        </div>
      </footer>
    </article>
  )
};

export default PhotoListItem;
