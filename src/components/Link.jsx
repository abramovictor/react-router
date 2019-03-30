import React, { Component } from 'react';

export const Link = props => {
    return (
        <a className={`nav-item nav-link rounded-0${props.active ? ' active' : ''}`} href={props.href}>
            {props.children}
        </a>
    );
}