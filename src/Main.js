import { App, Panel, View, Navbar, List, ListItem, Icon } from 'framework7-react';
import ProvedorAutenticacao from './provedorAutenticacao'
import React from 'react';
import Rotas from './rotas'

const f7params = {
  id: "com.devlhse.confin", // App bundle ID
  name: "CONFIN", // App name
  theme: "auto", // Automatic theme detection
  colors: {
    primary: '#27ae60', // Verde para tema financeiro
  },
  // App routes
  routes: []
};

function Main() {
  return (
    <App {...f7params}>
      {/* Menu Lateral */}
      <Panel left cover themeDark>
        <View>
          <Navbar title="Menu" />
          <List>
            <ListItem link="/home" title="Home" view="#main-view" panelClose>
              <Icon slot="media" ios="f7:house" aurora="f7:house" md="f7:house" color="green" />
            </ListItem>
            <ListItem link="/consulta-lancamentos" title="Lançamentos" view="#main-view" panelClose>
              <Icon slot="media" ios="f7:money_dollar" aurora="f7:money_dollar" md="f7:money_dollar" color="green" />
            </ListItem>
            <ListItem link="/cadastro-usuarios" title="Usuários" view="#main-view" panelClose>
              <Icon slot="media" ios="f7:person" aurora="f7:person" md="f7:person" color="green" />
            </ListItem>
            <ListItem link="/login" title="Sair" view="#main-view" panelClose>
              <Icon slot="media" ios="f7:arrow_right_square" aurora="f7:arrow_right_square" md="f7:arrow_right_square" color="red" />
            </ListItem>
          </List>
        </View>
      </Panel>
      {/* Fim do Menu Lateral */}
      <ProvedorAutenticacao>
        <View id="main-view" main url="/">
          <Rotas />
        </View>
      </ProvedorAutenticacao>
    </App>
  );
}

export default Main;
