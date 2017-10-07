import React, { Component } from 'react';
import './css/App.css';
import Button from "material-ui/Button"
import TopBar from './components/AppBar';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <Button>Hello World!</Button>
      </div>
    );
  }
}

export default App;
