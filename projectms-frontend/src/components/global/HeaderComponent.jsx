import React, { Component } from "react";
import { useLocalState } from "../../util/useLocalStorage";

// const [jwt, setJwt] = useLocalState("","jwt");

function HeaderComponent() {
  const [jwt, setJwt] =useLocalState("","jwt");
  const [role,setRole] = useLocalState("","role");

  function clean(){
    setJwt("");
    setRole("");
    window.location.href="/";
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="http://localhost:3000/homepage" className="navbar-brand">
              Project Management App
            </a>

            <button onClick={()=>clean()}>Log out</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
