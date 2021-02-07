import 'fontsource-roboto'
// import 'startbootstrap-sb-admin-2/vendor/jquery/jquery.min.js'
// import 'startbootstrap-sb-admin-2/vendor/jquery-easing/jquery.easing.min.js'
// import 'startbootstrap-sb-admin-2/js/sb-admin-2.min.js'
import 'startbootstrap-sb-admin-2/css/sb-admin-2.min.css'
import 'startbootstrap-sb-admin-2/vendor/fontawesome-free/css/all.min.css'
import 'startbootstrap-sb-admin-2/vendor/bootstrap/js/bootstrap.bundle.min.js'
import './custom.css'

import ProvedorAutenticacao from './provedorAutenticacao'
import React from 'react';
import Rotas from './rotas'


function App() {
  
  return (
    <React.Fragment>
      <ProvedorAutenticacao>
        <Rotas />
      </ProvedorAutenticacao>
    </React.Fragment>
  );
}

export default App;
