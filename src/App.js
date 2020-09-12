import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Title } from "./components/Title/Title";

class App extends Component{
  //EventHandler
  onClickHandler = () => {
    let title = document.getElementById('versionCounter');
    let upgradeButton = document.getElementById('upgradeButton');
    title.textContent = "4.0";
    upgradeButton.style.display = "none";
  }

  state = { version: "1.0"}

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Title titleStyle={{color : "orange"}} onClick={this.onClickHandler}>
              Hello World <span id="versionCounter" style={{borderBottom: "1px solid orange"}}>{this.state.version}</span>
            </Title>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
