import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            employees:[]
        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees:res.data});
        })
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Employee List</h2>
                <div className='row'>
                    <button className='btn btn-primary'>
                        Add Employee
                    </button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Contact No.</th>
                                <th>Job Role</th>
                                <th>Department</th>
                                <th>Location</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map (
                                    employee =>
                                    <tr key = {employee.employeeId}>
                                        <td>{employee.employeeFirstName}</td>
                                        <td>{employee.employeeLastName}</td>
                                        <td>{employee.employeeEmail}</td>
                                        <td>{employee.employeeContact}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button className='btn btn-info'>
                                                Update Employee
                                            </button>
                                            <button className='btn btn-danger'>
                                                Delete Employee
                                            </button>
                                            <button className='btn btn-info'>
                                                View Employee
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;