import React, { Component } from 'react';

export const Nav = (params) => {
    return (
        <div className="nav flex-column nav-pills">
            <li className="border-bottom">
                <a href="#!" className="btn btn-block btn-secondary">
                    JavaScript
                </a>
            </li>
            <li className="border-bottom">
                <a href="#!" className="btn btn-block">
                    React
                </a>
            </li>
            <li className="border-bottom">
                <a href="#!" className="btn btn-block">
                    Angular
                </a>
            </li>
            <li>
                <a href="#!" className="btn btn-block">
                    Node.js
                </a>
            </li>
        </div>
    );
}
