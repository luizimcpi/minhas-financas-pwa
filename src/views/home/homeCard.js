import {
  Card,
  Fab,
  FabButton,
  FabButtons,
  Icon,
  Navbar,
  Page,
  Block,
  Button
} from 'framework7-react'

import {React, useState} from 'react'
import currencyFormatter from 'currency-formatter'

export default function HomeCard({data, consultar, deslogar}) {
  const [showBalance, setShowBalance] = useState(false)
  
  const saldoAtual = data.saldo
  const nomeUsuario = data.usuario
  const saldoAtualFormatado = currencyFormatter.format(saldoAtual, {locale: 'pt-BR'})
  const saldoOculto = 'R$ ******'

  const changeShowBalance = () => {
    if(showBalance) setShowBalance(false)
    if(!showBalance) setShowBalance(true)
  }

  return (
    <Page>
        <Navbar title="FINANÇAS" left={<Button iconF7="menu" color="green" panelOpen="left" />}></Navbar>
        <Block strong style={{textAlign: 'center'}}>
          <Card
              title="Saldo"
              content={showBalance ? saldoAtualFormatado: saldoOculto}
              footer={nomeUsuario}
              style={{background: '#eafaf1', border: '1px solid #27ae60'}}
          ></Card>
        </Block>
        <Fab position="right-bottom" slot="fixed" color="green">
            <Icon ios="f7:plus" aurora="f7:plus" md="f7:plus"></Icon>
            <Icon ios="f7:xmark" aurora="f7:xmark" md="f7:xmark"></Icon>
            <FabButtons position="top">
                <FabButton onClick={deslogar} label="Sair" color="red"> 
                    <Icon ios="f7:nosign" aurora="f7:nosign" md="f7:nosign"></Icon>
                </FabButton>
                <FabButton onClick={consultar} label="Lançamentos" color="green">
                    <Icon ios="f7:money_dollar" aurora="f7:money_dollar" md="f7:money_dollar"></Icon>
                </FabButton>
                <FabButton onClick={changeShowBalance} label={showBalance ? "Ocultar Saldo" : "Ver Saldo"} color="green"> 
                    <Icon ios="f7:eye" aurora="f7:eye" md="f7:eye"></Icon>
                </FabButton>
            </FabButtons>
        </Fab>
    </Page>
  );
}