import { AuthContext } from '../../provedorAutenticacao'
import LoginForm from './loginForm';
import React from 'react';
import UsuarioService from '../../app/service/usuarioService'
import { withRouter } from 'react-router-dom'
import AlertDialogInformation from '../../components/alertDialogInformation'

class Login extends React.Component {

    state = {
        mensagemAlerta: '',
        showInfoDialog: false
    }

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
            this.setState({showInfoDialog: true, mensagemAlerta: 'Nome de usuário / senha inválido(s), tente novamente ou mais tarde...'})
        })
    }

    toUsuarios = () => {
        this.props.history.push('/cadastro-usuarios')
    }

    fecharAlertaAviso = () => {
        this.setState({showInfoDialog: false, mensagemAlerta: ''})
    }

    render(){
        return(
            <React.Fragment>
                <LoginForm entrar={this.aoEntrarForm} usuarios={this.toUsuarios}/>
                <AlertDialogInformation 
                    open={this.state.showInfoDialog} 
                    close={this.fecharAlertaAviso} 
                    mensagemCustomizada={this.state.mensagemAlerta} 
                />     
            </React.Fragment>
        )
    }

}



Login.contextType = AuthContext

 export default withRouter(Login);