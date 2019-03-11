import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import User from './Components/User';
import Info from './Components/Info';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/info' component={Info} />
                    <Route path='/:user_id' component={User} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
