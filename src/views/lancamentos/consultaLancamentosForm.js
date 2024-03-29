import {
Card,
CardContent,
List,
ListInput,
LoginScreenTitle
} from 'framework7-react'
import { React, useState } from 'react';

import moment from 'moment'

export default function ConsultaLancamentoForm({meses, tipos, buscar, cadastrar, duplicarLancamentos}) {
  const anoAtual = moment().format('YYYY')
  const mesAtual = moment().format('M')

  const [ano, setAno] = useState(anoAtual)
  const [mes, setMes] = useState(mesAtual)
  const [tipo, setTipo] = useState("")
  const [descricao, setDescricao] = useState("")

  const search = () => {
    buscar({ano, mes, tipo, descricao})
  }

  const optionsMeses = meses.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  );

  const optionsTipos = tipos.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  );

  return (

    <Card>
      <CardContent>
        <LoginScreenTitle>Consulta - Lançamentos</LoginScreenTitle>
        <List form>
            <ListInput
              label="Ano"
              type="text"
              placeholder="Ano"
              value={ano}
              onInput={(e) => {
                setAno(e.target.value);
              }}
            />
            <ListInput
              label="Mes"
              type="select"  
              placeholder="Escolha o mês..."
              value={mes}
              onChange={
                  event => {
                      setMes(event.target.value);
                  }
              }>
              {optionsMeses}
            </ListInput>
            <ListInput
              label="Descrição"
              type="text"
              placeholder="Descrição"
              value={descricao}
              onInput={(e) => {
                setDescricao(e.target.value);
              }}
            />
            <ListInput
              label="Tipo"
              type="select"
              placeholder="Escolha um tipo..."
              value={tipo}
              onChange={
                      event => {
                          setTipo(event.target.value);
                      }
                  }
             >
              {optionsTipos}
            </ListInput>
          <button onClick={(e) => {
            e.preventDefault()
            duplicarLancamentos(mesAtual)
            }} 
            className="col button button-raised">Duplicar Lançamentos</button>
          <br/>
          <button onClick={(e) => {
            e.preventDefault()
            search()
            }} 
            className="col button button-raised">Buscar</button>
          <br/>
          <button onClick={cadastrar} className="col button button-raised button-fill">Cadastrar</button>
        </List>
      </CardContent>
    </Card>
  );
}