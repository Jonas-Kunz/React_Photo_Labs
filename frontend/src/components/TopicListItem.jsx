import React from "react";

import "../styles/TopicListItem.scss";
// TopicListItem recieves the props slug and title from TopicList and creates a simple item with a link and title
const TopicListItem = (props) => {
  const { slug, title, selectTopic, topicId } = props;
  const handleTopicSelect = (event, topicId) => {
    event.preventDefault();
    selectTopic(topicId);
  };
  return (
    <div className="topic-list__item">
      <a
        href={slug}
        style={{ textDecoration: "none" }}
        onClick={(event) => handleTopicSelect(event, topicId)}
      >
        <span>{title}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
