import { Progressbar, f7 } from 'framework7-react'

import React from 'react';
import UsuarioForm from './usuarioForm';
import UsuarioService from '../../app/service/usuarioService'
import { withRouter } from 'react-router-dom'
class CadastroUsuario extends React.Component {

    state = {
        showLoadingDialog: false
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }
    

    goHome= () => {
        this.props.history.push('/home')
    } 

    aoCadastrarForm = (dados) => { 
        const { nome, email, senha, senhaRepeticao }  = dados
        const usuario = { nome, email, senha, senhaRepeticao }

        try {
            this.service.validar(usuario)
        }catch(erro){
            const mensagens = erro.mensagens
            mensagens.forEach(msg => f7.dialog.alert(msg, () => {}))
            return false
        }

        this.setState({showLoadingDialog: true})
        const preloader = f7.dialog.preloader('Carregando...', 'blue')

        this.service.salvar(usuario)
        .then(response => {
            preloader.close()
            this.setState({showLoadingDialog: false})
            f7.dialog.alert('Usuário cadastrado com sucesso, ative através do link enviado para seu e-mail!', () => {})
            this.props.history.push('/home')
        }).catch(error => {
            preloader.close()
            this.setState({showLoadingDialog: false})
            f7.dialog.alert(error.response.data.message, () => {})
        })
    }

    render(){
        return(
            <React.Fragment>
                <Progressbar infinite color="blue" style={{ display: this.state.showLoadingDialog ? 'block': 'none'}} />
                <UsuarioForm cadastrar={this.aoCadastrarForm} voltar={this.goHome}/>
            </React.Fragment>  
        )
    }

}

 export default withRouter(CadastroUsuario);