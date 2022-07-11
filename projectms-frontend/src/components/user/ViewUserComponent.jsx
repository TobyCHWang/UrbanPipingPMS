import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
      test: this.props.match.params.test,
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">View User Details</h3>
          <div className="card-body">
            <div className="row">
              <label>First Name: </label>
              <div>{this.state.user.userFirstName}</div>
            </div>
            <div className="row">
              <label>Last Name: </label>
              <div>{this.state.user.userLastName}</div>
            </div>
            <div className="row">
              <label>Email Id: </label>
              <div>{this.state.user.userEmail}</div>
            </div>
            <div className="row">
              <label>Password: </label>
              <div>{this.state.user.userPassword}</div>
            </div>
            <div className="row">
              <label>Status: </label>
              <div>{this.state.user.userStatus}</div>
            </div>
            <div className="row">
              <label>Role: </label>
              <div>{this.state.user.userRole}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default ViewUserComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  let match = { params: useParams() };
  return <ViewUserComponent {...props} navigate={navigate} match={match} />;
}

export default WithNavigate;
