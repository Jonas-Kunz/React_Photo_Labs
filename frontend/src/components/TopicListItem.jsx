import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  const { slug, title } = props
  
  return (
    <div className="topic-list__item">
      <a href={slug}><span>{title}</span></a>
    </div>
  );
};

export default TopicListItem;
