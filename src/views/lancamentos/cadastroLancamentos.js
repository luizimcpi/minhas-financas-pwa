import { AuthContext } from '../../provedorAutenticacao'
import CadastroLancamentosForm from './cadastroLancamentosForm'
import LancamentoService from '../../app/service/lancamentoService'
import React from 'react'
import { withRouter } from 'react-router-dom'
import {
    Page,
    Progressbar,
    f7
} from 'framework7-react'

class CadastroLancamentos extends React.Component {

    state = {
        showLoadingDialog: false,
        lancamentoAtualizar: {
            id: null,
            descricao: '',
            valor: '',
            mes: '',
            ano: '',
            tipo: '',
            status: '',
            atualizando: false
        }
    }

    constructor(){
        super();
        this.lancamentoService = new LancamentoService()
    }

    componentDidMount(){
        const params = this.props.match.params
        const usuarioLogado = this.context.usuarioAutenticado
        if(params.id && usuarioLogado){
            
            this.setState({showLoadingDialog: true})
            const preloader = f7.dialog.preloader('Carregando...', 'blue')
            
            this.lancamentoService
            .obterPorId(params.id, usuarioLogado)
            .then(response => {
                preloader.close()
                this.setState({ lancamentoAtualizar: { 
                    id: response.data.id,
                    descricao: response.data.descricao,
                    valor: response.data.valor,
                    mes: response.data.mes,
                    ano: response.data.ano,
                    tipo: response.data.tipo,
                    status: response.data.status,
                    atualizando: true,
                } , showLoadingDialog: false })
            }).catch(error => {
                preloader.close()
                f7.dialog.alert(error.response.data, () => {})
                this.setState({showLoadingDialog: false})
            })
        }
    }
    
    submit = (dados) => {
        const usuarioLogado = this.context.usuarioAutenticado

        const { descricao, valor, mes, ano, tipo} = dados

        const lancamento = { descricao, valor, mes, ano, tipo }

        try {
            this.lancamentoService.validar(lancamento)
        }catch(erro){
            const mensagens = erro.mensagens
            mensagens.forEach(msg =>  f7.dialog.alert(msg, () => {}))
            return false
        }

        this.setState({showLoadingDialog: true})
        const preloader = f7.dialog.preloader('Carregando...', 'blue')

        this.lancamentoService
        .salvar(lancamento, usuarioLogado)
        .then( response => {
            preloader.close()
            f7.dialog.alert('Lançamento cadastrado com sucesso!', () => {})
            this.setState({showLoadingDialog: false})
            this.props.history.push('/consulta-lancamentos')
        }).catch(error => {
            preloader.close()
            f7.dialog.alert(error.response.data, () => {})
            this.setState({showLoadingDialog: false})
        })
    } 

    atualizar = (dados) => {
        const usuarioLogado = this.context.usuarioAutenticado
    
        const { descricao, valor, mes, ano, tipo, status, id} = dados
        const lancamento = { descricao, valor, mes, ano, tipo, status, id }

        this.setState({showLoadingDialog: true})
        const preloader = f7.dialog.preloader('Carregando...', 'blue')

        this.lancamentoService
        .atualizar(lancamento, usuarioLogado)
        .then( response => {
            preloader.close()
            f7.dialog.alert('Lançamento atualizado com sucesso!', () => {})
            this.setState({showLoadingDialog: false})
            this.props.history.push('/consulta-lancamentos')
        }).catch(error => {
            preloader.close()
            f7.dialog.alert( error.response.data, () => {})
            this.setState({showLoadingDialog: false})
        })
    }

    cancelar = () => {
        this.props.history.push('/consulta-lancamentos')
    }

    aoSair = () => {
        this.context.encerrarSessao()
        this.props.history.push('/login')
    }
    
    render(){

        const tipos = this.lancamentoService.obterListaTipos()
        const meses = this.lancamentoService.obterListaMeses()

        return (
            <Page>
                <Progressbar infinite color="blue" style={{ display: this.state.showLoadingDialog ? 'block': 'none'}} />
                <CadastroLancamentosForm 
                    meses={meses} 
                    tipos={tipos} 
                    cancelar={this.cancelar} 
                    cadastrar={this.submit} 
                    atualizar={this.atualizar} 
                    lancamentoAtualizar={this.state.lancamentoAtualizar}
                />
            </Page>
        )
    }
}


CadastroLancamentos.contextType = AuthContext

export default withRouter(CadastroLancamentos)