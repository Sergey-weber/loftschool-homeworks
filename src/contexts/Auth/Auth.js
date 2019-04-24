import React, {PureComponent} from 'react';

const {Provider, Consumer: AuthConsumer} = React.createContext(''),
    trueData = {
        email:'stu@dent.com',
        password: '123'
    }


class AuthProvider extends PureComponent {
    state = {
        email: '',
        authorizeError: '',
        isAuthorized: ''
    }

    logout = () => {this.setState({isAuthorized: false})}

    authorize = (email, password) => {
        if (trueData.email === email && trueData.password === password) {
            this.setState({
                email,
                authorizeError: '',
                isAuthorized: true
            })
        } else {
            this.setState({authorizeError: 'Email или пароль введён не верно'})
        }
    }

    getProviderValue = () => {
        return {
            ...this.state,
            authorize: this.authorize,
            logout: this.logout
        }
    }

    render() {
        const {children} = this.props;

        return <Provider value={this.getProviderValue()}>{children}</Provider>;
    }
}

const TestProvider = Provider;

export {AuthProvider, AuthConsumer, TestProvider};
