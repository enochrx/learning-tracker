import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateTopic = () => {
  const [inputTopic, setInputTopic] = useState("");
  const [note, setNote] = useState("");
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputTopic && !progress) return;
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="Topic">Current Topic</label>
          <input
            type="text"
            value={inputTopic}
            onChange={(e) => setInputTopic(e.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor="Progress">Progress</label>
          <div className="progress">
            <input
              type="number"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
            <div>
              <progress value={progress} max={100}></progress>
              <span>{progress}%</span>
            </div>
          </div>
        </div>
        <div className="row">
          <label htmlFor="note">Note</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div>
          <button>Add</button>
        </div>
        <Link to="/">⇦Back to Homepage</Link>
      </form>
    </div>
  );
};

export default CreateTopic;
