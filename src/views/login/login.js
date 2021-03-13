import { Progressbar, f7 } from 'framework7-react'

import { AuthContext } from '../../provedorAutenticacao'
import LoginForm from './loginForm';
import React from 'react';
import UsuarioService from '../../app/service/usuarioService'
import httpStatus from 'http-status'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {

    state = {
        showLoadingDialog: false
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    aoEntrarForm = (dados) => { 
       
        if(!dados.email){
            f7.dialog.alert('Favor preencher o campo e-mail...', () => {})
            return false
        }

        if(!dados.senha){
            f7.dialog.alert('Favor preencher o campo senha...', () => {})
            return false
        }
        
        this.setState({showLoadingDialog: true})
        const preloader = f7.dialog.preloader('Carregando...', 'blue')

        this.service.autenticar({
            email: dados.email,
            senha: dados.senha
        }).then( response => {
            preloader.close()
            this.context.iniciarSessao(response.data) 
            this.props.history.push('/home')
        }).catch( erro => {
            if(erro.response.status === httpStatus.FORBIDDEN) {
                this.setState({showLoadingDialog: false})
                f7.dialog.alert('Nome de usuário / senha inválido(s), tente novamente ou mais tarde...', () => {})
            } else {
                this.setState({showLoadingDialog: false})
                f7.dialog.alert('Ocorreu um erro inesperado... Entre em contato com o Administrador.', () => {})
            }
        })
    }

    toUsuarios = () => {
        this.props.history.push('/cadastro-usuarios')
    }

    render(){
        return(
            <React.Fragment>
                <Progressbar infinite color="blue" style={{ display: this.state.showLoadingDialog ? 'block': 'none'}} />
                <LoginForm entrar={this.aoEntrarForm} usuarios={this.toUsuarios}/>
            </React.Fragment>
        )
    }

}



Login.contextType = AuthContext

 export default withRouter(Login);