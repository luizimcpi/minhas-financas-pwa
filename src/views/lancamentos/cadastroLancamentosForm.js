import { React, useEffect, useState } from 'react';

import {
  Card,
  CardContent,
  LoginScreenTitle,
  List,
  ListInput
} from 'framework7-react'

const CadastroLancamentosForm = (props) => {
  
  const [id, setId] = useState("")
  const [descricao, setDescricao] = useState("")
  const [valor, setValor] = useState("")
  const [mes, setMes] = useState("")
  const [ano, setAno] = useState("")
  const [tipo, setTipo] = useState("")
  const [status, setStatus] = useState("")
  const [atualizando, setAtualizando] = useState("")

  useEffect(() => {
    setId(props.lancamentoAtualizar.id)
    setDescricao(props.lancamentoAtualizar.descricao)
    setValor(props.lancamentoAtualizar.valor)
    setMes(props.lancamentoAtualizar.mes)
    setAno(props.lancamentoAtualizar.ano)
    setTipo(props.lancamentoAtualizar.tipo)
    setStatus(props.lancamentoAtualizar.status)
    setAtualizando(props.lancamentoAtualizar.atualizando)
  }, [
        props.lancamentoAtualizar.id,
        props.lancamentoAtualizar.descricao, 
        props.lancamentoAtualizar.valor, 
        props.lancamentoAtualizar.mes, 
        props.lancamentoAtualizar.ano, 
        props.lancamentoAtualizar.tipo,
        props.lancamentoAtualizar.status,
        props.lancamentoAtualizar.atualizando
      ]);

  const optionsMeses = props.meses.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  )

  const optionsTipos = props.tipos.map((option, index) =>
    <option key={index} value={option.value}>{option.label}</option>
  )

  const register = () => {
    props.cadastrar({descricao, valor, mes, ano, tipo})
  }

  const refresh = () => {
    props.atualizar({descricao, valor, mes, ano, tipo, status, id})
  }

  return (

    <Card>
    <CardContent>
      <LoginScreenTitle>{atualizando ? 'Atualização de Lançamento' : 'Cadastro de Lançamentos'}</LoginScreenTitle>
      <List form>
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
            label="Valor"
            type="text"
            placeholder="Valor"
            value={valor}
            onInput={(e) => {
              setValor(e.target.value.replace(',', '.'));
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
            label="Ano"
            type="text"
            placeholder="Ano"
            value={ano}
            onInput={(e) => {
              setAno(e.target.value);
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

          <ListInput
            label="Status"
            type="text"
            placeholder="Status"
            value={status}
            disabled
          />
        <button style={{ display: !atualizando ? 'block': 'none'}} onClick={register} className="col button button-raised">Cadastrar</button>
        <button style={{ display: atualizando ? 'block': 'none'}} onClick={refresh} className="col button button-raised">Atualizar</button>
        <br/>
        <button onClick={props.cancelar} className="col button button-raised button-fill">Cancelar</button>
      </List>
    </CardContent>
  </Card>
  );
}

export default CadastroLancamentosForm;