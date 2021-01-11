import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function SimpleMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
          <MenuItem onClick={event => window.location.href='#/login'}>Home</MenuItem>
          <MenuItem onClick={event => window.location.href='#/login'} href="#/login">Login</MenuItem>
          <MenuItem onClick={event => window.location.href='#/cadastro-usuarios'}>Usuários</MenuItem>
          <MenuItem onClick={handleClose}>Lançamentos</MenuItem>
          <MenuItem onClick={handleClose}>Sair</MenuItem>
        </Menu>
      </React.Fragment>
    );
}

export default SimpleMenu