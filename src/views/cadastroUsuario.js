import React from 'react';
import UsuarioForm from './usuarioForm';
import { withRouter } from 'react-router-dom'

class CadastroUsuario extends React.Component {
    
    render(){
        return(
           <UsuarioForm />
        )
    }

}

 export default withRouter(CadastroUsuario);