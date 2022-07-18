import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import ClientService from "../../services/ClientService";
import "./ClientComponent.css";
import { Container, Button, Table, Card } from "react-bootstrap";
import {
  BsPlusSquareFill,
  BsPencilSquare,
  BsTrash,
  BsEye,
} from "react-icons/bs";

class ListClientComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
    };

    this.addClient = this.addClient.bind(this);
  }

  componentDidMount() {
    ClientService.getClients().then((res) => {
      this.setState({ clients: res.data });
    });
  }

  addClient() {
    this.props.navigate(`/_addClient&clientAdd=${"add"}`);
  }

  editClient(id) {
    this.props.navigate(`/${id}&clientAdd=${"update"}`);
  }

  deleteClient(id) {
    ClientService.deleteClient(id).then((res) => {
      this.setState({
        clients: this.state.clients.filter((client) => client.clientId !== id),
      });
    });
  }

  viewClient(id) {
    this.props.navigate(`/${id}&clientView=${"view"}`);
  }

  render() {
    return (
      <div>
        <Container className="mt-5">
          <Card className="mx-auto shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="mt-2">
              <Card.Title>
                <p>
                  <h3 className="text-center">Client List</h3>
                </p>
              </Card.Title>
              <Card.Text>
                <div className="buttonRight">
                  <Button variant="flat" onClick={this.addClient}>
                    <BsPlusSquareFill /> New
                  </Button>
                </div>
                <Table hover responsive className="mx-auto mt-2">
                  <thead>
                    <tr>
                      <th className="text-uppercase fw-light lh-1">Name</th>
                      <th className="text-uppercase fw-light lh-1">Email</th>
                      <th className="text-uppercase fw-light lh-1">Phone No.</th>
                      <th className="text-uppercase fw-light lh-1">Address</th>
                      <th className="text-uppercase fw-light lh-1">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.clients.map((client) => (
                      <tr key={client.clientId}>
                        <td>
                          {" "}
                          {client.clientFirstName} {client.clientLastName}{" "}
                        </td>
                        <td> {client.clientEmail} </td>
                        <td> {client.clientContact} </td>
                        <td>
                          {" "}
                          {client.clientStreet} {client.clientCity},{" "}
                          {client.clientProvince} {client.clientPostalCode}
                        </td>
                        <td>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => this.editClient(client.clientId)}
                          >
                            <BsPencilSquare />
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => this.deleteClient(client.clientId)}
                          >
                            <BsTrash />
                          </Button>
                          <Button
                            variant="info"
                            size="sm"
                            onClick={() => this.viewClient(client.clientId)}
                          >
                            <BsEye />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

// export default ListClientComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  return <ListClientComponent {...props} navigate={navigate} />;
}

export default WithNavigate;
