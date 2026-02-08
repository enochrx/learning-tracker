import { useNavigate } from "react-router-dom";
import TopicList from "./TopicList";
import { useState } from "react";

const topicData = [
  {
    id: crypto.randomUUID(),
    concept: "Redux",
    progress: 80,
    lastStudied: new Date().toISOString(),
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    concept: "Tailwind CSS",
    progress: 40,
    lastStudied: new Date(),
    createdAt: new Date(),
  },
];

const Dashboard = () => {
  const [topics, setTopics] = useState(topicData);
  const navigate = useNavigate();

  function handleAddTopic(e) {
    e.preventDefault();
    navigate("/newtopic");
  }

  return (
    <div>
      {topics.map((topic) => (
        <TopicList key={topic.id} topic={topic} />
      ))}
      <button onClick={handleAddTopic}>Add Topic</button>
    </div>
  );
};

export default Dashboard;
