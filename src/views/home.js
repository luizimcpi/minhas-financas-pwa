import { AuthContext } from '../provedorAutenticacao'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react'
import Typography from '@material-ui/core/Typography';
import UsuarioService from '../app/service/usuarioService'
import currencyFormatter from 'currency-formatter'

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
            this.setState({saldo: response.data})
        }).catch( error => {
            console.error(error.response);
        });
    }

    render(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={{ textAlign: 'center' }}>
                        <Typography variant="h3" gutterBottom>
                            Home
                        </Typography>
                    </Paper>
                    <Paper style={{ textAlign: 'center'}}>
                        <Typography variant="h4" gutterBottom>
                            Saldo
                        </Typography>
                        <p>Seu saldo para o mês atual é de R$ {currencyFormatter.format(this.state.saldo, {locale: 'pt-BR'})}</p>
                    </Paper>
                    <Paper style={{ textAlign: 'center'}}>
                        <Button type="submit" variant="contained" color="primary">
                            Lançamentos
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

Home.contextType = AuthContext

export default Home