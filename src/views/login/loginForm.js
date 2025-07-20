import {
  BlockFooter,
  List,
  ListInput,
  LoginScreen,
  LoginScreenTitle,
  Button,
  Page,
  Icon
} from 'framework7-react';
import { React, useState } from 'react';

export default function LoginForm({entrar, usuarios}) {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const signIn = () => {
      entrar({email, senha})
  }
  
  return (
    <LoginScreen>
      <Page loginScreen>
        <LoginScreenTitle>Minhas Finanças</LoginScreenTitle>
        <List form>
          <ListInput
            label="E-mail"
            type="text"
            placeholder="Seu e-mail"
            value={email}
            onInput={e => setEmail(e.target.value)}
            clearButton
            media={<Icon f7="person" color="green" />}
          />
          <ListInput
            label="Senha"
            type="password"
            placeholder="Sua senha"
            value={senha}
            onInput={e => setSenha(e.target.value)}
            clearButton
            media={<Icon f7="lock" color="green" />}
          />
          <Button fill large color="green" onClick={signIn} style={{marginTop: 16}}>Entrar</Button>
          {/* <Button fill color="blue" onClick={usuarios} style={{marginTop: 8}}>Cadastrar</Button> */}
        </List>
        <List>
          <BlockFooter>
            Todos os direitos reservados. 2024
          </BlockFooter>
        </List>
      </Page>
    </LoginScreen>
  );
}