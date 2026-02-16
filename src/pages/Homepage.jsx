import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopicList from "./TopicList";
import { useTopics } from "../context/TopicContext";

const Dashboard = () => {
  const { topics } = useTopics();
  const navigate = useNavigate();

  function handleAddTopic(e) {
    e.preventDefault();
    navigate("/newtopic");
  }

  return (
    <div>
      <div className="addbtn">
        <button onClick={handleAddTopic}>Add Topic</button>
      </div>
      <ul className="card-cols">
        {topics.map((topic) => (
          <TopicList key={topic.id} topic={topic} />
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
