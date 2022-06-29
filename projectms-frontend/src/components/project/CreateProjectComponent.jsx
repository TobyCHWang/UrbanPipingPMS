import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProjectService from "../../services/ProjectService";

class CreateProjectComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      projectName: "",
      projectDesc: "",
      projectStartDate: "",
      projectDueDate: "",
      projectCity: "",
      projectStreet: "",
      projectProv: "",
      projectPostalCode: "",
      projectStatus: "",
    };

    this.changeProjectNameHandler = this.changeProjectNameHandler.bind(this);
    this.changeProjectDescHandler = this.changeProjectDescHandler.bind(this);
    this.changeProjectStartDateHandler =
      this.changeProjectStartDateHandler.bind(this);
    this.changeProjectDueDateHandler =
      this.changeProjectDueDateHandler.bind(this);
    this.changeProjectCityHandler = this.changeProjectCityHandler.bind(this);
    this.changeProjectStreetHandler =
      this.changeProjectStreetHandler.bind(this);
    this.changeProjectProvHandler = this.changeProjectProvHandler.bind(this);
    this.changeProjectPostalCodeHandler =
      this.changeProjectPostalCodeHandler.bind(this);
    this.changeProjectStatusHandler =
      this.changeProjectStatusHandler.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_addProject") {
      return;
    } else {
      ProjectService.getProjectById(this.state.id).then((res) => {
        let project = res.data;
        this.setState({
          projectName: project.projectName,
          projectDesc: project.projectDesc,
          projectStartDate: project.projectStartDate,
          projectDueDate: project.projectDueDate,
          projectCity: project.projectCity,
          projectStreet: project.projectStreet,
          projectProv: project.projectProv,
          projectPostalCode: project.projectPostalCode,
          projectStatus: project.projectStatus,
        });
      });
    }
  }

  changeProjectNameHandler = (event) => {
    this.setState({ projectName: event.target.value });
  };

  changeProjectDescHandler = (event) => {
    this.setState({ projectDesc: event.target.value });
  };

  changeProjectStartDateHandler = (event) => {
    this.setState({ projectStartDate: event.target.value });
  };

  changeProjectDueDateHandler = (event) => {
    this.setState({ projectDueDate: event.target.value });
  };

  changeProjectCityHandler = (event) => {
    this.setState({ projectCity: event.target.value });
  };

  changeProjectStreetHandler = (event) => {
    this.setState({ projectStreet: event.target.value });
  };

  changeProjectProvHandler = (event) => {
    this.setState({ projectProv: event.target.value });
  };

  changeProjectPostalCodeHandler = (event) => {
    this.setState({ projectPostalCode: event.target.value });
  };

  changeProjectStatusHandler = (event) => {
    this.setState({ projectStatus: event.target.value });
  };

  save = (e) => {
    e.preventDefault();

    let project = {
      projectName: this.state.projectName,
      projectDesc: this.state.projectDesc,
      projectStartDate: this.state.projectStartDate,
      projectDueDate: this.state.projectDueDate,
      projectCity: this.state.projectCity,
      projectStreet: this.state.projectStreet,
      projectProv: this.state.projectProv,
      projectPostalCode: this.state.projectPostalCode,
      projectStatus: this.state.projectStatus,
    };
    // console.log('employee =>' + JSON.stringify(employee));

    if (this.state.id === "_addProject") {
      ProjectService.createProject(project).then((res) => {
        this.props.navigate(`/projects`);
      });
    } else {
      ProjectService.updateProject(project, this.state.id).then((res) => {
        this.props.navigate(`/projects`);
      });
    }
  };

  cancel() {
    this.props.navigate(`/projects`);
  }

  getTitle() {
    if (this.state.id === "_addProject") {
      return <h3 className="text-center">Add Project</h3>;
    } else {
      return <h3 className="text-center">Update Project</h3>;
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Name: </label>
                    <input
                      placeholder="Project Name"
                      name="projectName"
                      className="form-control"
                      value={this.state.projectName}
                      onChange={this.changeProjectNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description: </label>
                    <input
                      placeholder="Project Description"
                      name="projectDesc"
                      className="form-control"
                      value={this.state.projectDesc}
                      onChange={this.changeProjectDescHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Start Date: </label>
                    <input
                      placeholder="Project Start Date"
                      input
                      type="Date"
                      name="projectStartDate"
                      className="form-control"
                      value={this.state.projectStartDate}
                      onChange={this.changeProjectStartDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Due Date: </label>
                    <input
                      placeholder="Project Due Date"
                      input
                      type="Date"
                      name="projectDueDate"
                      className="form-control"
                      value={this.state.projectDueDate}
                      onChange={this.changeProjectDueDateHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>City: </label>
                    <input
                      placeholder="Project City"
                      name="projectCity"
                      className="form-control"
                      value={this.state.projectCity}
                      onChange={this.changeProjectCityHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Street Address: </label>
                    <input
                      placeholder="Project Street"
                      name="projectStreety"
                      className="form-control"
                      value={this.state.projectStreet}
                      onChange={this.changeProjectStreetHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Province: </label>
                    <input
                      placeholder="project Province"
                      name="projectProv"
                      className="form-control"
                      value={this.state.projectProv}
                      onChange={this.changeProjectProvHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Postal Code: </label>
                    <input
                      placeholder="Project Postal Code"
                      name="projectPostalCode"
                      className="form-control"
                      value={this.state.projectPostalCode}
                      onChange={this.changeProjectPostalCodeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Status: </label>
                    <input
                      placeholder="Status"
                      name="projectStatus"
                      className="form-control"
                      value={this.state.projectStatus}
                      onChange={this.changeProjectStatusHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Client: </label>
                    <input
                      placeholder="Client"
                      name="Client"
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
            </div>
            <button className="btn btn-success" onClick={this.save}>
              Save
            </button>
            <button className="btn btn-danger" onClick={this.cancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// export default CreateEmployeeComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  let match = { params: useParams() };
  return (
    <CreateProjectComponent {...props} navigate={navigate} match={match} />
  );
}

export default WithNavigate;
