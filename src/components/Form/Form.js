import React, {Component} from 'react'
import './Form.css'
import bond from './img/bond_approve.jpg'

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
                    <p className="field">
                        <label className="field__label" htmlFor="firstname">
                            <span className="field-label">Имя</span>
                        </label>
                        <input name="firstname" className="field__input field-input t-input-firstname" type="text"
                               value={this.state.name} onChange={this.handleName}/>
                        <span className="field__error field-error t-error-firstname">{this.state.errorName}</span></p>
                    <p className="field">
                        <label className="field__label" htmlFor="lastname"><span className="field-label">Фамилия</span></label>
                        <input name="lastname" className="field__input field-input t-input-lastname" type="text"
                               value={this.state.lastName} onChange={this.handleName}/>
                        <span className="field__error field-error t-error-lastname">{this.state.errorLastName}</span></p>
                    <p className="field">
                        <label className="field__label" htmlFor="password">
                        <span className="field-label">Пароль</span></label>
                        <input name="password" className="field__input field-input t-input-password" type="password"
                               value={this.state.password} onChange={this.handleName}/>
                        <span className="field__error field-error t-error-password">{this.state.errorPassword}</span></p>
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