import { React, useState } from 'react';

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
  

export default function CadastroLancamentosForm(props) {
  console.log('atualizando ', props.lancamentoAtualizar.id)

  const classes = useStyles();
  const [descricao, setDescricao] = useState("")
  const [valor, setValor] = useState("")
  const [mes, setMes] = useState("")
  const [ano, setAno] = useState("")
  const [tipo, setTipo] = useState("")
  const [status, setStatus] = useState("")

  // const descricaoAtualizar = props.lancamentoAtualizar.descricaoAtualizar
  // const valorAtualizar = props.lancamentoAtualizar.valor
  // const mesAtualizar = props.lancamentoAtualizar.mes
  // const anoAtualizar = props.lancamentoAtualizar.ano
  // const tipoAtualizar = props.lancamentoAtualizar.tipo

  const idAtualizar = props.lancamentoAtualizar.id
  const statusAtualizar = props.lancamentoAtualizar.status
  const atualizando = props.lancamentoAtualizar.atualizando


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
                      props.atualizar({descricao, valor, mes, ano, tipo, status: statusAtualizar, id: idAtualizar})
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
                            value={descricao}
                            onChange={
                                event => {
                                    setDescricao(event.target.value);
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
                          variant="outlined" 
                          value={valor}
                          onChange={
                              event => {
                                  setValor(event.target.value);
                              }
                          }
                      />
                    </FormControl><br/>
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
                    </FormControl><br />
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
                    </FormControl><br/>
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
                  </FormControl><br />
                  <FormControl className={classes.formControlTextField}>
                      <TextField id="outlined-full-width-valor" label="Status" fullWidth
                          margin="normal"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          variant="outlined" 
                          value={atualizando ? statusAtualizar : status}
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