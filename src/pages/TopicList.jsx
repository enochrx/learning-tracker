import { dateFormat } from "../utils/dateFormat";

const TopicList = ({ topic }) => {
  const { concept, progress, note, lastStudied } = topic;
  return (
    <li className="card-rows">
      <div className="topic-title">
        <h3>{concept}</h3>
        <div className="progress__bar">
          <div
            className="progress__fill"
            style={{ width: `${progress}%` }}
          ></div>
          <span className="progress__text">{progress}%</span>
        </div>
      </div>
      <p>{note}</p>
      <p>{dateFormat(lastStudied)}</p>
    </li>
  );
};

export default TopicList;
