import LoginForm from './loginForm';
import React from 'react';
import { withRouter } from 'react-router-dom'

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    render(){
        return(
            <LoginForm />
        )
    }

}

 export default withRouter(Login);