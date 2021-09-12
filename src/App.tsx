import React from 'react';
import {
  BrowserRouter as HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';
import Header from './frontend/nav/header';
import Nav from './frontend/nav/nav';
import Dashboard from './frontend/dash/dashboard';
import Tasks from './frontend/tasks/Tasks';
import Profiles from './frontend/profiles/profiles';
import Proxies from './frontend/proxies/proxies';
import Captcha from './frontend/captcha/captcha';
import Monitors from './frontend/monitors/monitors';
import Settings from './frontend/settings/settings';

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <HashRouter>
        <div className="w-full flex-grow flex flex-row">
          <Nav />
          <div className="flex-grow h-full text-2xl font-bold">
            <Switch>
              <Route exact path="/" />
              <Route path="/dash" component={Dashboard} />
              <Route path="/tasks" component={Tasks} />
              <Route path="/profiles" component={Profiles} />
              <Route path="/proxies" component={Proxies} />
              <Route path="/captcha" component={Captcha} />
              <Route path="/monitors" component={Monitors} />
              <Route path="/settings" component={Settings} />
              <Redirect to="/dash" />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}
