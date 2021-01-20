import AlertDialogInformation from '../../components/alertDialogInformation'
import AlertLoading from '../../components/alertLoading'
import React from 'react';
import UsuarioForm from './usuarioForm';
import UsuarioService from '../../app/service/usuarioService'
import { withRouter } from 'react-router-dom'
class CadastroUsuario extends React.Component {

    state = {
        showLoadingDialog: false,
        mensagemAlerta: '',
        showInfoDialog: false
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }
    
    fecharAlertaAviso = () => {
        this.setState({showInfoDialog: false, mensagemAlerta: ''})
    }

    aoCadastrarForm = (dados) => { 
        const { nome, email, senha, senhaRepeticao }  = dados
        const usuario = { nome, email, senha, senhaRepeticao }

        try {
            this.service.validar(usuario)
        }catch(erro){
            const mensagens = erro.mensagens
            mensagens.forEach(msg => this.setState({showInfoDialog: true, mensagemAlerta: msg}))
            return false
        }

        this.setState({showLoadingDialog: true})

        this.service.salvar(usuario)
        .then(response => {
            this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Usuário cadastrado com sucesso!'})
            this.props.history.push('/home')
        }).catch(error => {
            this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: error.response.data})
        })
    }

    render(){
        return(
            <React.Fragment>
                <UsuarioForm cadastrar={this.aoCadastrarForm}/>
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

 export default withRouter(CadastroUsuario);