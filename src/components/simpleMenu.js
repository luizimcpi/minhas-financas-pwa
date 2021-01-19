import { AuthConsumer } from '../provedorAutenticacao'
import ButtonCustom from './buttonCustom';
import Menu from '@material-ui/core/Menu';
import MenuItemCustom from './menuItemCustom'
import React from 'react';

function SimpleMenuBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
      <React.Fragment>
        <ButtonCustom render={props.isUsuarioAutenticado} ariaControls="simple-menu" ariaHaspopup="true" variant="contained" onClick={handleClick} label="Menu" />
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        > 
          <MenuItemCustom render={props.isUsuarioAutenticado} onClick={event => window.location.href='#/home'} label="Home" />
          <MenuItemCustom render={props.isUsuarioAutenticado} onClick={event => window.location.href='#/cadastro-usuarios'} label="Usuários" />
          <MenuItemCustom render={props.isUsuarioAutenticado} onClick={event => window.location.href='#/consulta-lancamentos'} label="Lançamentos" />
          <MenuItemCustom render={props.isUsuarioAutenticado} onClick={props.deslogar} label="Sair" />
        </Menu>
      </React.Fragment>
    );   
}

const SimpleMenu = () => (
  <AuthConsumer>
      {(context) => (
          <SimpleMenuBar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao}/>
      )}
  </AuthConsumer>
);

export default SimpleMenu;