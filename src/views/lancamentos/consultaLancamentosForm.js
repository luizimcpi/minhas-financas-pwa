import {
Card,
CardContent,
List,
ListInput,
LoginScreenTitle,
Button,
Icon
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
    <Card style={{border: '1px solid #27ae60', background: '#eafaf1'}}>
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
              clearButton
              media={<Icon f7="calendar_today" color="green" />}
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
              }
              media={<Icon f7="calendar" color="green" />}
            >
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
              clearButton
              media={<Icon f7="doc_text" color="green" />}
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
              media={<Icon f7="layers" color="green" />}
             >
              {optionsTipos}
            </ListInput>
          <Button fill color="green" onClick={() => duplicarLancamentos(mesAtual)} style={{marginTop: 8}}>Duplicar Lançamentos</Button>
          <Button fill color="green" onClick={search} style={{marginTop: 8}}>Buscar</Button>
          <Button outline color="green" onClick={cadastrar} style={{marginTop: 8}}>Cadastrar</Button>
        </List>
      </CardContent>
    </Card>
  );
}