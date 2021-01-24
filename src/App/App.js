import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Certificate from '../pages/Certificate';
import Company from '../pages/Company';
import DrawerLayout from '../components/DrawerLayout';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/certificate',
    component: Certificate,
  },
  {
    path: '/company',
    component: Company,
  },
  {
    path: '/contact',
    component: Contact,
  } /* And so on. */,
];

const routeComponents = routes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));
const App = () => {
  return (
    <DrawerLayout>
      <Switch>{routeComponents}</Switch>
    </DrawerLayout>
  );
};

export default App;
