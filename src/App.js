import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import myStore from './config/store'  //REDUX 

import MainMenu from './Pages/mainmenu'
import SalesCount from './Pages/sales-countdown'

class App extends Component {
  render() {
    return (
<Provider store={myStore}>
        <BrowserRouter>
          <div style={{ paddingLeft: 0, paddingRight: 0 }}>
          
              <Route exact path="/" render={() => (
                <MainMenu />  //Ini PAGE NYA
              )} />
              <Route exact path="/SalesInfo" component={SalesCount} />
              <Route path="/about/me" render={() => <h1>about me</h1>} />
              
              <Route path="/user/:id" component={MainMenu}/>
     
          </div>
        </BrowserRouter>         
      </Provider>
    );
  }
}

export default App;
