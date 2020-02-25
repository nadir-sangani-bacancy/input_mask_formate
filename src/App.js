import React from 'react';
import logo from './logo.svg';
import './App.css';
import MaskedInput from 'react-text-mask'

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      number: ''
    }
  }
  setformate(e) {
    let { value } = e.target
    if (value.length < 13) {
      let z = value.split('').filter((a) => { return /[0-9]/.test(a) })
      let a = z.map((a, k) => {
        if (k === 3) {
          return ' ' + a
        }
        else if (k === 6) {
          return '-' + a
        }
        else {
          return a;
        }
      })
      let b = a.reduce((a, b) => { return a += b }, '')
      this.setState({ number: b })
    }
  }
  render() {
    const { number } = this.state
    return (
      <div className="NumberFormate">
        {console.log("number", this.state.number)}
        <input value={number} placeholder="XXX XXX-XXXX" max='12' onChange={(e) => this.setformate(e)} />
      </div>
    );
  }
}

export default App;
