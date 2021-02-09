import AlertDialogInformation from '../../components/alertDialogInformation'
import AlertLoading from '../../components/alertLoading'
import { AuthContext } from '../../provedorAutenticacao'
import CadastroLancamentosForm from './cadastroLancamentosForm'
import Footer from '../../components/footer'
import LancamentoService from '../../app/service/lancamentoService'
import Navbar from '../../components/navbar'
import React from 'react'
import Sidebar from '../../components/sidebar'
import { withRouter } from 'react-router-dom'

class CadastroLancamentos extends React.Component {

    state = {
        showLoadingDialog: false,
        mensagemAlerta: '',
        showInfoDialog: false,
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
            
            this.lancamentoService
            .obterPorId(params.id, usuarioLogado)
            .then(response => {
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
                this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: error.response.data})
            })
        }
    }

    fecharAlertaAviso = () => {
        this.setState({showInfoDialog: false, mensagemAlerta: ''})
    }
    
    submit = (dados) => {
        const usuarioLogado = this.context.usuarioAutenticado

        const { descricao, valor, mes, ano, tipo} = dados

        const lancamento = { descricao, valor, mes, ano, tipo }

        try {
            this.lancamentoService.validar(lancamento)
        }catch(erro){
            const mensagens = erro.mensagens
            mensagens.forEach(msg => this.setState({showInfoDialog: true, mensagemAlerta: msg}))
            return false
        }

        this.setState({showLoadingDialog: true})

        this.lancamentoService
        .salvar(lancamento, usuarioLogado)
        .then( response => {
            this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Lançamento cadastrado com sucesso!'})
            this.props.history.push('/consulta-lancamentos')
        }).catch(error => {
            this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: error.response.data})
        })
    } 

    atualizar = (dados) => {
        const usuarioLogado = this.context.usuarioAutenticado
    
        const { descricao, valor, mes, ano, tipo, status, id} = dados
        const lancamento = { descricao, valor, mes, ano, tipo, status, id }

        this.setState({showLoadingDialog: true})

        this.lancamentoService
        .atualizar(lancamento, usuarioLogado)
        .then( response => {
            this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: 'Lançamento atualizado com sucesso!'})
            this.props.history.push('/consulta-lancamentos')
        }).catch(error => {
            this.setState({showLoadingDialog: false, showInfoDialog: true, mensagemAlerta: error.response.data})
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
            <div id="wrapper">
                <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <Navbar nomeUsuario={this.context.usuarioAutenticado.nome} deslogar={this.aoSair}/>
                    <div id="content">
                        <div className="container-fluid">
                            <CadastroLancamentosForm 
                                meses={meses} 
                                tipos={tipos} 
                                cancelar={this.cancelar} 
                                cadastrar={this.submit} 
                                atualizar={this.atualizar} 
                                lancamentoAtualizar={this.state.lancamentoAtualizar}
                                />
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


CadastroLancamentos.contextType = AuthContext

export default withRouter(CadastroLancamentos)