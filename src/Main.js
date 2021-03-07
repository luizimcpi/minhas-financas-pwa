import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import 'startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css'
import 'startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './custom.css'

import { App, Block, Page, Panel, View } from 'framework7-react';

import ProvedorAutenticacao from './provedorAutenticacao'
import React from 'react';
import Rotas from './rotas'

const f7params = {
  id: "io.framework7.testapp", // App bundle ID
  name: "SISO", // App name
  theme: "auto", // Automatic theme detection
  // App routes
  routes: []
};

function Main() {
  
  return (
    <App {...f7params}>
      <ProvedorAutenticacao>
        <Rotas />
      </ProvedorAutenticacao>
    </App>
  );
}

export default Main;
