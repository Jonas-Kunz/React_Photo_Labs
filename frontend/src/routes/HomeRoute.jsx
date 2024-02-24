import React from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
// the home route mainly serves as a way to pass data to its children TopNavigation and Photolist
// it recieves the photos array, topics array, state, and dispatch from App.jsx
const HomeRoute = (props) => {
  const { photos, topics, state, dispatch } = props;
  return (
    <div className="home-route">
      {/* top navigation recieves topics and state so it can construct the topicsList and so it has info on favourited images*/}
      <TopNavigation topics={topics} state={state} />
      {/*Photo list recieves the photos Data, state, and dispatch*/}
      <PhotoList photos={photos} state={state} dispatch={dispatch} />
    </div>
  );
};

export default HomeRoute;
