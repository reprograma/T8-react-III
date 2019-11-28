import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Usuarios from './pages/Usuarios';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/produtos" component={Produtos} />
        <Route path="/usuarios" component={Usuarios} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
