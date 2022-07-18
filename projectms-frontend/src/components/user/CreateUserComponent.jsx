import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      status: "",
      role: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.changeRoleHandler = this.changeRoleHandler.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_addUser") {
      return;
    } else {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          firstName: user.userFirstName,
          lastName: user.userLastName,
          emailId: user.userEmail,
          password: user.userPassword,
          status: user.userStatus,
          role: user.userRole,
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

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeStatusHandler = (event) => {
    this.setState({ status: event.target.value });
  };

  changeRoleHandler = (event) => {
    this.setState({ role: event.target.value });
  };

  save = (e) => {
    e.preventDefault();

    let user = {
      userFirstName: this.state.firstName,
      userLastName: this.state.lastName,
      userEmail: this.state.emailId,
      userPassword: this.state.password,
      userStatus: this.state.status,
      userRole: this.state.role,
    };
    console.log("user =>" + JSON.stringify(user));

    if (this.state.id === "_addUser") {
      UserService.createUser(user).then((res) => {
        this.props.navigate(`/users`);
      });
    } else {
      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.navigate(`/users`);
      });
    }
  };

  cancel() {
    this.props.navigate(`/users`);
  }

  getTitle() {
    if (this.state.id === "_addUser") {
      return <h3 className="text-center">Add User</h3>;
    } else {
      return <h3 className="text-center">Update User</h3>;
    }
  }

  render() {
    return (
      <div>
        <div className="container">
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
                    <label>Password: </label>
                    <input
                      placeholder="Password"
                      input
                      type="password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Status: </label>
                    <input
                      placeholder="Status"
                      name="status"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.changeStatusHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Role: </label>
                    <input
                      placeholder="Role"
                      name="role"
                      className="form-control"
                      value={this.state.role}
                      onChange={this.changeRoleHandler}
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
        </div>
      </div>
    );
  }
}

// export default CreateUserComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  let match = { params: useParams() };
  return <CreateUserComponent {...props} navigate={navigate} match={match} />;
}

export default WithNavigate;
