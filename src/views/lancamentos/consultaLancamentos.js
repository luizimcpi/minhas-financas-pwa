import {
 Fab,
 FabButton,
 FabButtons,
 Icon,
 Navbar,
 Page,
 Progressbar,
 f7
} from 'framework7-react'

import { AuthContext } from '../../provedorAutenticacao'
import ConsultaLancamentosForm from './consultaLancamentosForm'
import LancamentoService from '../../app/service/lancamentoService'
import LancamentosTable from './consultaLancamentosTable'
import React from 'react'
import { withRouter } from 'react-router-dom'

class ConsultaLancamentos extends React.Component{

    state = {
        showLoadingDialog: false,
        showTableDialog: false,
        lancamentoDeletar: {},
        lancamentos: [],
    }
    
    constructor(){
        super();
        this.service = new LancamentoService();
    }

    aoBuscarForm = (dados) => {
       
        if(!dados.ano){
            f7.dialog.alert('O preenchimento do campo Ano é obrigatório.', () => {})
            return false
        }

        if(!dados.mes){
            f7.dialog.alert('O preenchimento do campo Mês é obrigatório.', () => {})
            return false
        }
        
        const usuarioLogado = this.context.usuarioAutenticado
        
        const lancamentoFiltro = {
            ano: dados.ano,
            mes: dados.mes,
            tipo: dados.tipo,
            descricao: dados.descricao
        }

        this.setState({showLoadingDialog: true})

        const preloader = f7.dialog.preloader('Carregando...', 'blue')

        this.service
        .consultar(lancamentoFiltro, usuarioLogado)
        .then( response => {
            const lista = response.data
            if(lista.length < 1){
                preloader.close()
                this.setState({showLoadingDialog: false, showTableDialog: false})
                f7.dialog.alert('Nenhum resultado encontrado!', () => {})
            }
            preloader.close()
            this.setState({showLoadingDialog: false, showTableDialog: true, lancamentos: lista })
        }).catch( error => {
            preloader.close()
            this.setState({showLoadingDialog: false, showTableDialog: false})
            f7.dialog.alert('Erro ao consultar lançamentos. Tente novamente ou mais tarde.', () => {})
        })
    }

    aoCadastrarForm = () => {
        this.props.history.push('/cadastro-lancamentos')
    }

    editar = (id) => {
        this.props.history.push(`/cadastro-lancamentos/${id}`)
    }

    aoAlterarStatus = (lancamento, status) => {
        const usuarioLogado = this.context.usuarioAutenticado
        this.setState({showLoadingDialog: true})
        const preloader = f7.dialog.preloader('Carregando...', 'blue')

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
            this.setState({showLoadingDialog: false})
            preloader.close()
            f7.dialog.alert('Status atualizado com sucesso!', () => {})
        }).catch(error => {
            preloader.close()
            this.setState({showLoadingDialog: false})
            f7.dialog.alert('Erro ao tentar alterar status do lançamento.', () => {})
        })
    }

     abrirConfirmacao = (lancamento) => {
        const msg = `Deseja realmente excluir o lançamento ${lancamento.descricao}?`
        f7.dialog.confirm(msg, function () {
            this.deletar(lancamento)
        });
    }

    deletar = (lancamento) => {
        const usuarioLogado = this.context.usuarioAutenticado
        
        this.setState({showLoadingDialog: true})
        const preloader = f7.dialog.preloader('Carregando...', 'blue')

        this.service.deletar(lancamento.id, usuarioLogado)
        .then(response => {
            const lancamentos = this.state.lancamentos
            const index = lancamentos.indexOf(lancamento)
            lancamentos.splice(index, 1);
            f7.dialog.alert('Lançamento excluído com sucesso!', () => {})
            this.setState({lancamentos: lancamentos, showLoadingDialog: false})
            preloader.close()
        }).catch( error => {
            preloader.close()
            this.setState({showLoadingDialog: false})
            f7.dialog.alert('Ocorreu um erro ao tentar excluir o lançamento.', () => {})
        })
    }

    aoSair = () => {
        this.context.encerrarSessao()
        this.props.history.push('/login')
    }

    goHome = () => {
        this.props.history.push('/home')
    }

    fecharTabela = () => {
        this.setState({showTableDialog: false})
    }

    render(){

        const meses = this.service.obterListaMeses()
        const tipos = this.service.obterListaTipos()    

        return (
            <Page>
                <Progressbar infinite color="blue" style={{ display: this.state.showLoadingDialog ? 'block': 'none'}} />
                <Navbar title="CONFIN"></Navbar>

                <ConsultaLancamentosForm meses={meses} tipos={tipos} buscar={this.aoBuscarForm} cadastrar={this.aoCadastrarForm}/>               

                <LancamentosTable 
                    lancamentos={this.state.lancamentos} 
                    alterarStatus={this.aoAlterarStatus}
                    deletarAction={this.abrirConfirmacao}
                    editarAction={this.editar}
                />    

                <Fab position="right-bottom" slot="fixed" color="blue">
                    <Icon ios="f7:plus" aurora="f7:plus" md="f7:plus"></Icon>
                    <Icon ios="f7:xmark" aurora="f7:xmark" md="f7:xmark"></Icon>
                    <FabButtons position="top">
                        <FabButton onClick={this.aoSair} label="Sair" color="red"> 
                            <Icon ios="f7:nosign" aurora="f7:nosign" md="f7:nosign"></Icon>
                        </FabButton>
                        <FabButton onClick={this.goHome} label="Home" color="blue"> 
                            <Icon ios="f7:house" aurora="f7:house" md="f7:house"></Icon>
                        </FabButton>
                    </FabButtons>
                </Fab>
                
            </Page>
        )
    }
}

ConsultaLancamentos.contextType = AuthContext

export default withRouter(ConsultaLancamentos);