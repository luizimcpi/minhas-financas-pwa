import { AuthContext } from '../../provedorAutenticacao'
import LoginForm from './loginForm';
import React from 'react';
import UsuarioService from '../../app/service/usuarioService'
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
            this.props.history.push('/home')
        }).catch( erro => {
            alert('Nome de usuário / senha inválido(s), tente novamente ou mais tarde...')
            console.log('erro ', erro)
        })
    }

    toUsuarios = () => {
        this.props.history.push('/cadastro-usuarios')
    }

    render(){
        return(
            <LoginForm entrar={this.aoEntrarForm} usuarios={this.toUsuarios}/>
        )
    }

}



Login.contextType = AuthContext

 export default withRouter(Login);