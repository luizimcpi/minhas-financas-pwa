import { AuthContext } from '../../provedorAutenticacao'
import HomeCard from './homeCard'
import React from 'react'
import UsuarioService from '../../app/service/usuarioService'

class Home extends React.Component {

    state = {
        saldo: 0
    }

    constructor(){
        super()
        this.usuarioService = new UsuarioService();
    }

    componentDidMount(){
        const usuarioLogado = this.context.usuarioAutenticado
        
        this.usuarioService.obterSaldoPorUsuario(usuarioLogado)
        .then( response => {
            console.log('saldo na home.js >>>> ' + response.data)
            this.setState({saldo: response.data})
        }).catch( error => {
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