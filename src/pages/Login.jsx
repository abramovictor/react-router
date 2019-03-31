import React, { Component } from 'react';

export class Login extends Component {
    onSubmit = event => {
        event.preventDefault();

        this.props.onLogin({
            username: this.usernameInput.value,
            password: this.passwordInput.value
        });
    };

    render() {
        return (
            <main className="py-5">
                <form onSubmit={this.onSubmit}>
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Имя пользователя"
                                    ref={input => this.usernameInput = input} />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Пароль"
                                    ref={input => this.passwordInput = input} />
                            </div>

                            <button type="submit" className="btn btn-secondary btn-block">Login</button>
                        </div>
                    </div>
                </form>
            </main>
        );
    }
}