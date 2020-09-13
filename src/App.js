import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Who from "./Who";
import When from "./When";
import Where from "./Where";
import What from "./What";
import Output from "./Output";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Who} />
      <Route path="/what" component={What} />
      <Route path="/when" component={When} />
      <Route path="/where" component={Where} />
      <Route path="/output" component={Output} />
    </Router>
  );
}

export default App;
