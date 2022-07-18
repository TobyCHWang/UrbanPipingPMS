import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import React, { Component, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClientService from "../../services/ClientService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ClientComponent.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
  Col,
  Card,
} from "react-bootstrap";

class CreateClientComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
      contact: "",
      street: "",
      city: "",
      province: "",
      postalCode: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeContactHandler = this.changeContactHandler.bind(this);
    this.changeStreetHandler = this.changeStreetHandler.bind(this);
    this.changeCityHandler = this.changeCityHandler.bind(this);
    this.changeProvinceHandler = this.changeProvinceHandler.bind(this);
    this.changePostalCodeHandler = this.changePostalCodeHandler.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_addClient") {
      return;
    } else {
      ClientService.getClientById(this.state.id).then((res) => {
        let client = res.data;
        this.setState({
          firstName: client.clientFirstName,
          lastName: client.clientLastName,
          emailId: client.clientEmail,
          contact: client.clientContact,
          street: client.clientStreet,
          city: client.clientCity,
          province: client.clientProvince,
          postalCode: client.clientPostalCode,
        });
      });
    }
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  changeContactHandler = (event) => {
    this.setState({ contact: event.target.value });
  };

  changeStreetHandler = (event) => {
    this.setState({ street: event.target.value });
  };

  changeCityHandler = (event) => {
    this.setState({ city: event.target.value });
  };

  changeProvinceHandler = (event) => {
    this.setState({ province: event.target.value });
  };

  changePostalCodeHandler = (event) => {
    this.setState({ postalCode: event.target.value });
  };

  save = (e) => {
    e.preventDefault();

    let client = {
      clientFirstName: this.state.firstName,
      clientLastName: this.state.lastName,
      clientEmail: this.state.emailId,
      clientContact: this.state.contact,
      clientStreet: this.state.street,
      clientCity: this.state.city,
      clientProvince: this.state.province,
      clientPostalCode: this.state.postalCode,
    };
    console.log("client =>" + JSON.stringify(client));

    if (this.state.id === "_addClient") {
      ClientService.createClient(client).then((res) => {
        this.props.navigate(`/clients`);
      });
    } else {
      ClientService.updateClient(client, this.state.id).then((res) => {
        this.props.navigate(`/clients`);
      });
    }
  };

  cancel() {
    this.props.navigate(`/clients`);
  }

  getTitle() {
    if (this.state.id === "_addClient") {
      return <h3 className="text-center">Add Client</h3>;
    } else {
      return <h3 className="text-center">Update Client</h3>;
    }
  }

  render() {
    return (
      <div>
        <Container className="mt-5">
          <Card style={{ width: "30rem" }} className="mx-auto shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="mt-2">
              <Card.Title>
                <p>{this.getTitle()}</p>
              </Card.Title>
              <Card.Text>
                <Form>
                  <Row>
                    <Form.Group
                      as={Col}
                      className="mb-3 md"
                      controlId="formFirstName"
                    >
                      <Form.Label className="text-uppercase fw-light lh-1">
                        First Name
                      </Form.Label>
                      <Form.Control
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.changeFirstNameHandler}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3 md"
                      controlId="formLastName"
                    >
                      <Form.Label className="text-uppercase fw-light lh-1">
                        Last Name
                      </Form.Label>
                      <Form.Control
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.changeLastNameHandler}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="text-uppercase fw-light lh-1">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      name="emailId"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label className="text-uppercase fw-light lh-1">
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      name="contact"
                      value={this.state.contact}
                      onChange={this.changeContactHandler}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-uppercase fw-light lh-1">
                      Address
                    </Form.Label>
                    <Row>
                      <InputGroup className="mb-1">
                        <InputGroup.Text className="fw-light">
                          Street
                        </InputGroup.Text>
                        <Form.Control
                          name="street"
                          value={this.state.street}
                          onChange={this.changeStreetHandler}
                        />
                      </InputGroup>

                      <InputGroup as={Col} className="mb-1">
                        <InputGroup.Text className="fw-light">
                          City
                        </InputGroup.Text>

                        <Form.Select
                          name="city"
                          onChange={this.changeCityHandler}
                        >
                          <option value="Calgary">Calgary</option>
                          <option value="Edmonton">Edmonton</option>
                          <option value="Vancouver">Vancouver</option>
                          <option value="Kelowna">Kelowna</option>
                        </Form.Select>
                      </InputGroup>
                      <InputGroup as={Col} className="mb-1">
                        <InputGroup.Text className="fw-light">
                          Province
                        </InputGroup.Text>

                        <Form.Select
                          name="province"
                          value={this.state.province}
                          onChange={this.changeProvinceHandler}
                        >
                          <option value="AB">AB</option>
                          <option value="BC">BC</option>
                        </Form.Select>
                      </InputGroup>
                      <InputGroup className="mb-1">
                        <InputGroup.Text className="fw-light">
                          Postal Code
                        </InputGroup.Text>
                        <Form.Control
                          name="postalCode"
                          value={this.state.postalCode}
                          onChange={this.changePostalCodeHandler}
                        />
                      </InputGroup>
                    </Row>
                  </Form.Group>
                  <div className="buttonRight">
                    <Button
                      variant="danger"
                      className="mb-3"
                      onClick={this.save}
                    >
                      Save
                    </Button>
                    <Button
                      variant="secondary"
                      className="mb-3"
                      onClick={this.cancel}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* <div className="my-5">
            {this.getTitle()}
            </div>   */}
          {/* <Form>
            <Row>
            <Form.Group as={Col} className="mb-3 md" controlId="formFirstName">
              <Form.Label className="text-uppercase fw-light lh-1">First Name</Form.Label>
              <Form.Control
                name="firstName"
                value={this.state.firstName}
                onChange={this.changeFirstNameHandler}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3 md" controlId="formLastName">
              <Form.Label className="text-uppercase fw-light lh-1">Last Name</Form.Label>
              <Form.Control
                name="lastName"
                value={this.state.lastName}
                onChange={this.changeLastNameHandler}
              />
            </Form.Group>
            </Row>
            
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="text-uppercase fw-light lh-1">Email Address</Form.Label>
              <Form.Control
                name="emailId"
                value={this.state.emailId}
                onChange={this.changeEmailHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label className="text-uppercase fw-light lh-1">Phone Number</Form.Label>
              <Form.Control
                name="contact"
                value={this.state.contact}
                onChange={this.changeContactHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text-uppercase fw-light lh-1">Address</Form.Label>
              <Row>
              <InputGroup className="mb-1">
                <InputGroup.Text className="fw-light">Street</InputGroup.Text>
                <Form.Control
                  name="street"
                  value={this.state.street}
                  onChange={this.changeStreetHandler}
                />
              </InputGroup>

              <InputGroup as={Col} className="mb-1">
                <InputGroup.Text className="fw-light">City</InputGroup.Text>

                <Form.Select name="city" onChange={this.changeCityHandler}>
                  <option value="Calgary">Calgary</option>
                  <option value="Edmonton">Edmonton</option>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Kelowna">Kelowna</option>
                </Form.Select>
              </InputGroup>
              <InputGroup as={Col} className="mb-1">
                <InputGroup.Text className="fw-light">Province</InputGroup.Text>

                <Form.Select
                  name="province"
                  value={this.state.province}
                  onChange={this.changeProvinceHandler}
                >
                  <option value="AB">AB</option>
                  <option value="BC">BC</option>
                </Form.Select>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="fw-light">Postal Code</InputGroup.Text>
                <Form.Control
                  name="postalCode"
                  value={this.state.postalCode}
                  onChange={this.changePostalCodeHandler}
                />
              </InputGroup>
              </Row>
            </Form.Group>
            <button className="btn btn-success mb-3" onClick={this.save}>
              Save
            </button>
            <button className="btn btn-danger mb-3" onClick={this.cancel}>
              Cancel
            </button>
          </Form> */}
        </Container>
        {/* <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact No.: </label>
                    <input
                      placeholder="Contact No."
                      name="contact"
                      className="form-control"
                      value={this.state.contact}
                      onChange={this.changeContactHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Street Address: </label>
                    <input
                      placeholder="Street Address"
                      name="street"
                      className="form-control"
                      value={this.state.street}
                      onChange={this.changeStreetHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>City: </label>
                    <input
                      placeholder="City"
                      name="city"
                      className="form-control"
                      value={this.state.city}
                      onChange={this.changeCityHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Province: </label>
                    <input
                      placeholder="Province"
                      name="province"
                      className="form-control"
                      value={this.state.province}
                      onChange={this.changeProvinceHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Postal Code: </label>
                    <input
                      placeholder="Postal Code"
                      name="postalCode"
                      className="form-control"
                      value={this.state.postalCode}
                      onChange={this.changePostalCodeHandler}
                    />
                  </div>
                  <button className="btn btn-success" onClick={this.save}>
                    Save
                  </button>
                  <button className="btn btn-danger" onClick={this.cancel}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

// export default CreateClientComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  let match = { params: useParams() };
  return <CreateClientComponent {...props} navigate={navigate} match={match} />;
}

export default WithNavigate;
