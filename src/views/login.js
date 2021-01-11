import { AuthContext } from '../provedorAutenticacao'
import AuthService from '../app/service/authService'
import LoginForm from './loginForm';
import React from 'react';
import UsuarioService from '../app/service/usuarioService'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    render(){
        return(
            <LoginForm entrar={aoEntrarForm}/>
        )
    }

}

function aoEntrarForm(dados){
    const service = new UsuarioService()
    
    
    service.autenticar({
        email: dados.email,
        senha: dados.senha
    }).then( response => {
        console.log('response ' + response.data)
        // context.iniciarSessao(response.data)
        // this.context.iniciarSessao(response.data)
        // AuthService.logar(response.data)
        // this.props.history.push('/cadastro-usuarios')
        console.log('sucesso ')
    }).catch( erro => {
        console.log('erro ' + erro)
        console.log('erro ao efetuar login..,')
    })
}

Login.contextType = AuthContext

 export default withRouter(Login);