import {
  BlockFooter,
  Fab,
  FabButton,
  FabButtons,
  Icon,
  List,
  ListInput,
  LoginScreenTitle,
  Page
} from 'framework7-react';
import { React, useState } from 'react';

export default function UsuarioForm({cadastrar, voltar}) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaRepeticao, setSenhaRepeticao] = useState("")
  const submitCadastro = () => {
    cadastrar({nome, email, senha, senhaRepeticao})
  }

  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
        <LoginScreenTitle>Cadastro de Usuários</LoginScreenTitle>
        <List form>
            <ListInput
              label="Nome"
              type="text"
              placeholder="Seu nome"
              value={nome}
              onInput={(e) => {
                setNome(e.target.value);
              }}
            />
            <ListInput
              label="E-mail"
              type="text"
              placeholder="Seu e-mail"
              value={email}
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
            <ListInput
              label="Senha"
              type="password"
              placeholder="Sua senha"
              value={senha}
              onInput={(e) => {
                setSenha(e.target.value);
              }}
            />
            <ListInput
              label="Confirmação de Senha"
              type="password"
              placeholder="Confirme a senha digitada..."
              value={senhaRepeticao}
              onInput={(e) => {
                setSenhaRepeticao(e.target.value);
              }}
            />
         
        </List>

        <Fab position="right-bottom" slot="fixed" color="pink">
          <Icon ios="f7:plus" aurora="f7:plus" md="f7:plus"></Icon>
          <Icon ios="f7:xmark" aurora="f7:xmark" md="f7:xmark"></Icon>
          <FabButtons position="left">
            <FabButton onClick={submitCadastro}>
              <Icon ios="f7:checkmark" aurora="f7:checkmark" md="f7:checkmark"></Icon>
            </FabButton>
            <FabButton onClick={voltar}>
              <Icon ios="f7:arrow_uturn_left" aurora="f7:arrow_uturn_left" md="f7:arrow_uturn_left"></Icon>
            </FabButton>
          </FabButtons>
        </Fab>
       
        <List>
          <BlockFooter>
           Todos os direitos reservados. 2021
          </BlockFooter>
        </List>

      </Page>
      
  );
}