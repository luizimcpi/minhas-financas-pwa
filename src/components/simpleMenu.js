import { AuthConsumer } from '../provedorAutenticacao'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import React from 'react';

function SimpleMenuBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    if(!props.isUsuarioAutenticado){
        return (
          <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" href="#/login">
            Login
          </Button>
        );
    } else {
      return (
        <React.Fragment>
          <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" onClick={handleClick}>
            Menu
          </Button>
          <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
          > 
            <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" href="#/home">
              Home
            </Button>
            <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" href="#/cadastro-usuarios">
              Usuários
            </Button>
            <Button aria-controls="simple-menu" aria-haspopup="true" variant="contained" onClick={props.deslogar} href="#/login">
              Sair
            </Button>
            {/* <MenuItemCustom render={props.isUsuarioAutenticado} onClick={event => window.location.href='#/home'} label="Home" /> */}
            {/* <MenuItemCustom render={props.isUsuarioAutenticado} onClick={event => window.location.href='#/cadastro-usuarios'} label="Usuários" /> */}
            {/* <MenuItemCustom render={props.isUsuarioAutenticado} href="#/consulta-lancamentos" label="Lançamentos" /> */}
            {/* <MenuItemCustom render={props.isUsuarioAutenticado} onClick={props.deslogar} label="Sair" /> */}
          </Menu>
        </React.Fragment>
      );
    }
   
}

const SimpleMenu = () => (
  <AuthConsumer>
      {(context) => (
          <SimpleMenuBar isUsuarioAutenticado={context.isAutenticado} deslogar={context.encerrarSessao}/>
      )}
  </AuthConsumer>
);

export default SimpleMenu;