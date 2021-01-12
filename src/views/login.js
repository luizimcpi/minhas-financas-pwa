import { AuthContext } from '../provedorAutenticacao'
import LoginForm from './loginForm';
import React from 'react';
import UsuarioService from '../app/service/usuarioService'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    aoEntrarForm = (dados) => { 
        this.service.autenticar({
            email: dados.email,
            senha: dados.senha
        }).then( response => {
            this.context.iniciarSessao(response.data) 
            this.props.history.push('/cadastro-usuarios')
        }).catch( erro => {
            console.log('erro ao efetuar login..,')
        })
    }

    render(){
        return(
            <LoginForm entrar={this.aoEntrarForm}/>
        )
    }

}



Login.contextType = AuthContext

 export default withRouter(Login);