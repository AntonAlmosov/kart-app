import React, { Component } from 'react';
import './../App.css';

import Header from './Header'
import Kart from './Kart'

class App extends Component {
  render() {
    return (
      <div className="kart-app-wrapper">
        <Header>
          <Kart />
        </Header>
      </div>
    );
  }
}

export default App;
