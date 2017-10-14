import React, { Component } from 'react';
import './css/App.css';
import TopBar from './components/AppBar';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <InfoSection></InfoSection>
        <Projects></Projects>
      </div>
    );
  }
}

export default App;
