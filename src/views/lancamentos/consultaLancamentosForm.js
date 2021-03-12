import {
Icon,
List,
ListInput,
LoginScreenTitle,
Page
} from 'framework7-react'
import { React, useState } from 'react';

export default function ConsultaLancamentoForm({meses, tipos, buscar, cadastrar}) {
  const [ano, setAno] = useState("")
  const [mes, setMes] = useState("")
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

    <Page noToolbar noNavbar noSwipeback loginScreen>
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
              <Icon icon="demo-list-icon" slot="media"/>
              {optionsMeses}
            </ListInput>
            <ListInput
              label="Descrição"
              type="password"
              placeholder="Descrição"
              value={descricao}
              onInput={(e) => {
                setDescricao(e.target.value);
              }}
            />
            <ListInput
              label="Tipo"
              type="select"
              defaultValue=""
              placeholder="Escolha um tipo..."
              value={tipo}
              onChange={
                      event => {
                          setTipo(event.target.value);
                      }
                  }
             >
              <Icon icon="demo-list-icon" slot="media"/>
              {optionsTipos}
            </ListInput>
          <button onClick={search} class="col button button-raised">Buscar</button>
          <br/>
          <button onClick={cadastrar} class="col button button-raised button-fill">Cadastrar</button>
        </List>
      </Page>
  );
}