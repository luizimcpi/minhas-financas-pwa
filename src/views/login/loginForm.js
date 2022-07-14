import {
  BlockFooter,
  List,
  ListInput,
  LoginScreenTitle,
  Page
} from 'framework7-react';
import { React, useState } from 'react';

export default function LoginForm({entrar, usuarios}) {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const signIn = () => {
      entrar({email, senha})
  }
  
  return (

       <Page noToolbar noNavbar noSwipeback loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
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
          <button onClick={(e) => {
            e.preventDefault()
            signIn()
            }} 
            className="col button button-raised">Entrar</button>
          <br/>
          <button onClick={usuarios} className="col button button-raised button-fill">Cadastrar</button>
        </List>
        <List>
          <BlockFooter>
           Todos os direitos reservados. 2022
          </BlockFooter>
        </List>
      </Page>

  );
}