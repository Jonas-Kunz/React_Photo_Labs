import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, selectTopic } = props;

  const topicItems = topics.map((topic) => (
    <TopicListItem
      key={topic.id}
      topicId={topic.id}
      slug={topic.slug}
      title={topic.title}
      selectTopic={selectTopic}
    />
  ));

  return <div className="top-nav-bar__topic-list">{topicItems}</div>;
};

export default TopicList;
