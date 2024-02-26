import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigation = (props) => {
  const { topics, state, selectTopic } = props;

  const isFavPhotoExist = Object.values(state.favourites).length > 0;
  const handleTopicSelect = (event, topicId) => {
    event.preventDefault();
    selectTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <a
        href="http://localhost:3000/"
        onClick={(event) =>
          handleTopicSelect(event, state.topicData.length + 1)
        }
        style={{ textDecoration: "none" }}
      >
        <span className="top-nav-bar__logo">PhotoLabs</span>
      </a>
      <TopicList topics={topics} selectTopic={selectTopic} />

      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
