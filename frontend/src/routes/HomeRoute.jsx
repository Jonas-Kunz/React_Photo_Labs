import React from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  // recieving topics and photos data from <App>
  const { photos, topics, state, dispatch } = props;
  // my state for liked photos

  return (
    <div className="home-route">
      {/* I am passing liked photos to TopNavigation and PhotoList so they can interact with the state */}
      <TopNavigation topics={topics} state={state} />
      <PhotoList photos={photos} state={state} dispatch={dispatch} />
    </div>
  );
};

export default HomeRoute;
