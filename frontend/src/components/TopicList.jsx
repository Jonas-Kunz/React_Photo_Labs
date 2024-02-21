import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
// import topics from "../mocks/topics";

const TopicList = (props) => {
  const { topics } = props;
  const topicItems = topics.map((topic) => (
    <TopicListItem key={topic.id} slug={topic.slug} title={topic.title} />
  ));

  return <div className="top-nav-bar__topic-list">{topicItems}</div>;
};

export default TopicList;
