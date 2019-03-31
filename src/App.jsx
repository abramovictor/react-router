import React, { Component, ReactPropTypes as PropTypes } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Books } from './pages/Books';
import { Book } from './pages/Book';
import { Login } from './pages/Login';
import { Logout } from './pages/Logout';

import { NotFound } from './pages/NotFound';

export class App extends Component {
    state = {
        user: null
    };

    login = user => {
        this.setState({ user });
    };
    
    logout = () => { 
        this.setState({ user: null });
    }; 

    render() {
        return (
            <Router>
                <div id="app">
                    <Header logo="JavaScript Books" />

                    <Content>
                        <Route path="/books" render={() => <Sidebar topics={this.props.topics} />} />
                        <Switch>
                            
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/login" render={props => <Login onLogin={this.login} />} />
                            <Route path="/logout" render={props => <Logout onLogin={this.logout} />} />

                            <Route exact path="/books/:topic?" render={props => <Books books={this.props.books} {...props} />} />
                            <Route path="/books/:topic/:book" render={props => <Book books={this.props.books} {...props} />} />

                            <Route component={NotFound} />
                        </Switch>
                    </Content>
                </div>
            </Router>
        );
    }
}