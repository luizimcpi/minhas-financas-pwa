import AlertDialogInformation from '../../components/alertDialogInformation'
import AlertLoading from '../../components/alertLoading'
import { AuthContext } from '../../provedorAutenticacao'
import LoginForm from './loginForm';
import React from 'react';
import UsuarioService from '../../app/service/usuarioService'
import httpStatus from 'http-status'
import { withRouter } from 'react-router-dom'
import { f7 } from 'framework7-react';

class Login extends React.Component {

    state = {
        showLoadingDialog: false,
        mensagemAlerta: '',
        showInfoDialog: false
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    aoEntrarForm = (dados) => { 
       
        if(!dados.email){
            f7.dialog.alert('Favor preencher o campo e-mail...', () => {});
            return false
        }

        if(!dados.senha){
            f7.dialog.alert('Favor preencher o campo senha...', () => {});
            return false
        }

        this.setState({showLoadingDialog: true})

        this.service.autenticar({
            email: dados.email,
            senha: dados.senha
        }).then( response => {
            this.setState({showLoadingDialog: false})
            this.context.iniciarSessao(response.data) 
            this.props.history.push('/home')
        }).catch( erro => {
            if(erro.response.status === httpStatus.FORBIDDEN) {
                this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Nome de usuário / senha inválido(s), tente novamente ou mais tarde...'})
            } else {
                this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Ocorreu um erro inesperado... Entre em contato com o Administrador.'})
            }
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
                <AlertLoading open={this.state.showLoadingDialog} />
            </React.Fragment>
        )
    }

}



Login.contextType = AuthContext

 export default withRouter(Login);