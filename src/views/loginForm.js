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
    width: '40ch',
  },
}));

export default function LoginForm({entrar}) {

  const classes = useStyles();
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  

  return (
    <div className={classes.root}>
     <form onSubmit={
                (event) => {
                    event.preventDefault();
                    entrar({email, senha});
                }
            }>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Typography variant="h3" gutterBottom>
          Login
        </Typography>
        </Paper>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControlTextField}>
                <TextField id="outlined-full-width" label="Email" fullWidth
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
            <Button type="submit" variant="contained" color="primary">
              Entrar
            </Button>
          </Paper>
        </Grid>
      </Grid>
      </form>
    </div>
  );
}