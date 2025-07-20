import {
  Card,
  CardContent,
  List,
  ListInput,
  LoginScreenTitle,
  Button,
  Icon
} from 'framework7-react'
import { React, useEffect, useState } from 'react';

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
    <Card style={{border: '1px solid #27ae60', background: '#eafaf1'}}>
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
            clearButton
            media={<Icon f7="doc_text" color="green" />}
          />
          <ListInput
            label="Valor"
            type="text"
            placeholder="Valor"
            value={valor}
            onInput={(e) => {
              setValor(e.target.value.replace(',', '.'));
            }}
            clearButton
            media={<Icon f7="money_dollar" color="green" />}
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
          <ListInput
            label="Status"
            type="text"
            placeholder="Status"
            value={status}
            disabled
            media={<Icon f7="info_circle" color="green" />}
          />
        <Button fill color="green" style={{ display: !atualizando ? 'block': 'none', marginTop: 16}} onClick={register}>Cadastrar</Button>
        <Button fill color="green" style={{ display: atualizando ? 'block': 'none', marginTop: 16}} onClick={refresh}>Atualizar</Button>
        <Button outline color="green" style={{marginTop: 8}} onClick={props.cancelar}>Cancelar</Button>
      </List>
    </CardContent>
  </Card>
  );
}

export default CadastroLancamentosForm;