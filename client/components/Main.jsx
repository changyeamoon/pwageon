import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";

// Components
const Main = ({ changeMessageBody, displayPigi, incrementPigi }) => {
  return (
    <div>
      <div className="header" />
      <img
        className="signin"
        src={displayPigi.image}
        style={{ width: "355px", align: "center" }}
      />
      <button onClick={incrementPigi}>Next Pigeon</button>
      <h1 className="signin">{displayPigi.name}</h1>
      <div className="stats">
        <p>Speed : {displayPigi.speed}</p>
        <p>Stamina : {displayPigi.stamina}</p>
        <p>Success : {displayPigi.success}</p>
      </div>
      <div>
        <Link to="/compose" style={{ textDecoration: "none" }}>
          <button className="message">Prepare Message</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
