import AcoesLancamentosMenu from './acoesLancamentosMenu'
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
              <TableCell align="right"><AcoesLancamentosMenu /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}