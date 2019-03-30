import React, { Component } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';

export class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="app">
                <Header logo="JavaScript Books" />
                <Home title="JavaScript Library" />
                <About title="About Us" />
            </div>
        );
    }
}