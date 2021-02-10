import React from 'react';
import currencyFormatter from 'currency-formatter'

const LancamentosTable = (props) => {
  
  const rows = props.lancamentos.map( lancamento => {
    return (
      <tr key={lancamento.id}>
        <td>{lancamento.descricao}</td>
        <td>{currencyFormatter.format(lancamento.valor, {locale: 'pt-BR'})}</td>
        <td>{lancamento.tipo}</td>
        <td>{lancamento.mes}</td>
        <td>{lancamento.status === 'EFETIVADO' ? 'PAGO' : lancamento.status}</td>
        <td>
          <button type="button" 
            className="btn btn-success btn-user btn-block" 
            disabled={lancamento.status !== 'PENDENTE'} 
            onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')}>
            <i className="fa fa-check"></i>
          </button>
          
          <button type="button" 
            disabled={lancamento.status !== 'PENDENTE'}
            className="btn btn-secondary btn-user btn-block" 
            onClick={e => props.alterarStatus(lancamento, 'CANCELADO')}>
              <i className="fa fa-window-close"></i>
          </button>

          <button type="button" 
            className="btn btn-primary btn-user btn-block" 
            onClick={e => props.editarAction(lancamento.id)}>
              <i className="fa fa-edit"></i>
          </button>


          <button type="button"  
            className="btn btn-danger btn-user btn-block" 
            onClick={e => props.deletarAction(lancamento)}>
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    )
  })

  return (
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Mês</th>
                        <th>Situação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>
          </div>
        </div>
  )
}

export default LancamentosTable;