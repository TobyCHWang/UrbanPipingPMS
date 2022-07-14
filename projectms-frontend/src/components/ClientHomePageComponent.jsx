import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./HomePageComponent.css";

class ClientHomePageComponent extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <nav>
          <Link to="/projects">Project</Link>
          <br />
          <Link to="/tasks">Task</Link>
          <br />
          <Link to="/gantt">Gantt</Link>
          <br />
          <Link to="/tickets">Tickets</Link>
          <br />
        </nav>
      </div>
    );
  }
}

export default ClientHomePageComponent;
