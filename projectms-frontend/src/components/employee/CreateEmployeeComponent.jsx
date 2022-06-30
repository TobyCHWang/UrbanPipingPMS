import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
      contact: "",
      location: "",
      role: "",
      department: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeContactHandler = this.changeContactHandler.bind(this);
    this.changeLocationHandler = this.changeLocationHandler.bind(this);
    this.changeRoleHandler = this.changeRoleHandler.bind(this);
    this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          firstName: employee.employeeFirstName,
          lastName: employee.employeeLastName,
          emailId: employee.employeeEmail,
          contact: employee.employeeContact,
          location: employee.employeeLocation,
          role: employee.employeeRole,
          department: employee.employeeDept,
        });
      });
    }
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeContactHandler = (event) => {
    this.setState({ contact: event.target.value });
  };

  changeLocationHandler = (event) => {
    this.setState({ location: event.target.value });
  };

  changeRoleHandler = (event) => {
    this.setState({ role: event.target.value });
  };

  changeDepartmentHandler = (event) => {
    this.setState({ department: event.target.value });
  };

  save = (e) => {
    e.preventDefault();

    let employee = {
      employeeFirstName: this.state.firstName,
      employeeLastName: this.state.lastName,
      employeeEmail: this.state.emailId,
      employeeContact: this.state.contact,
      employeeLocation: this.state.location,
      employeeRole: this.state.role,
      employeeDept: this.state.department,
    };
    console.log("employee =>" + JSON.stringify(employee));

    if (this.state.id === "_add") {
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.navigate(`/employees`);
      });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.navigate(`/employees`);
      });
    }
  };

  cancel() {
    this.props.navigate(`/employees`);
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Employee</h3>;
    } else {
      return <h3 className="text-center">Update Employee</h3>;
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
                    <label>First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact No.: </label>
                    <input
                      placeholder="Contact No."
                      name="contact"
                      className="form-control"
                      value={this.state.contact}
                      onChange={this.changeContactHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Location: </label>
                    <input
                      placeholder="Location"
                      name="location"
                      className="form-control"
                      value={this.state.location}
                      onChange={this.changeLocationHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Role: </label>
                    <input
                      placeholder="Job Role"
                      name="role"
                      className="form-control"
                      value={this.state.role}
                      onChange={this.changeRoleHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Department: </label>
                    <input
                      placeholder="Department"
                      name="department"
                      className="form-control"
                      value={this.state.department}
                      onChange={this.changeDepartmentHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.save}>
                    Save
                  </button>
                  <button className="btn btn-danger" onClick={this.cancel}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
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
    <CreateEmployeeComponent {...props} navigate={navigate} match={match} />
  );
}

export default WithNavigate;
