import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectService from '../../services/ProjectService';


class ListProjectComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            projects:[]
        }

        this.addProject = this.addProject.bind(this);
        this.editProject = this.editProject.bind(this);
        this.deleteProject= this.deleteProject.bind(this);
        this.viewProject = this.viewProject.bind(this);
    }

    componentDidMount() {
            ProjectService.getProjects().then((res) => {
            this.setState({projects:res.data});
        })
    }

    addProject() {
        this.props.navigate(`/add-project/_addProject`);
    }

    editProject(id) {
        this.props.navigate(`/add-project/${id}`);
    }

    deleteProject(id) {
        ProjectService.deleteProject(id).then(res => {
            this.setState({projects:this.state.projects.filter(project => project.projectId !== id)});
        });
    }

    viewProject(id) {
        this.props.navigate(`/view-project/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Project List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addProject}>
                        Add Project
                    </button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Project Description</th>
                                <th>Project Start Date</th>
                                <th>Project Due Date</th>
                                <th>Project city</th>
                                <th>Project street</th>
                                <th>Project province</th>
                                <th>Project postal code</th>
                                <th>Client</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.projects.map (
                                    project =>
                                    <tr key = {project.projectId}>
                                        <td>{project.projectName}</td>
                                        <td>{project.projectDesc}</td>
                                        <td>{project.projectStartDate}</td>
                                        <td>{project.projectDueDate}</td>
                                        <td>{project.projectCity}</td>
                                        <td>{project.projectStreet}</td>
                                        <td>{project.projectProv}</td>
                                        <td>{project.projectPostalCode}</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button className='btn btn-info' onClick={() => this.editProject(project.projectId)}>
                                                Update
                                            </button>
                                            <button className='btn btn-danger' onClick={() => this.deleteProject(project.projectId)}>
                                                Delete
                                            </button>
                                            <button className='btn btn-info' onClick={() => this.viewProject(project.projectId)}>
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
    return <ListProjectComponent {...props} navigate={navigate} />
}

export default WithNavigate;