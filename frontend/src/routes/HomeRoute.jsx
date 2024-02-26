import React from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
// the home route mainly serves as a way to pass data to its children TopNavigation and Photolist
// it recieves the photos array, topics array, state, and dispatch from App.jsx
const HomeRoute = (props) => {
  const {
    photos,
    topics,
    state,
    openModal,
    closeModal,
    addFavPhoto,
    removeFavPhoto,
    selectTopic,
  } = props;
  return (
    <div className="home-route">
      <TopNavigation topics={topics} state={state} selectTopic={selectTopic} />

      <PhotoList
        photos={photos}
        state={state}
        openModal={openModal}
        closeModal={closeModal}
        addFavPhoto={addFavPhoto}
        removeFavPhoto={removeFavPhoto}
      />
    </div>
  );
};

export default HomeRoute;
