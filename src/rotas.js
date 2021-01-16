import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import { AuthConsumer } from './provedorAutenticacao'
import CadastroUsuario from './views/usuarios/cadastroUsuario'
import Home from './views/home/home'
import Login from './views/login/login'
import React from 'react'
import ConsultaLancamentos from './views/lancamentos/consultaLancamentos'

function RotaAutenticada( { component: Component, isUsuarioAutenticado, ...props } ){
    return <Route {...props} render = {(componentProps) => {
       if(isUsuarioAutenticado){
           return (
                <Component {...componentProps} />
           )
       } else {
           return (
               <Redirect to={ { pathname: '/login', state: { from: componentProps.location} } } />
           )
       }
    }} />

}

function RotasApp(props){
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact={true} component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/consulta-lancamentos" component={ConsultaLancamentos} />
            </Switch>
        </HashRouter>
    )
}

const Rotas = () => (
    <AuthConsumer>
        {(context) => (
            <RotasApp isUsuarioAutenticado={context.isAutenticado} />
        )}
    </AuthConsumer>
);

export default Rotas;