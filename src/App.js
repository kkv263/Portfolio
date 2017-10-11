import React, { Component } from 'react';
import './css/App.css';
import TopBar from './components/AppBar';
import InfoSection from './components/InfoSection';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Button>hi</Button>
        <Button color="danger">Danger!</Button>
        <InfoSection></InfoSection>
      </div>
    );
  }
}

export default App;
