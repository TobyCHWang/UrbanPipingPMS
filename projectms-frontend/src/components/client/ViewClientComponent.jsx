import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ClientService from '../../services/ClientService';

class ViewClientComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            client: {}
        }
    }

    componentDidMount() {
        ClientService.getClientById(this.state.id).then(res => {
            this.setState({ client: res.data });
        })
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View Client Details</h3>
                    <div className='card-body'>
                        <div className='row'>
                            <label>First Name: </label>
                            <div>{this.state.client.clientFirstName}</div>
                        </div>
                        <div className='row'>
                            <label>Last Name: </label>
                            <div>{this.state.client.clientLastName}</div>
                        </div>
                        <div className='row'>
                            <label>Email Id: </label>
                            <div>{this.state.client.clientEmail}</div>
                        </div>
                        <div className='row'>
                            <label>Contact: </label>
                            <div>{this.state.client.clientContact}</div>
                        </div>
                        <div className='row'>
                            <label>Street Address: </label>
                            <div>{this.state.client.clientStreet}</div>
                        </div>
                        <div className='row'>
                            <label>City: </label>
                            <div>{this.state.client.clientCity}</div>
                        </div>
                        <div className='row'>
                            <label>Province: </label>
                            <div>{this.state.client.clientProvince}</div>
                        </div>
                        <div className='row'>
                            <label>Postal Code: </label>
                            <div>{this.state.client.clientPostalCode}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default ViewClientComponent;

function WithNavigate(props) {
    let navigate = useNavigate();
    let match = { params: useParams() };
    return <ViewClientComponent {...props} navigate={navigate} match={match} />
}

export default WithNavigate;