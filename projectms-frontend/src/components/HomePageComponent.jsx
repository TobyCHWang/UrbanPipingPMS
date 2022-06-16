import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePageComponent extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <nav>
                    <Link to='/projects'>Project</Link><br />
                    {/* <Link>Calendar</Link><br /> */}
                    <Link to='/employees'>Staff</Link><br />
                    <Link to='/clients'>Client</Link><br />
                    <Link to='/users'>User</Link><br />
                    {/* <Link>Messaging</Link><br /> */}
                </nav>
            </div>
        );
    }
}

export default HomePageComponent;