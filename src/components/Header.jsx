import React, { Component } from 'react';
import { Link } from './Link';

export const Header = (props) => {
    return (
        <header className="header sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <strong>
                            {props.logo}
                        </strong>
                    </a>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav nav-tabs ml-auto">
                            <Link exact className="nav-item nav-link" to="/">Home</Link>
                            <Link className="nav-item nav-link" to="/books">Books</Link>
                            <Link className="nav-item nav-link" to="/about" >About</Link>
                            <Link className="nav-item nav-link" to="/login" >Login</Link>
                            <Link className="nav-item nav-link" to="/logout" >Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
} 