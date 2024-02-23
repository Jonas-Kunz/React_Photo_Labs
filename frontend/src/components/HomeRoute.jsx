import React, { useCallback, useState, useEffect } from "react";

import TopNavigation from "./TopNavigationBar";
import PhotoList from "./PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  // recieving topics and photos data from <App>
  const { photos, topics } = props;
  // my state for liked photos
  const [favourites, setfavourites] = useState([]);
  // toggle like function to set state
  const toggleFavourite = (photoId) => {
    setfavourites((currentfavourites) => {
      // spread currentfavourites to keep immutability
      const updatedfavourites = {
        ...currentfavourites,
      };
      // if the photo is liked clicking the like button will delete the key
      // if the photo isnt liked create a key with value of true
      if (updatedfavourites[photoId]) {
        delete updatedfavourites[photoId];
      } else {
        updatedfavourites[photoId] = true;
      }
      // return and update favourites
      return updatedfavourites;
    });
  };
  // console log the liked photo object on change for debugging
  useEffect(() => {
    console.log("updated favourites:", favourites);
  }, [favourites]);

  return (
    <div className="home-route">
      {/* i am passing liked photos to TopNavigation and PhotoList so they can interact wit the state */}
      <TopNavigation topics={topics} favourites={favourites} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;
