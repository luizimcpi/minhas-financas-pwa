import { React, useState } from 'react';

import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControlTextField: {
    width: '30ch',
  },
}));
  

export default function UsuarioForm({cadastrar}) {
  const classes = useStyles();
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaRepeticao, setSenhaRepeticao] = useState("")

  return (
    <div className={classes.root}>
     <form onSubmit={
                (event) => {
                    event.preventDefault();
                    cadastrar({nome, email, senha, senhaRepeticao});
                }
            }>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Typography variant="h3" gutterBottom>
          Cadastro de Usuário
        </Typography>
        </Paper>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControlTextField}>
                <TextField id="outlined-full-width-nome" label="Nome" fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={nome}
                    onChange={
                        event => {
                            setNome(event.target.value);
                        }
                    }
                />
              </FormControl>
          </Paper>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControlTextField}>
                <TextField id="outlined-full-width-email" label="Email" fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined" 
                    value={email}
                    onChange={
                        event => {
                            setEmail(event.target.value);
                        }
                    }
                />
              </FormControl>
          </Paper>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControlTextField}>
                <TextField
                    id="outlined-password-input"
                    label="Senha"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={senha}
                    onChange={
                        event => {
                            setSenha(event.target.value);
                        }
                    }
                />
            </FormControl>
          </Paper>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControlTextField}>
                <TextField
                    id="outlined-repeated-password-input"
                    label="Confirmação de Senha"
                    type="password"
                    autoComplete="current-password"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={senhaRepeticao}
                    onChange={
                        event => {
                            setSenhaRepeticao(event.target.value);
                        }
                    }
                />
            </FormControl>
          </Paper>
          <Paper className={classes.paper}>
            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
            <Button variant="contained" color="secondary" href="#/home">
              Cancelar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </form>
    </div>
  );
}