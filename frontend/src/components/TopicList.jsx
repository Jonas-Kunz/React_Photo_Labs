import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// TopicList recieves the topics data from TopNavigation and performs a map transformation on the topics array
// and creates an array of topicItems containing a TopicListItem for every topic within topics, this array is then rendered within TopicList
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
