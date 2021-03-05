import {
  BlockFooter,
  List,
  ListButton,
  ListInput,
  LoginScreenTitle,
  Page,
  f7,
} from 'framework7-react';
import { React, useState } from 'react';

import moneyImg from '../../money-free.jpg'

export default function LoginForm({entrar, usuarios}) {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  
  return (

       <Page noToolbar noNavbar noSwipeback loginScreen>
        <LoginScreenTitle>Framework7</LoginScreenTitle>
        <List form>
          <ListInput
            label="Username"
            type="text"
            placeholder="Your username"
            value={email}
            onInput={(e) => {
              setEmail(e.target.value);
            }}
          />
          <ListInput
            label="Password"
            type="password"
            placeholder="Your password"
            value={senha}
            onInput={(e) => {
              setSenha(e.target.value);
            }}
          />
        </List>
        <List>
          <ListButton onClick={usuarios}>Sign In</ListButton>
          <BlockFooter>
            Some text about login information.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BlockFooter>
        </List>
          </Page>

  );
}