import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card m-1 p-4">
          <img src={require(`./assets/${props.image}`)} class="card-img-top" alt={`${props.name} Display`} />
          <div className="card-body">
            <h6>{props.name}</h6>
            <p className="card-text">
              <a href="#output" className="projectButton btn btn-success" value={props.index}>Click Here for Details</a>
            </p>
          </div>
          </div>
  );
}

export default Card;
