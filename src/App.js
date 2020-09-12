import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Title } from "./components/Title/Title";

class App extends Component{
  //EventHandler
  onClickHandler = () => {
    let nextVersion = parseInt(this.state.version, 10) + 1
    this.setState({ version: nextVersion.toFixed(1)})
  }

  state = { version: "1.0"}

  render(){

    let upgradeButton = (
      <div 
        onClick={this.onClickHandler} 
        id="upgradeButton" 
        className="upgrade-button"
      >Upgrade
      </div>
    )

    if( this.state.version === '5.0'){
      upgradeButton = (
        <div className = "upgraded-button">Already up-to-date</div>
      )
    }

    if(parseInt(this.state.version, 10) > 1){
      console.log('アップグレード成功じゃい！新しいバージョンは' + this.state.version);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Title titleStyle={{color : "orange"}}>
              Hello World <span id="versionCounter" style={{borderBottom: "1px solid orange"}}>{this.state.version}</span>
            </Title>
            {upgradeButton}
            
            <br/>
            Edit <code>src/App.js</code> and save to reload.
          </div>
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
