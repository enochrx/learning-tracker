import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import { useTopics } from "../context/TopicContext";

const CreateTopic = () => {
  const { createTopic } = useTopics();
  const [concept, setConcept] = useState("");
  const [note, setNote] = useState("");
  const [lastStudied, setLastStudied] = useState(new Date());

  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!concept && !progress) return;

    const newTopic = {
      concept,
      progress,
      lastStudied,
      note,
    };

    await createTopic(newTopic);
    navigate("/");
  }

  return (
    <div className="form">
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="Topic">Current Topic</label>
          <input
            type="text"
            placeholder="What are you currently learning?"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
          />
        </div>
        <div className="row">
          <label htmlFor="Topic">Last Studied on</label>
          <DatePicker
            id="date"
            selected={lastStudied}
            onChange={(lastStudied) => setLastStudied(lastStudied)}
            dateFormat="dd/MM/yyyy"
          />
          {/* <input
            type="text"
            placeholder="Last time you learnt this concept?"
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
          /> */}
        </div>
        <div className="row">
          <label htmlFor="Progress">Progress</label>
          <div className="progress">
            <input
              type="number"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
            <div className="progress__bar">
              <div
                className="progress__fill"
                style={{ width: `${progress}%` }}
              ></div>
              <span className="progress__text">{progress}%</span>
              {/* <progress value={progress} max={100}></progress>
              <span>{progress}%</span> */}
            </div>
          </div>
        </div>
        <div className="row">
          <label htmlFor="note">Note</label>
          <input
            type="text"
            placeholder="What have you learned?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div>
          <button>Add</button>
        </div>
        <Link to="/">Back to Homepage</Link>
      </form>
    </div>
  );
};

export default CreateTopic;
