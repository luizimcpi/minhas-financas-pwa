import React from 'react';
import UsuarioForm from './usuarioForm';
import UsuarioService from '../../app/service/usuarioService'
import { withRouter } from 'react-router-dom'

class CadastroUsuario extends React.Component {

    constructor(){
        super();
        this.service = new UsuarioService();
    }
    
    aoCadastrarForm = (dados) => { 
        const { nome, email, senha, senhaRepeticao }  = dados
        const usuario = { nome, email, senha, senhaRepeticao }

        try {
            this.service.validar(usuario)
        }catch(erro){
            const mensagens = erro.mensagens
            mensagens.forEach(msg => alert(msg))
            return false
        }

        this.service.salvar(usuario)
        .then(response => {
            alert('Usuário cadastrado com sucesso!')
            this.props.history.push('/home')
        }).catch(error => {
            alert(error.response.data)
        })
    }

    render(){
        return(
           <UsuarioForm cadastrar={this.aoCadastrarForm}/>
        )
    }

}

 export default withRouter(CadastroUsuario);