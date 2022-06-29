import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Employee Details</h3>
          <div className="card-body">
            <div className="row">
              <label>First Name: </label>
              <div>{this.state.employee.employeeFirstName}</div>
            </div>
            <div className="row">
              <label>Last Name: </label>
              <div>{this.state.employee.employeeLastName}</div>
            </div>
            <div className="row">
              <label>Email Id: </label>
              <div>{this.state.employee.employeeEmail}</div>
            </div>
            <div className="row">
              <label>Contact: </label>
              <div>{this.state.employee.employeeContact}</div>
            </div>
            <div className="row">
              <label>Location:</label>
              <div>{this.state.employee.employeeLocation}</div>
            </div>
            <div className="row">
              <label>Role:</label>
              <div>{this.state.employee.employeeRole}</div>
            </div>
            <div className="row">
              <label>Department:</label>
              <div>{this.state.employee.employeeDepartment}</div>
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
  return <ViewEmployeeComponent {...props} navigate={navigate} match={match} />;
}

export default WithNavigate;
