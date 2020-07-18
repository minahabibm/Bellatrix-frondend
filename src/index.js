import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import store from './store/index'
import Settings from './pages/settings';
import UserHelp from './pages/userHelp';
import MyProfile from './pages/myProfile';
import DashBoard from './pages/dashBoard';


const routing = (
  <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/userhelp" component={UserHelp} />
        <Route exact path="/myprofile" component={MyProfile} />
        <Route exact path="/dashboard" component={DashBoard} />
      </Switch>
      <Footer />
  </Router>
);

ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  <Provider store={store}>
    {routing}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
