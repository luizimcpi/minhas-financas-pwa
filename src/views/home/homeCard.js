import {
  Card,
  Fab,
  FabButton,
  FabButtons,
  Icon,
  Navbar,
  Page
} from 'framework7-react'

import React from 'react'
import currencyFormatter from 'currency-formatter'

export default function HomeCard({data, consultar, deslogar}) {
  const saldoAtual = data.saldo
  const nomeUsuario = data.usuario

  return (
    <Page>
        <Navbar title="SISO">
        </Navbar>
        <Card
            title="Saldo"
            content={currencyFormatter.format(saldoAtual, {locale: 'pt-BR'})}
            footer={nomeUsuario}
            ></Card>
        <Fab position="right-bottom" slot="fixed" color="blue">
            <Icon ios="f7:plus" aurora="f7:plus" md="f7:plus"></Icon>
            <Icon ios="f7:xmark" aurora="f7:xmark" md="f7:xmark"></Icon>
            <FabButtons position="top">
                <FabButton onClick={consultar} label="Lançamentos">
                    <Icon ios="f7:money_dollar" aurora="f7:money_dollar" md="f7:money_dollar"></Icon>
                </FabButton>
                <FabButton onClick={deslogar} label="Sair" color="red"> 
                    <Icon ios="f7:nosign" aurora="f7:nosign" md="f7:nosign"></Icon>
                </FabButton>
            </FabButtons>
        </Fab>
    </Page>
  );
}