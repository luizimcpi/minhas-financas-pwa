import AlertDialogInformation from '../../components/alertDialogInformation'
import AlertDialogSlide from './alertDialogSlide'
import AlertLoading from '../../components/alertLoading'
import { AuthContext } from '../../provedorAutenticacao'
import ConsultaLancamentosForm from './consultaLancamentosForm'
import Footer from '../../components/footer'
import LancamentoService from '../../app/service/lancamentoService'
import LancamentosTable from './consultaLancamentosTable'
import Navbar from '../../components/navbar'
import React from 'react'
import Sidebar from '../../components/sidebar'
import { withRouter } from 'react-router-dom'

class ConsultaLancamentos extends React.Component{

    state = {
        mensagemAlerta: '',
        showInfoDialog: false,
        showLoadingDialog: false,
        showConfirmDialog: false,
        lancamentoDeletar: {},
        lancamentos: [],
    }
    
    constructor(){
        super();
        this.service = new LancamentoService();
    }

    fecharAlertaAviso = () => {
        this.setState({showInfoDialog: false, mensagemAlerta: ''})
    }

    aoBuscarForm = (dados) => {
       
        if(!dados.ano){
            this.setState({showInfoDialog: true, mensagemAlerta: 'O preenchimento do campo Ano é obrigatório.'})
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

        this.service
        .consultar(lancamentoFiltro, usuarioLogado)
        .then( response => {
            const lista = response.data
            if(lista.length < 1){
                this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Nenhum resultado encontrado!'})
            }
            this.setState({showLoadingDialog: false, lancamentos: lista })
        }).catch( error => {
            this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Erro ao consultar lançamentos. Tente novamente ou mais tarde.'})
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
            this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Status atualizado com sucesso!'})
        }).catch(error => {
            this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Erro ao tentar alterar status do lançamento.'})
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
        
        this.setState({showLoadingDialog: true})

        this.service.deletar(this.state.lancamentoDeletar.id, usuarioLogado)
        .then(response => {
            const lancamentos = this.state.lancamentos
            const index = lancamentos.indexOf(this.state.lancamentoDeletar)
            lancamentos.splice(index, 1);
            this.setState({lancamentos: lancamentos, showConfirmDialog: false, showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Lançamento excluído com sucesso!'})
        }).catch( error => {
            this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Ocorreu um erro ao tentar excluir o lançamento.'})
        })
    }

    aoSair = () => {
        this.context.encerrarSessao()
        this.props.history.push('/login')
    }

    render(){

        const meses = this.service.obterListaMeses()
        const tipos = this.service.obterListaTipos()    

        return (
            <div id="wrapper">
                <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <Navbar nomeUsuario={this.context.usuarioAutenticado.nome} deslogar={this.aoSair}/>
                    <div id="content">
                        <div className="container-fluid">
                            <ConsultaLancamentosForm meses={meses} tipos={tipos} buscar={this.aoBuscarForm} cadastrar={this.aoCadastrarForm}/>   
                            <LancamentosTable 
                                lancamentos={this.state.lancamentos} 
                                alterarStatus={this.aoAlterarStatus}
                                deletarAction={this.abrirConfirmacao}
                                editarAction={this.editar}
                            /> 
                            <AlertDialogSlide 
                                open={this.state.showConfirmDialog} 
                                lancamentoInfo={this.state.lancamentoDeletar}
                                deletarAction={this.deletar} 
                                cancelarAction={this.cancelarDelecao} />   

                            <AlertDialogInformation 
                                open={this.state.showInfoDialog} 
                                close={this.fecharAlertaAviso} 
                                mensagemCustomizada={this.state.mensagemAlerta} 
                            />             

                            <AlertLoading open={this.state.showLoadingDialog} />
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div> 
        )
    }
}

ConsultaLancamentos.contextType = AuthContext

export default withRouter(ConsultaLancamentos);