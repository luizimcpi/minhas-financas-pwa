import './index.css';
import 'framework7/framework7-bundle.min.css'
import 'framework7-icons/css/framework7-icons.css'

import Framework7 from "framework7/lite-bundle";
import Framework7React from "framework7-react";
import Main from './Main';
import React from 'react';
import ReactDOM from 'react-dom';

Framework7.use(Framework7React);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  rootElement
);

