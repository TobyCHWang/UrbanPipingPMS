import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePageComponent extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <nav>
                    <Link to='/'>Home</Link>
                    <br/>
                     <Link to='/projects'>Project</Link>
                     <br/>
                     <Link to='/tasks'>Task</Link>
                     <br/>
                    <Link to='/calendar'>Calendar</Link> 
                    <br/>
                    <Link to='/employees'>Staff</Link>
                    {/* <Link>Client</Link>
                    <Link>User</Link>
                    <Link>Messaging</Link> */}
                </nav>
            </div>
        );
    }
}

export default HomePageComponent;