import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  // recieves the topics data and favourites object as props
  const { topics, favourites } = props;
  // if the favourites object has any values isFavPhotExist is set true else false
  const isFavPhotoExist = Object.values(favourites).length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {/* passing the topics data to TopicList to render all topics within */}
      <TopicList topics={topics} />
      {/*passing isFavPhotoExist to the FavBadge so it will alert when a photo is liked */}
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
