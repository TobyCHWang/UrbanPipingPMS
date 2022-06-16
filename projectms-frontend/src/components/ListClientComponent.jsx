import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientService from '../services/ClientService';

class ListClientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clients: []
        }

        this.addClient = this.addClient.bind(this);
    }

    componentDidMount() {
        ClientService.getClients().then((res) => {
            this.setState({ clients: res.data });
        });
    }

    addClient() {
        this.props.navigate(`/add-client/_add`);
    }

    editClient(id) {
        this.props.navigate(`/add-client/${id}`);
    }

    deleteClient(id) {
        ClientService.deleteClient(id).then(res => {
            this.setState({ clients: this.state.clients.filter(client => client.clientId !== id) });
        });
    }

    viewClient(id) {
        this.props.navigate(`/view-client/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Client List</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addClient}>Add Client</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Contact No</th>
                                <th>Street Address</th>
                                <th>City</th>
                                <th>Province</th>
                                <th>Postal Code</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clients.map(
                                    client =>
                                        <tr key={client.clientId}>
                                            <td> {client.clientFirstName} </td>
                                            <td> {client.clientLastName} </td>
                                            <td> {client.clientEmail} </td>
                                            <td> {client.clientContact} </td>
                                            <td> {client.clientStreet} </td>
                                            <td> {client.clientCity} </td>
                                            <td> {client.clientProvince} </td>
                                            <td> {client.clientPostalCode} </td>
                                            <td>
                                                <button className='btn btn-info' onClick={() => this.editClient(client.clientId)}>
                                                    Update
                                                </button>
                                                <button className='btn btn-danger' onClick={() => this.deleteClient(client.clientId)}>
                                                    Delete
                                                </button>
                                                <button className='btn btn-info' onClick={() => this.viewClient(client.clientId)}>
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

// export default ListClientComponent;

function WithNavigate(props) {
    let navigate = useNavigate();
    return <ListClientComponent {...props} navigate={navigate} />
}

export default WithNavigate;