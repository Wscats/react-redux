import React from 'react';
import ReactDOM from 'react-dom';

//redux
import {Provider} from 'react-redux';
import store from "./store.js"

//router
import {Route, Link, Redirect, HashRouter} from 'react-router-dom';

//page
import PageA from "./page/pageA.jsx";
import PageB from "./page/pageB.jsx";
import PageC from "./page/pageC.jsx";
import PageD from "./page/pageD.jsx";
import PageE from "./page/pageE.jsx";
import PageF from "./page/pageF.jsx";

ReactDOM.render((
  <Provider store={store}>
    <HashRouter history={history}>
      <div>
        <ul>
          <li>
            <Link to="/pagea">PageA</Link>
          </li>
          <li>
            <Link to="/pageb">PageB</Link>
          </li>
          <li>
            <Link to="/pagec">PageC</Link>
          </li>
          <li>
            <Link to="/paged">PageD</Link>
          </li>
          <li>
            <Link to="/pagee">PageE</Link>
          </li>
          <li>
            <Link to="/pagef">PageF</Link>
          </li>
        </ul>
        <Route path="/pagea" component={PageA}/>
        <Route path="/pageb" component={PageB}/>
        <Route path="/pagec" component={PageC}/>
        <Route path="/paged" component={PageD}/>
        <Route path="/pagee" component={PageE}/>
        <Route path="/pagef" component={PageF}/>
      </div>
    </HashRouter>
  </Provider>
), document.getElementById('root'))
