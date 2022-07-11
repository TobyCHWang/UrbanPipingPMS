import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  addEmployee() {
    this.props.navigate(`/_add&employeeAdd=${"add"}`);
  }

  editEmployee(id) {
    this.props.navigate(`/${id}&employeeAdd=${"update"}`);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.employeeId !== id
        ),
      });
    });
  }

  viewEmployee(id) {
    this.props.navigate(`/${id}&employeeView=${"view"}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Location</th>
                <th>Role</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.employeeId}>
                  <td>{employee.employeeFirstName}</td>
                  <td>{employee.employeeLastName}</td>
                  <td>{employee.employeeEmail}</td>
                  <td>{employee.employeeContact}</td>
                  <td>{employee.employeeLocation}</td>
                  <td>{employee.employeeRole}</td>
                  <td>{employee.employeeDept}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.editEmployee(employee.employeeId)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteEmployee(employee.employeeId)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => this.viewEmployee(employee.employeeId)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// export default ListEmployeeComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  return <ListEmployeeComponent {...props} navigate={navigate} />;
}

export default WithNavigate;
