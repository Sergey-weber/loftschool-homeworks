import React, {Component} from 'react'
import Input from './Input/Input'
import './Form.css'
import bond from './assets/bond_approve.jpg'

export default class Form extends Component {

    state = {
        name: '',
        lastName: '',
        password: '',
        errorName: '',
        errorLastName: '',
        errorPassword: '',
        hiddenError: false,
        validate: false
    }

    handleName = (e) => {
        switch (e.target.name) {
            case 'firstname':
                this.setState({name: e.target.value})
                break
            case 'lastname':
                this.setState({lastName: e.target.value})
                break
            case 'password':
                this.setState({password: e.target.value})
                break
        }
        this.setState({
            errorName: '',
            errorLastName: '',
            errorPassword: ''
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.state.name === '' ? this.setState({errorName: 'Нужно указать имя'}) :
            this.state.name !== 'James' ? this.setState({errorName: 'Имя указано не верно'}) :  undefined

        this.state.lastName === '' ? this.setState({errorLastName: 'Нужно указать фамилию'}) :
            this.state.lastName !== 'Bond' ? this.setState({errorLastName: 'Фамилия указана не верно'}) :  undefined

        this.state.password === '' ? this.setState({errorPassword: 'Нужно указать пароль'}) :
            this.state.password !== '007' ? this.setState({errorPassword: 'Пароль указан не верно'}) :  undefined

        this.state.name === 'James' && this.state.lastName === 'Bond' && this.state.password === '007' ? this.setState({validate: true}) : undefined
    }


    render() {

        return (

            <div className="app-container">
                {
                    !this.state.validate ?
                <form className="form">
                    <h1>Введите свои данные, агент</h1>
                       <Input
                            title="Имя"
                            name="firstname"
                            value={this.state.name}
                            onChange={this.handleName}
                            errorName={this.state.errorName}
                            classError="field__error field-error t-error-firstname"
                            classInput="field__input field-input t-input-firstname"
                            type="text"
                       />

                    <Input
                        title="Фамилия"
                        name="lastname"
                        value={this.state.lastName}
                        onChange={this.handleName}
                        errorName={this.state.errorLastName}
                        classError="field__error field-error t-error-lastname"
                        classInput="field__input field-input t-input-lastname"
                        type="text"
                    />

                    <Input
                        title="Пароль"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleName}
                        errorName={this.state.errorPassword}
                        classError="field__error field-error t-error-password"
                        classInput="field__input field-input t-input-lastname"
                        type="password"
                    />

                    <div className="form__buttons">
                        <input type="submit" onClick={this.handleSubmit} className="button t-submit" value="Проверить"/>
                    </div>
                </form>
                     :
                    <img src={bond} className="t-bond-image" alt="bond approve" />
                }
            </div>
        )
    }
}