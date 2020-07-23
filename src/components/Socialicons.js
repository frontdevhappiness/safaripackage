import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Social.css";

const Socialicons = () => {
  return (
    <Fragment>
      <span className="d-inline">
        <Link to="/" className="icon d-inline">
          <FontAwesomeIcon icon={["fab", "far fa-envelope"]} size="lg" />
        </Link>
      </span>
      <span className="d-inline">
        <Link to="/" className="icon">
          <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
        </Link>
      </span>
      <span className="d-inline">
        <Link to="/" className="icon">
          <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
        </Link>
      </span>
    </Fragment>
  );
};

export default Socialicons;
