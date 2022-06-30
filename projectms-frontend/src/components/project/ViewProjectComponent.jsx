import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectService from "../../services/ProjectService";

class ViewProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      project: {},
    };
  }

  componentDidMount() {
    ProjectService.getProjectById(this.state.id).then((res) => {
      this.setState({ project: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Project Details</h3>
          <div className="card-body">
            <div className="row">
              <label>Name: </label>
              <div>{this.state.project.projectName}</div>
            </div>
            <div className="row">
              <label>Description: </label>
              <div>{this.state.project.projectDesc}</div>
            </div>
            <div className="row">
              <label>Start Date: </label>
              <div>{this.state.project.projectStartDate}</div>
            </div>
            <div className="row">
              <label>Due Date: </label>
              <div>{this.state.project.projectDueDate}</div>
            </div>
            <div className="row">
              <label>City:</label>
              <div>{this.state.project.projectCity}</div>
            </div>
            <div className="row">
              <label>Street Address:</label>
              <div>{this.state.project.projectStreet}</div>
            </div>
            <div className="row">
              <label>Province:</label>
              <div>{this.state.project.projectProv}</div>
            </div>
            <div className="row">
              <label>Postal Code:</label>
              <div>{this.state.project.projectPostalCode}</div>
            </div>
            <div className="row">
              <label>Status:</label>
              <div>{this.state.project.projectStatus}</div>
            </div>
            <div className="row">
              <label>Client:</label>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default ViewEmployeeComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  let match = { params: useParams() };
  return <ViewProjectComponent {...props} navigate={navigate} match={match} />;
}

export default WithNavigate;
