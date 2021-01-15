import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import { AuthConsumer } from './provedorAutenticacao'
import CadastroUsuario from './views/usuarios/cadastroUsuario'
import Home from './views/home'
import Login from './views/login/login'
import React from 'react'

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

function Rotas(props){
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact={true} component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                <RotaAutenticada isUsuarioAutenticado={props.isUsuarioAutenticado} path="/home" component={Home} />
            </Switch>
        </HashRouter>
    )
}

export default () => (
    <AuthConsumer>
        {(context) => (
            <Rotas isUsuarioAutenticado={context.isAutenticado} />
        )}
    </AuthConsumer>
);