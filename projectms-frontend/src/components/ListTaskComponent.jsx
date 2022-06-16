import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskService from '../services/TaskService';

class ListTaskComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            tasks:[]
        }

        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask= this.deleteTask.bind(this);
        this.viewTask = this.viewTask.bind(this);
    }

    componentDidMount() {
            TaskService.getTasks().then((res) => {
            this.setState({tasks:res.data});
        })
    }

    addTask() {
        this.props.navigate(`/add-task/_addTask`);
    }

    editTask(id) {
        this.props.navigate(`/add-task/${id}`);
    }

    deleteTask(id) {
        TaskService.deleteTask(id).then(res => {
            this.setState({tasks:this.state.tasks.filter(task => task.taskId !== id)});
        });
    }

    viewTask(id) {
        this.props.navigate(`/view-task/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Task List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addTask}>
                        Add Task
                    </button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Task Description</th>
                                <th>Task Start Date</th>
                                <th>Task Due Date</th>
                                <th>Status</th>
                                <th>Task Type</th>
                                <th>Employee</th>
                                <th>Priority</th>
                                <th>Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map (
                                    task =>
                                    <tr key = {task.taskId}>
                                        <td>{task.taskName}</td>
                                        <td>{task.taskDesc}</td>
                                        <td>{task.taskStartDate}</td>
                                        <td>{task.taskDueDate}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button className='btn btn-info' onClick={() => this.editTask(task.taskId)}>
                                                Update
                                            </button>
                                            <button className='btn btn-danger' onClick={() => this.deleteTask(task.taskId)}>
                                                Delete
                                            </button>
                                            <button className='btn btn-info' onClick={() => this.viewTask(task.taskId)}>
                                                View
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

// export default ListEmployeeComponent;

function WithNavigate(props) {
    let navigate = useNavigate();
    return <ListTaskComponent {...props} navigate={navigate} />
}

export default WithNavigate;