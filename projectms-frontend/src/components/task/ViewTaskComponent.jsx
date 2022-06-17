import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TaskService from '../../services/TaskService';


class ViewTaskComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
         id: this.props.match.params.id,
         task:{}
        }
    }

    componentDidMount() {
        TaskService.getTaskById(this.state.id).then(res => {
            this.setState({task:res.data});
        });
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View Task Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label>Task Name: </label>
                            <div>{this.state.task.taskName}</div>
                        </div>
                        <div className='row'>
                            <label>Task Description: </label>
                            <div>{this.state.task.taskDesc}</div>
                        </div>
                        <div className='row'>
                            <label>Task Start Date: </label>
                            <div>{this.state.task.taskStartDate}</div>
                        </div>
                        <div className='row'>
                            <label>Task Due Date: </label>
                            <div>{this.state.task.taskDueDate}</div>
                        </div>
                        <div className='row'>
                            <label>Status:</label>
                            <div></div>
                        </div>
                        <div className='row'>
                            <label>Task Type:</label>
                            <div></div>
                        </div>
                        <div className='row'>
                            <label>Employee:</label>
                            <div></div>
                        </div>
                        <div className='row'>
                            <label>Priority:</label>
                            <div></div>
                        </div>
                        <div className='row'>
                            <label>Photo:</label>
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
    return <ViewTaskComponent {...props} navigate={navigate} match={match} />
}

export default WithNavigate;