import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TaskService from '../../services/TaskService';


class CreateTaskComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id,
            taskName: '',
            taskDesc: '',
            taskStartDate: '',
            taskDueDate: ''
        }

        this.changeTaskNameHandler = this.changeTaskNameHandler.bind(this);
        this.changeTaskDescHandler = this.changeTaskDescHandler.bind(this);
        this.changeTaskStartDateHandler = this.changeTaskStartDateHandler.bind(this);
        this.changeTaskDueDateHandler = this.changeTaskDueDateHandler.bind(this);
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_addTask') {
            return;
        } else {
            TaskService.getTaskById(this.state.id).then((res) => {
                let project = res.data;
                this.setState({taskName: project.taskName,
                    taskDesc: project.taskDesc,
                    taskStartDate: project.taskStartDate,
                    taskDueDate: project.taskDueDate
                });
            });
        }
    }

    changeTaskNameHandler = (event) => {
        this.setState({taskName: event.target.value});
    }

    changeTaskDescHandler = (event) => {
        this.setState({taskDesc: event.target.value});
    }

    changeTaskStartDateHandler = (event) => {
        this.setState({taskStartDate: event.target.value});
    }

    changeTaskDueDateHandler = (event) => {
        this.setState({taskDueDate: event.target.value});
    }

  

    save = (e) => {
        e.preventDefault();

        let task = {taskName: this.state.taskName, taskDesc: this.state.taskDesc, taskStartDate: this.state.taskStartDate, 
            taskDueDate: this.state.taskDueDate};
        // console.log('employee =>' + JSON.stringify(employee));

        if (this.state.id === '_addTask') {
           TaskService.createTask(task).then(res => {
                this.props.navigate(`/tasks`);
            });
        } else {
            TaskService.updateTask(task, this.state.id).then(res => {
                this.props.navigate(`/tasks`);
            });
        }
    }

    cancel() {
        this.props.navigate(`/tasks`);
    }

    getTitle() {
        if (this.state.id === '_addTask') {
            return <h3 className='text-center'>Add Task</h3>
        } else {
            return <h3 className='text-center'>Update Task</h3>
        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            {
                                this.getTitle()
                            }
                            <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Task Name: </label>
                                    <input placeholder='Task Name' name='taskName' className='form-control'
                                        value={this.state.taskName} onChange={this.changeTaskNameHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Task description: </label>
                                    <input placeholder='Task Desc' name='taskDesc' className='form-control'
                                        value={this.state.taskDesc} onChange={this.changeTaskDescHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Task Start Date: </label>
                                    <input placeholder='taskStartDate' name='taskStartDate' className='form-control'
                                        value={this.state.taskStartDate} onChange={this.changeTaskStartDateHandler} />
                                </div>
                                <div className='form-group'>
                                    <label>Task Due Date: </label>
                                    <input placeholder='taskDueDate' name='taskDueDate' className='form-control'
                                        value={this.state.taskDueDate} onChange={this.changeTaskDueDateHandler} />
                                </div>
                                
                                <div className='form-group'>
                                    <label>Status: </label>
                                    <input placeholder='Status' name='status' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label>Task Type: </label>
                                    <input placeholder='Task Type' name='taskType' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label>Employee: </label>
                                    <input placeholder='Employee' name='employee' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label>Priority: </label>
                                    <input placeholder='Priority' name='priority' className='form-control' />
                                </div>
                                <div className='form-group'>
                                    <label>Photo: </label>
                                    <input placeholder='Photo' name='photo' className='form-control' />
                                </div>
                            </form>
                        </div>
                        </div>
                        <button className='btn btn-success' onClick={this.save}>Save</button>
                        <button className='btn btn-danger' onClick={this.cancel}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

// export default CreateEmployeeComponent;

function WithNavigate(props) {
    let navigate = useNavigate();
    let match = {params: useParams()};
    return <CreateTaskComponent {...props} navigate={navigate} match={match} />
}

export default WithNavigate;