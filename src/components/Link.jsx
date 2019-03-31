import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export const Link = ({ children, ...rest }) => {
    return (
        <NavLink exact {...rest}>{children}</NavLink>
    );
}