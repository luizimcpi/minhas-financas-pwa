import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import currencyFormatter from 'currency-formatter'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function LancamentosTable({lancamentos}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><b>Descrição</b></TableCell>
            <TableCell align="right"><b>Valor</b></TableCell>
            <TableCell align="right"><b>Tipo</b></TableCell>
            <TableCell align="right"><b>Mês</b></TableCell>
            <TableCell align="right"><b>Situação</b></TableCell>
            <TableCell align="right"><b>Ações</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lancamentos.map((row) => (
            <TableRow key={row.id}>
              <TableCell scope="row">
                {row.descricao}
              </TableCell>
              <TableCell align="right">{currencyFormatter.format(row.valor, {locale: 'pt-BR'})}</TableCell>
              <TableCell align="right">{row.tipo}</TableCell>
              <TableCell align="right">{row.mes}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
             
              <TableCell align="right"> 
                <label htmlFor="icon-button-file">
                  <IconButton color="primary" size="small" aria-label="efetivar" component="span" disabled={row.status !== 'PENDENTE'}>
                    <CheckCircleIcon />
                  </IconButton>
                </label>
                <label htmlFor="icon-button-file">
                  <IconButton color="secondary" size="small" aria-label="cancelar" component="span" disabled={row.status !== 'PENDENTE'}>
                    <ClearIcon />
                  </IconButton>
                </label>
                <label htmlFor="icon-button-file">
                  <IconButton color="default" size="small" aria-label="editar" component="span">
                    <EditIcon />
                  </IconButton>
                </label>
                <label htmlFor="icon-button-file">
                  <IconButton color="secondary" size="small" aria-label="excluir" component="span">
                    <DeleteIcon />
                  </IconButton>
                </label>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}