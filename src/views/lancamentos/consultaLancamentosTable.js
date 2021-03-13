import {
CardContent,
List,
ListItem,
Card,
Row,
Col,
Button,
Icon
} from 'framework7-react'

import React from 'react';
import currencyFormatter from 'currency-formatter'

const LancamentosTable = (props) => {
  
  const getNameOfMonth = (monthNumber) => {
    switch (monthNumber) {
      case 1:
        return 'JAN'
      case 2:
        return 'FEV'
      case 3:
        return 'MAR'
      case 4: 
        return 'ABR'
      case 5: 
       return 'MAI'
      case 6:
        return 'JUN'
      case 7:
        return 'JUL'
      case 8:
        return 'AGO'
      case 9:
        return 'SET'
      case 10:
        return 'OUT'
      case 11: 
        return 'NOV'
      case 12:
        return 'DEZ'
      default:
        return 'NULL'
    }
  }

  const rows = props.lancamentos.map( lancamento => {
    return (
     
      <ListItem
        key={lancamento.id}
        title={lancamento.descricao}
        after={getNameOfMonth(lancamento.mes)}
        subtitle={currencyFormatter.format(lancamento.valor, {locale: 'pt-BR'})}
        text={lancamento.status === 'EFETIVADO' ? 'PAGO' : lancamento.status}
      >
        <Row>
          <Col>
            <Button fill color="green"
            disabled={lancamento.status !== 'PENDENTE'} 
            onClick={e => props.alterarStatus(lancamento, 'EFETIVADO')}>
              <Icon ios="f7:money_dollar_circle" aurora="f7:money_dollar_circle" md="f7:money_dollar_circle"></Icon>
            </Button>
          </Col>
          <Col>
            <Button fill color="yellow"
            disabled={lancamento.status !== 'PENDENTE'}
            onClick={e => props.alterarStatus(lancamento, 'CANCELADO')}>
              <Icon ios="f7:nosign" aurora="f7:nosign" md="f7:nosign"></Icon>
            </Button>
          </Col>
          <Col>
            <Button fill color="blue"
            onClick={e => props.editarAction(lancamento.id)}>
              <Icon ios="f7:pencil" aurora="f7:pencil" md="f7:pencil"></Icon>
            </Button>
          </Col>
          <Col>
            <Button fill color="red" onClick={e => props.deletarAction(lancamento)}>
              <Icon ios="f7:trash" aurora="f7:trash" md="f7:trash"></Icon>
            </Button>
          </Col>
        </Row>
      </ListItem>
    )
  })

  return (
    <Card>
      <CardContent>
        <List mediaList>
          {rows}
        </List>
      </CardContent>
    </Card>
  )
}

export default LancamentosTable;