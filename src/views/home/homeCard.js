import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import currencyFormatter from 'currency-formatter'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardContent: {
    marginTop: 80,
  },
});

export default function HomeCard({data, consultar, deslogar}) {
  const classes = useStyles();  
  const saldoAtual = data.saldo
  const nomeUsuario = data.usuario

  return (
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Olá, {nomeUsuario}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Seu saldo para o mês atual é de: 
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {currencyFormatter.format(saldoAtual, {locale: 'pt-BR'})}
                    </Typography>
                    <Typography variant="body2" component="p">
                    com seu controle financeiro em dia,
                    <br />
                    {'"é muito mais difícil ficar no vermelho!"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" onClick={consultar} size="small">Lançamentos</Button>
                    <Button variant="contained" color="secondary" onClick={deslogar} size="small">Sair</Button>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  );
}