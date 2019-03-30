import React, { Component } from 'react';
import { Link } from './Link';

export const Header = props => {
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
                        <div className="navbar-nav nav-tabs ml-auto border-bottom-0">
                            <Link href="/index.html" active={true}>Home</Link>
                            <Link href="/pricing.html" >Pricing</Link>
                            <Link href="/about.html" >About</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
} 