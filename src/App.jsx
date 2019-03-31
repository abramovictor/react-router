import React, { Component } from 'react';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.initialData
        };
    }

    render() {
        return (
            <div id="app">
                <Header logo="JavaScript Books" />
                <Home title="JavaScript Library" />
                <Pricing books={this.state.books} title="Books Store" />
                <About title="About Us" />
            </div>
        );
    }
}