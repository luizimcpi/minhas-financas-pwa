import { AuthContext } from '../../provedorAutenticacao'
import LancamentoService from '../../app/service/lancamentoService'
import React from 'react'
import { withRouter } from 'react-router-dom'
import ConsultaLancamentosForm from './consultaLancamentosForm'

class ConsultaLancamentos extends React.Component{

    state = {
        ano: '',
        mes: '',
        tipo: '',
        descricao: '',
        showConfirmDialog: false,
        lancamentoDeletar: {},
        lancamentos: []
    }

    constructor(){
        super();
        this.service = new LancamentoService();
    }

    aoBuscarForm = (dados) => {
        if(!dados.ano){
            alert('O preenchimento do campo Ano é obrigatório.')
            return false
        }
        
        const usuarioLogado = this.context.usuarioAutenticado
        
        const lancamentoFiltro = {
            ano: dados.ano,
            mes: dados.mes,
            tipo: dados.tipo,
            descricao: dados.descricao
        }

        this.service
        .consultar(lancamentoFiltro, usuarioLogado)
        .then( response => {
            const lista = response.data
            if(lista.length < 1){
                alert('Nenhum resultado encontrado.')
            }
            console.log('lista :>>>> ', lista)
            this.setState({ lancamentos: lista })
        }).catch( error => {
            alert('Erro ao consultar lançamentos. Tente novamente ou mais tarde.')
        })
    }

    cadastrar = () => {
        this.props.history.push('/cadastro-lancamentos')
    }

    editar = (id) => {
        this.props.history.push(`/cadastro-lancamentos/${id}`)
    }

    alterarStatus = (lancamento, status) => {
        const usuarioLogado = this.context.usuarioAutenticado
        
        this.service
        .alterarStatus(lancamento.id, status, usuarioLogado)
        .then(response => {
            const lancamentos = this.state.lancamentos
            const index = lancamentos.indexOf(lancamento)

            if(index !== -1){
                lancamento['status'] = status
                lancamentos[index] = lancamento
                this.setState( { lancamentos })
            }
            alert('Status atualizado com sucesso!')
        }).catch(error => {
            alert('Erro ao tentar alterar status do lançamento.')
        })
    }

    abrirConfirmacao = (lancamento) => {
        this.setState({showConfirmDialog: true, lancamentoDeletar: lancamento})
    }

    cancelarDelecao = () => {
        this.setState({showConfirmDialog: false, lancamentoDeletar: {}})
    }

    deletar = () => {
        const usuarioLogado = this.context.usuarioAutenticado
        
        this.service.deletar(this.state.lancamentoDeletar.id, usuarioLogado)
        .then(response => {
            const lancamentos = this.state.lancamentos
            const index = lancamentos.indexOf(this.state.lancamentoDeletar)
            lancamentos.splice(index, 1);
            this.setState({lancamentos: lancamentos, showConfirmDialog: false})
            alert('Lançamento deletado com sucesso!')
        }).catch( error => {
            alert('Ocorreu um erro ao tentar deletar o lançamento.')
        })
    }

    render(){

        const meses = this.service.obterListaMeses()
        const tipos = this.service.obterListaTipos()        

        return (
            <ConsultaLancamentosForm meses={meses} tipos={tipos} buscar={this.aoBuscarForm} />   
        )
    }
}

ConsultaLancamentos.contextType = AuthContext

export default withRouter(ConsultaLancamentos);