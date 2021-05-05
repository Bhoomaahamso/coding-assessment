import React from "react";
import "./DataList.css";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";

const DataList = ({ list }) => {
  const span = (
    <span className="dark">
      <LockIcon />
    </span>
  );
  const hide = list.title === "Introduction";

  const displayList = list.images.map((li) => {
    if (li.head === "Warmup Puzzles") {
      return (
        <Link to="/Warmup_Puzzles" className="warmup">
          <div className="card-area">
            <div className="card">
              <span
                className="image"
                style={{ backgroundImage: `url(${li.link})` }}
              >
                {!hide && span}
              </span>
              <div className="card-text">
                <h4>{li.head}</h4>
                <p>{li.text}</p>
              </div>
            </div>
          </div>
        </Link>
      );
    } else {
      return (
        <div className="card-area">
          <div className="card">
            <span
              className="image"
              style={{ backgroundImage: `url(${li.link})` }}
            >
              {!hide && span}
            </span>
            <div className="card-text">
              <h4>{li.head}</h4>
              <p>{li.text}</p>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="datalist">
      <div className="head">
        <div className="num">
          <span className="avatar">{list.nos}</span>
        </div>
        <div className="info">
          <div className="title">
            <h3>{list.title}</h3>
          </div>
          <div className="description">
            <p>{list.description}</p>
          </div>
        </div>
      </div>
      <div className="cards">{displayList}</div>
    </div>
  );
};

export default DataList;
