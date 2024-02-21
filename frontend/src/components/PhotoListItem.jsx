import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const {id, imageSource, profile, username, location} = props.sampleDataForPhotoListItem;
  return (
    <article key={`${id}`}>
      <img src={`${imageSource}`}/>
      <footer>
        <img src={`${profile}`}/>
        <p>{`${username}`}</p>
        <p>{`${location.city}, ${location.country}`}</p>
      </footer>
    </article>
  )
};

export default PhotoListItem;
