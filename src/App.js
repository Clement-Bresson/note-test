import './App.css';

import React, { Component } from 'react';

import Main from './Main'
import config from './config'
import logo from './logo.svg';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      gamme: 'gamme',
      tempo: 1000
    }
    this.changeGamme = this.changeGamme.bind(this)
    this.changeTempo = this.changeTempo.bind(this)
  }

  changeGamme (gamme) {
    this.setState({
      gamme
    })
  }

  changeTempo (e) {
    const tempo = parseInt(e.target.value)
    console.log(tempo)
    console.log(typeof tempo)
    this.setState({
      tempo
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Main
          gamme={this.state.gamme}
          tempo={this.state.tempo}
        />
        <ul>
          {Object.keys(config).map((gamme, index) => {
            return (<li key={`${index}`} onClick={() => {
              this.changeGamme(gamme)
            }}>{gamme}</li>)
          })}
        </ul>
        <input onChange={e => {
          this.changeTempo(e)
        }}/>
      </div>
    );
  }
}

export default App;
