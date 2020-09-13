import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Output() {
  const output = useSelector((state) => state);

  return (
    <div>
      <p className="lead">
        {output.who} {output.what} {output.where} {output.when}
      </p>
      <Link to="/">
        <i className="fa fa-repeat mr-2"></i>Back to start
      </Link>
    </div>
  );
}

export default Output;
