import { React, useState } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
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
  

export default function ConsultaLancamentoForm({meses, tipos, buscar, cadastrar, home}) {
  const classes = useStyles();
  const [ano, setAno] = useState("")
  const [mes, setMes] = useState("")
  const [tipo, setTipo] = useState("")
  const [descricao, setDescricao] = useState("")

  const optionsMeses = meses.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  );

  const optionsTipos = tipos.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  );

  return (
    <div className={classes.root}>
      <form onSubmit={
                (event) => {
                    event.preventDefault();
                    buscar({ano, mes, tipo, descricao});
                }
            }>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                  <Card className={classes.root}>
                      <CardContent className={classes.cardContent}>
                          <Typography variant="h3" gutterBottom>
                            Consulta Lançamentos
                          </Typography>
                          <FormControl className={classes.formControlTextField}>
                            <TextField id="outlined-full-width-ano" label="Ano" fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                value={ano}
                                onChange={
                                    event => {
                                        setAno(event.target.value);
                                    }
                                }
                            />
                          </FormControl><br />
                          <FormControl variant="outlined" className={classes.formControlTextField}>
                              <Select
                                  native
                                  value={mes}
                                  onChange={
                                      event => {
                                          setMes(event.target.value);
                                      }
                                  }
                                  label="Mês"
                                  inputProps={{
                                      name: 'mes',
                                      id: 'outlined-mes-native-simple',
                                  }}
                              >
                              {optionsMeses}
                              </Select>
                          </FormControl><br/>
                          <FormControl className={classes.formControlTextField}>
                              <TextField id="outlined-full-width-descricao" label="Descrição" fullWidth
                                  margin="normal"
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                                  variant="outlined" 
                                  value={descricao}
                                  onChange={
                                      event => {
                                          setDescricao(event.target.value);
                                      }
                                  }
                              />
                          </FormControl><br />
                          <FormControl variant="outlined" className={classes.formControlTextField}>
                              <Select
                                  native
                                  value={tipo}
                                  onChange={
                                      event => {
                                          setTipo(event.target.value);
                                      }
                                  }
                                  label="Tipo"
                                  inputProps={{
                                      name: 'tipo',
                                      id: 'outlined-tipo-native-simple',
                                  }}
                              >
                              {optionsTipos}
                              </Select>
                          </FormControl><br/>
                      </CardContent>
                      <CardActions className={classes.cardAction}>
                        <Button type="submit" variant="contained" color="primary">
                          Buscar
                        </Button>
                        <Button variant="contained" color="secondary" onClick={cadastrar}>
                            Cadastrar
                        </Button>
                        <IconButton 
                          color="secondary" 
                          aria-label="home" 
                          component="span"
                          onClick={home}
                        >
                          <HomeIcon />
                        </IconButton>
                      </CardActions>
                  </Card>
              </Grid>
          </Grid>
      </form>
    </div>
  );
}