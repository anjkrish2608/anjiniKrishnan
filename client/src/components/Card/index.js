import React, {Route, Link} from "react";
import "./style.css";
import Output from "../../pages/Output";

function Card(props) {
  return (
    <div className="card m-1 p-4">
          <img src={require(`./assets/${props.image}`)} className="card-img-top" alt={`${props.name} Display`} />
          <div className="card-body">
            <h6>{props.name}</h6>
            <p className="card-text">
              {/* <Link to="/portfolio/output" role="button" className="projectButton btn btn-success" value={props.index}>Click Here for Details</Link>
            <Route exact path="/portfolio/output" component={Output}></Route> */}
            </p>
          </div>
          </div>
  );
}

export default Card;
