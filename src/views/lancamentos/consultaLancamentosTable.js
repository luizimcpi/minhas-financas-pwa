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

const LancamentosTable = (props) => {
  
  const rows = props.lancamentos.map( lancamento => {
    return (
      <TableRow key={lancamento.id}>
      <TableCell scope="row">
        {lancamento.descricao}
      </TableCell>
      <TableCell align="right">{currencyFormatter.format(lancamento.valor, {locale: 'pt-BR'})}</TableCell>
      <TableCell align="right">{lancamento.tipo}</TableCell>
      <TableCell align="right">{lancamento.mes}</TableCell>
      <TableCell align="right">{lancamento.status}</TableCell>
    
      <TableCell align="right"> 
        <label htmlFor="icon-button-file">
          <IconButton 
            color="primary" 
            size="small" 
            aria-label="efetivar" 
            component="span" 
            disabled={lancamento.status !== 'PENDENTE'}
            onClick={ e => props.alterarStatus(lancamento, 'EFETIVADO')}
          >
            <CheckCircleIcon />
          </IconButton>
        </label>
        <label htmlFor="icon-button-file">
          <IconButton 
            color="secondary" 
            size="small" 
            aria-label="cancelar" 
            component="span" 
            disabled={lancamento.status !== 'PENDENTE'}
            onClick={ e => props.alterarStatus(lancamento, 'CANCELADO')}
          >
            <ClearIcon />
          </IconButton>
        </label>
        <label htmlFor="icon-button-file">
          <IconButton 
              color="default" 
              size="small" 
              aria-label="editar" 
              component="span"
              onClick={e => props.editarAction(lancamento.id)}
              >
            <EditIcon />
          </IconButton>
        </label>
        <label htmlFor="icon-button-file">
          <IconButton 
            color="secondary" 
            size="small" 
            aria-label="excluir" 
            component="span"
            onClick={e => props.deletarAction(lancamento)}
          >
            <DeleteIcon />
          </IconButton>
        </label>
      </TableCell>
    </TableRow>
    )
  })

  return (
    <TableContainer component={Paper}>
    <Table size="small" aria-label="a dense table">
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
        {rows}
      </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LancamentosTable;