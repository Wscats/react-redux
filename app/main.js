import React from 'react';
import ReactDOM from 'react-dom';

//redux
import { Provider } from 'react-redux';
import store from "./store.js"

//router
import { Route, Link, Redirect, HashRouter } from 'react-router-dom';

//page
import PageA from "./page/pageA.jsx";
import PageB from "./page/pageB.jsx";

ReactDOM.render((
	<Provider store={store}>
		<HashRouter history={history}>
		  <div>
		  	<ul>
		  		<li><Link to="/pagea">PageA</Link></li>
		  		<li><Link to="/pageb">PageB</Link></li>
		  	</ul>
		    <Route path="/pagea" component={PageA}/>
	      <Route path="/pageb" component={PageB}/>
		  </div>
	  </HashRouter>
  </Provider>
), document.getElementById('root'))