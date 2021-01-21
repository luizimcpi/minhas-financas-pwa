import { React, useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { FormControl } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
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
  },
}));


  
const CadastroLancamentosForm = (props) => {
  
  const classes = useStyles();

  const [id, setId] = useState("")
  const [descricao, setDescricao] = useState("")
  const [valor, setValor] = useState("")
  const [mes, setMes] = useState("")
  const [ano, setAno] = useState("")
  const [tipo, setTipo] = useState("")
  const [status, setStatus] = useState("")
  const [atualizando, setAtualizando] = useState("")

  useEffect(() => {
    setId(props.lancamentoAtualizar.id)
    setDescricao(props.lancamentoAtualizar.descricao)
    setValor(props.lancamentoAtualizar.valor)
    setMes(props.lancamentoAtualizar.mes)
    setAno(props.lancamentoAtualizar.ano)
    setTipo(props.lancamentoAtualizar.tipo)
    setStatus(props.lancamentoAtualizar.status)
    setAtualizando(props.lancamentoAtualizar.atualizando)
  }, [
        props.lancamentoAtualizar.id,
        props.lancamentoAtualizar.descricao, 
        props.lancamentoAtualizar.valor, 
        props.lancamentoAtualizar.mes, 
        props.lancamentoAtualizar.ano, 
        props.lancamentoAtualizar.tipo,
        props.lancamentoAtualizar.status,
        props.lancamentoAtualizar.atualizando
      ]);

  const optionsMeses = props.meses.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  );

  const optionsTipos = props.tipos.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  );



  return (
    <div className={classes.root}>
     <form onSubmit={
                (event) => {
                    event.preventDefault();
                    if(atualizando){
                      props.atualizar({descricao, valor, mes, ano, tipo, status, id})
                    } else {
                      props.cadastrar({descricao, valor, mes, ano, tipo});
                    }

                }
            }>

      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h3" gutterBottom>
                      {atualizando ? 'Atualização de Lançamento' : 'Cadastro de Lançamentos'}
                    </Typography>
                    <FormControl className={classes.formControlTextField}>
                        <TextField id="outlined-full-width-descricao" label="Descrição" fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined" 
                            name="descricao"
                            value={descricao}
                            onChange={
                              event => {
                                  setDescricao(event.target.value)
                                }
                            }
                        />
                    </FormControl><br />
                    <FormControl className={classes.formControlTextField}>
                      <TextField id="outlined-full-width-valor" label="Valor" fullWidth
                          margin="normal"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          name="valor"
                          variant="outlined" 
                          value={valor}
                          onChange={
                              event => {
                                  setValor(event.target.value)
                                }
                            }
                      />
                    </FormControl><br/>
                    <FormControl variant="outlined" className={classes.formControlTextField}>
                        <Select
                            native
                            value={mes}
                            name="mes"
                            onChange={
                              event => {
                                  setMes(event.target.value)
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
                    </FormControl><br />
                    <FormControl className={classes.formControlTextField}>
                      <TextField id="outlined-full-width-ano" label="Ano" fullWidth
                          margin="normal"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          variant="outlined" 
                          name="ano"
                          value={ano}
                          onChange={
                              event => {
                                  setAno(event.target.value)
                                }
                            }
                      />
                    </FormControl><br/>
                    <FormControl variant="outlined" className={classes.formControlTextField}>
                        <Select
                            native
                            value={tipo}
                            onChange={
                              event => {
                                  setTipo(event.target.value)
                                }
                            }
                            label="Tipo"
                            name="tipo"
                            inputProps={{
                                name: 'tipo',
                                id: 'outlined-tipo-native-simple',
                            }}
                        >
                        {optionsTipos}
                        </Select>
                  </FormControl><br />
                  <FormControl className={classes.formControlTextField}>
                      <TextField id="outlined-full-width-valor" label="Status" fullWidth
                          margin="normal"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          name="status"
                          variant="outlined" 
                          value={status}
                          disabled
                      />
                    </FormControl><br/>
                </CardContent>
                <CardActions className={classes.cardAction}>
                  <Button type="submit" variant="contained" color="primary">
                   {atualizando ? 'Atualizar' : 'Cadastrar'}
                  </Button>
                  <Button variant="contained" color="secondary" onClick={props.cancelar}>
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

export default CadastroLancamentosForm;