import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
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
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={handleClick}/>
        </IconButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose} href="#/cadastro-usuarios">Usuários</MenuItem>
            <MenuItem onClick={handleClose}>Lançamentos</MenuItem>
            <MenuItem onClick={handleClose}>Sair</MenuItem>
          {/* <Button color="inherit" href="#/cadastro-usuarios">Usuários</Button>
          <Button color="inherit" href="#/cadastro-usuarios">Lançamentos</Button>
          <Button color="inherit" href="#/login">Login</Button>
          <Button color="inherit" href="#/cadastro-usuarios">Sair</Button> */}
        </Menu>
      </React.Fragment>
    );
}

export default SimpleMenu