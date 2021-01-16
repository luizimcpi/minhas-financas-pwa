import { AuthContext } from '../../provedorAutenticacao'
import HomeCard from './homeCard'
import React from 'react'
import UsuarioService from '../../app/service/usuarioService'

class Home extends React.Component {

    state = {
        saldo: 0,
        usuario: ''
    }

    constructor(){
        super()
        this.usuarioService = new UsuarioService();
    }

    componentDidMount(){
        const usuarioLogado = this.context.usuarioAutenticado
        
        this.usuarioService.obterSaldoPorUsuario(usuarioLogado)
        .then( response => {
            this.setState({saldo: response.data, usuario: usuarioLogado.nome})
        }).catch( error => {
            alert('Erro ao obter saldo do usuário.')
            console.error(error.response);
        });
    }

    render(){
        return(   
            <HomeCard data={this.state}/>
        )
    }
}

Home.contextType = AuthContext

export default Home