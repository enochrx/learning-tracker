const TopicList = ({ topic }) => {
  return (
    <div>
      <h3>{topic.concept}</h3>
      <progress value={topic.progress} max="100"></progress>
      <span>{topic.progress}%</span>
    </div>
  );
};

export default TopicList;
