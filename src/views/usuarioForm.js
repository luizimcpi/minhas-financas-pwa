import Button from '@material-ui/core/Button';
import { FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { React } from 'react';
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
  

export default function UsuarioForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <form>
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
                />
            </FormControl>
          </Paper>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary">
              Cadastrar
            </Button>
            <Button variant="contained" color="secondary">
              Cancelar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </form>
    </div>
  );
}