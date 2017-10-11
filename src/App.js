import React, { Component } from 'react';
import './css/App.css';
import TopBar from './components/AppBar';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <InfoSection></InfoSection>
      </div>
    );
  }
}

export default App;
