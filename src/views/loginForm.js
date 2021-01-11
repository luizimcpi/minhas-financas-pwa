import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import TextField from '@material-ui/core/TextField';
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
}));
  

export default function LoginForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <FormControl>
                <TextField id="outlined-full-width" label="Email" fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined" 
                />
              </FormControl>
          </Paper>
          <Paper className={classes.paper}>
            <FormControl>
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
                />
            </FormControl>
          </Paper>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              Entrar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}