import { useState } from "react";
import { useEffect } from "react";
import { useLocalState } from "../../util/useLocalStorage";
import "./Login.css";
import LogoTransparent from "./LogoTransparent.png";

function LoginComponent() {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [role, setRole] = useLocalState("", "role");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function sendLoginRequest() {
    const reqBody = {
      userName: username,
      password: password,
    };

    fetch("api/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((respose) => {
        if (respose.status === 200) {
          return Promise.all([respose.json(), respose.headers]);
        } else {
          return Promise.reject("Invalid login attempt");
        }
      })
      .then(([body, headers]) => {
        setJwt(headers.get("authorization"));
        setRole(body);
        if (body.userRole === "client") {
          window.location.href = "/clientHomepage";
        } else {
          window.location.href = "/homepage";
        }
      })
      .catch((messge) => {
        alert(messge);
      });
  }

  return (
    <div className="Login">
      <img
        src={LogoTransparent}
        alt="Urban Piping Logo"
        style={{ width: "450px", height: "200px" }}
        class="logo"
      />

      <div className="LoginPage">
        <form>
          <br></br>
          <h1>LOGIN</h1>
          <br></br>
          <div className="form-group" align="center">
            <label className="control-label-email">UserName</label>
            <i class="bi-thin bi-envelope" aria-hidden="true"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              style={{ width: "300px", height: "45px" }}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br></br>
          </div>
          <div className="form-group2" align="center">
            <label className="control-label" a>
              Password
            </label>
            <i class="bi-thin bi-lock" aria-hidden="true"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Token"
              style={{ width: "300px", height: "45px" }}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          &nbsp; &nbsp;
          <div className="button">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "300px", height: "45px" }}
              onClick={() => sendLoginRequest()}
            >
              LOGIN
            </button>
          </div>
          <br></br>
          {/* <h10>Don't have an account? Sign Up</h10> */}
          <br></br>
          &nbsp;
          <br></br>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
