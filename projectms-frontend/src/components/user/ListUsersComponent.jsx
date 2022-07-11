import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";

class ListUsersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.viewUser = this.viewUser.bind(this);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.props.navigate(`/_addUser`);
  }

  editUser(id) {
    this.props.navigate(`/${id}`);
  }

  deleteUser(id) {
    UserService.deleteUser(id).then((res) => {
      this.setState({
        users: this.state.users.filter((user) => user.userId != id),
      });
    });
  }

  viewUser(id) {
    this.props.navigate(`/${id}&viewUser=${"view"}`);
  }

  render() {
    return (
      <div>
        <h2 className="text-center">User List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addUser}>
            Add User
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                {/* <th>Password</th> */}
                <th>Status</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.userId}>
                  <td>{user.userFirstName}</td>
                  <td>{user.userLastName}</td>
                  <td>{user.userEmail}</td>
                  {/* <td>{user.userPassword}</td> */}
                  <td>{user.userStatus}</td>
                  <td>{user.userRole}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.editUser(user.userId)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteUser(user.userId)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => this.viewUser(user.userId)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// export default ListUsersComponent;

function WithNavigate(props) {
  let navigate = useNavigate();
  return <ListUsersComponent {...props} navigate={navigate} />;
}

export default WithNavigate;
