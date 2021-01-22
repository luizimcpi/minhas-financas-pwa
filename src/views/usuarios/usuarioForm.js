import { React, useState } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
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
  cardAction: {
    justifyContent: "center",
  },
  cardContent: {
    textAlign: "center", 
    justifyContent: "center",
    marginTop: 80,
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
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h3" gutterBottom>
                      Cadastro de Usuário
                    </Typography>
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
                    </FormControl><br />
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
                    </FormControl><br/>
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
                    </FormControl><br/>
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
                </CardContent>
                <CardActions className={classes.cardAction}>
                  <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                  </Button>
                  <Button variant="contained" color="secondary" href="#/home">
                    Cancelar
                  </Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
    </form>
    </div>
  );
}