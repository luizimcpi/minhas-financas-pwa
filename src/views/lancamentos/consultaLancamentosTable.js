import {
List,
ListItem,
} from 'framework7-react'

import React from 'react';
import currencyFormatter from 'currency-formatter'

const LancamentosTable = (props) => {
  
  const rows = props.lancamentos.map( lancamento => {
    return (
     
      <ListItem
        link="#"
        onClick={e => props.editarAction(lancamento.id)}
        title={lancamento.descricao}
        after={lancamento.mes}
        subtitle={currencyFormatter.format(lancamento.valor, {locale: 'pt-BR'})}
        text={lancamento.status === 'EFETIVADO' ? 'PAGO' : lancamento.status}
      >
      </ListItem>
    )
  })

  return (
    <React.Fragment>
      <List mediaList>
        {rows}
      </List>
     </React.Fragment>
  )
}

export default LancamentosTable;