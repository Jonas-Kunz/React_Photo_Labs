import React from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  // recieving topics and photos data from <App>
  const {
    photos,
    topics,
    setModalDisplay,
    modalState,
    favourites,
    toggleFavourite,
  } = props;
  // my state for liked photos

  return (
    <div className="home-route">
      {/* I am passing liked photos to TopNavigation and PhotoList so they can interact with the state */}
      <TopNavigation topics={topics} favourites={favourites} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        setModalDisplay={setModalDisplay}
        modalState={modalState}
      />
    </div>
  );
};

export default HomeRoute;
