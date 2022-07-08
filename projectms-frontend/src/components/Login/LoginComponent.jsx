import { useState } from "react";
import { useEffect } from "react";
import "./Login.css";
import LogoTransparent from "./LogoTransparent.png";


function LoginComponent() {

  const [jwt, setJwt] = useState("");
  
  useEffect(() => {
    const reqBody = {
      "userName": "aa",
      "password": "aa"
    };

    fetch("api/auth/login", {
      headers:{
        "Content-Type": "application/json",
      },
      method:"post",
      body:JSON.stringify(reqBody),
    }).then((respose) => Promise.all([respose.json(), respose.headers]))
    .then(([body, headers]) =>{
      setJwt(headers.get("authorization"));
      
    
    });
  }, []);

  useEffect (() =>{
    console.log(`JWT is: ${jwt}`)
  }, [jwt])
 

    

 

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
            <label className="control-label-email">Email</label>
            <i class="bi-thin bi-envelope" aria-hidden="true"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              style={{ width: "300px", height: "45px" }}
            />
            <br></br>
          </div>
          <div className="form-group2" align="center">
            <label className="control-label" a>
              Token
            </label>
            <i class="bi-thin bi-lock" aria-hidden="true"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Token"
              style={{ width: "300px", height: "45px" }}
            />
          </div>
          &nbsp; &nbsp;
          <div className="button">
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "300px", height: "45px" }}
              
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
