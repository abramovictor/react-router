import React, { Component } from 'react';

export class Logout extends Component {
    componentWillMount() {
        this.props.onLogout();
    }

    render() {
        return null;
    }
}