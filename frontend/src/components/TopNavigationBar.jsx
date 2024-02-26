import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  // recieves the topics data and state props
  const { topics, state, selectTopic } = props;
  // if the favourites object has any values isFavPhotExist is set true else false
  const isFavPhotoExist = Object.values(state.favourites).length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <TopicList topics={topics} selectTopic={selectTopic} />

      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
