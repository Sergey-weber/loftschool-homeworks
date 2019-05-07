// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { Component } from 'react'
import { withAuth } from '../../context/Auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Style from './LoginForm.module.css'

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    handleInput = e => {
        switch (e.target.name) {
            case "email":
                this.setState({email: e.target.value})
                break;
            case "password":
                this.setState({password: e.target.value})
                break;
        }
    }

    handleBtn = () => {
        const { authorize } = this.props;
        const { email, password } = this.state;
        authorize(email, password);
    }

    render() {
        const { email, password } = this.state
        const { isAuthorized, authError } = this.props


        return isAuthorized ? (
            <Redirect to={'/app'} />
        ) : (
            <div className={Style.bg}>
                <div className={`${Style.form} t-form`}>
                    <p>
                        <label htmlFor="email">
                            <span className={Style.labelText}>Почта</span>
                        </label>
                        <input
                        type="text" name="email" className={`${Style.input} t-input-email`} onChange={this.handleInput} value={email} />
                    </p>
                    <p>
                        <label htmlFor="password">
                            <span className={Style.labelText}>Пароль</span>
                        </label>
                        <input
                            type="password" name="password" className={`${Style.input} t-input-password`} onChange={this.handleInput} value={password} />
                    </p>
                    {authError ? <p className={Style.error}>{authError}</p>  : undefined}
                    <div className={Style.buttons}>
                        <button onClick={this.handleBtn} className={Style.button}>Войти</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuth(LoginForm)
