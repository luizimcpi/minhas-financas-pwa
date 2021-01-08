import LoginForm from './loginForm';
import React from 'react';
import { withRouter } from 'react-router-dom'

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }
    
    render(){
        return(
           <LoginForm />
        )
    }

}

 export default withRouter(CadastroUsuario);