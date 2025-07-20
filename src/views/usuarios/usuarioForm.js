import {
  BlockFooter,
  Fab,
  FabButton,
  FabButtons,
  Icon,
  List,
  ListInput,
  LoginScreen,
  LoginScreenTitle,
  Page,
  Button
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
    <LoginScreen>
      <Page loginScreen>
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
              clearButton
              media={<Icon f7="person" color="green" />}
            />
            <ListInput
              label="E-mail"
              type="text"
              placeholder="Seu e-mail"
              value={email}
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              clearButton
              media={<Icon f7="envelope" color="green" />}
            />
            <ListInput
              label="Senha"
              type="password"
              placeholder="Sua senha"
              value={senha}
              onInput={(e) => {
                setSenha(e.target.value);
              }}
              clearButton
              media={<Icon f7="lock" color="green" />}
            />
            <ListInput
              label="Confirmação de Senha"
              type="password"
              placeholder="Confirme a senha digitada..."
              value={senhaRepeticao}
              onInput={(e) => {
                setSenhaRepeticao(e.target.value);
              }}
              clearButton
              media={<Icon f7="lock_fill" color="green" />}
            />
        </List>
        <Button fill large color="green" onClick={submitCadastro} style={{marginTop: 16}}>Cadastrar</Button>
        <Button outline color="green" onClick={voltar} style={{marginTop: 8}}>Voltar</Button>
        <List>
          <BlockFooter>
           Todos os direitos reservados. 2024
          </BlockFooter>
        </List>
      </Page>
    </LoginScreen>
  );
}