import React from 'react';
import ReactDOM from 'react-dom';
import Basic from "./components/basic.jsx";
import Hello from "./components/hello.jsx";

import store from "./store.js"

ReactDOM.render((
  <div>
    <Basic/>
    <Hello/>
  </div>
), document.getElementById('root'))
