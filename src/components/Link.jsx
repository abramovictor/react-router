import React, { Component } from 'react';

export const Link = props => {
    return (
        <a className={`nav-item nav-link${props.active ? ' active' : ''}`} href={props.href}>
            {props.children}
        </a>
    );
}