import 'fontsource-roboto';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import React from 'react';
import Rotas from './rotas'
import SimpleMenu from './components/simpleMenu'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

function App() {
  
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <SimpleMenu />
          <Typography variant="h6" className={classes.title}>
            $ Minhas Finanças
          </Typography>
          <Button color="inherit" href="#/cadastro-usuarios">Usuários</Button>
          <Button color="inherit" href="#/login">Login</Button>
        </Toolbar>
      </AppBar>
      <Rotas />
    </React.Fragment>
  );
}

export default App;
