import {
    Block,
    Button,
    Col,
    Fab,
    FabButton,
    FabButtons,
    Icon,
    Link,
    NavRight,
    Navbar,
    Page,
    Popup,
    Progressbar,
    Row,
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
        showConfirmDialog: false,
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
                this.setState({showLoadingDialog: false})
                f7.dialog.alert('Nenhum resultado encontrado!', () => {})
            }
            this.setState({showLoadingDialog: false, lancamentos: lista })
        }).catch( error => {
            this.setState({showLoadingDialog: false})
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
            f7.dialog.alert('Status atualizado com sucesso!', () => {})
        }).catch(error => {
            this.setState({showLoadingDialog: false})
            f7.dialog.alert('Erro ao tentar alterar status do lançamento.', () => {})
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
            f7.dialog.alert('Lançamento excluído com sucesso!', () => {})
            this.setState({lancamentos: lancamentos, showConfirmDialog: false, showLoadingDialog: false})
        }).catch( error => {
            this.setState({showLoadingDialog: false})
            f7.dialog.alert('Ocorreu um erro ao tentar excluir o lançamento.', () => {})
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
            <Page>
                <Progressbar infinite color="blue" style={{ display: this.state.showLoadingDialog ? 'block': 'none'}} />
                <Navbar title="SISO"></Navbar>

                <Popup className="demo-popup-swipe" style={{ display: this.state.showConfirmDialog ? 'block': 'none'}} swipeToClose>
                    <Page>
                    <Navbar title="Swipe To Close">
                        <NavRight>
                        <Link popupClose>Close</Link>
                        </NavRight>
                    </Navbar>

                    <div
                        style={{ height: '100%' }}
                        className="display-flex justify-content-center align-items-center"
                    >
                        <p>Deseja mesmo excluir o lançamento: {this.state.lancamentoDeletar.descricao} ?</p>
                    </div>
                    <Block strong>
                        <Row tag="p">
                            <Col tag="span">
                                <Button large fill onClick={this.deletar}>
                                Sim
                                </Button>
                            </Col>
                            <Col tag="span" onClick={this.cancelarDelecao}>
                                <Button large>Não</Button>
                            </Col>
                        </Row>
                    </Block>
                    </Page>
                </Popup>

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
                    </FabButtons>
                </Fab>
                
            </Page>
        )
    }
}

ConsultaLancamentos.contextType = AuthContext

export default withRouter(ConsultaLancamentos);