import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <div><a href='http://localhost:8080/api/v1/employees' className='navbar-brand'>Project Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;