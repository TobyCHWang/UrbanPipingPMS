import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClientService from "../../services/ClientService";
import "./ClientComponent.css";
import { Container, Card, ListGroup, Button } from "react-bootstrap";
import {
  BsArrowBarLeft,
  BsPencilSquare,
  BsTrash,
  BsEye,
} from "react-icons/bs";
import { Link } from "react-router-dom";

class ViewClientComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      client: {},
    };
  }

  componentDidMount() {
    ClientService.getClientById(this.state.id).then((res) => {
      this.setState({ client: res.data });
    });
  }

  editClient(id) {
    this.props.navigate(`/add-client/${id}`);
  }

  deleteClient(id) {
    ClientService.deleteClient(id).then((res) => {
      this.setState({
        clients: this.state.clients.filter((client) => client.clientId !== id),
      });
    });
  }

  render() {
    return (
      <div>
        <Container className="mt-5">
          <Card
            style={{ width: "30rem" }}
            className="mx-auto shadow p-3 mb-5 bg-white rounded"
          >
            <Card.Body className="mt-2">
              <Card.Title>
                <p>
                  <h3 className="text-center">View Client Details</h3>
                </p>
              </Card.Title>
              <Card.Text>
                <div className="mb-3 buttonRight">
                  <Link to="/clients">
                    <Button variant="flat">
                      <BsArrowBarLeft /> Back
                    </Button>
                  </Link>
                </div>
                <ListGroup.Item>
                  <div className="text-uppercase fw-light lh-1">Name</div>
                  {this.state.client.clientFirstName}{" "}
                  {this.state.client.clientLastName}
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="text-uppercase fw-light lh-1">Email</div>
                  {this.state.client.clientEmail}
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="text-uppercase fw-light lh-1">Phone No.</div>
                  {this.state.client.clientContact}
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="text-uppercase fw-light lh-1">Address</div>
                  {this.state.client.clientStreet}{" "}
                  {this.state.client.clientCity},
                  {this.state.client.clientProvince}{" "}
                  {this.state.client.clientPostalCode}
                </ListGroup.Item>
                <div className="mt-3 buttonRight">
                  <Button
                    variant="secondary"
                    
                    onClick={() => this.editClient(this.state.client.clientId)}
                  >
                    <BsPencilSquare /> Edit
                  </Button>
                  <Button
                    variant="danger"
                    
                    onClick={() =>
                      this.deleteClient(this.state.client.clientId)
                    }
                  >
                    <BsTrash /> Delete
                  </Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        {/* <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View Client Details</h3>
          <div className="card-body">
            <div className="row">
              <label>First Name: </label>
              <div>{this.state.client.clientFirstName}</div>
            </div>
            <div className="row">
              <label>Last Name: </label>
              <div>{this.state.client.clientLastName}</div>
            </div>
            <div className="row">
              <label>Email Id: </label>
              <div>{this.state.client.clientEmail}</div>
            </div>
            <div className="row">
              <label>Contact: </label>
              <div>{this.state.client.clientContact}</div>
            </div>
            <div className="row">
              <label>Street Address: </label>
              <div>{this.state.client.clientStreet}</div>
            </div>
            <div className="row">
              <label>City: </label>
              <div>{this.state.client.clientCity}</div>
            </div>
            <div className="row">
              <label>Province: </label>
              <div>{this.state.client.clientProvince}</div>
            </div>
            <div className="row">
              <label>Postal Code: </label>
              <div>{this.state.client.clientPostalCode}</div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

// export default ViewClientComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  let match = { params: useParams() };
  return <ViewClientComponent {...props} navigate={navigate} match={match} />;
}

export default WithNavigate;
