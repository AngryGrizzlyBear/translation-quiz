import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NameLabel from './NameLabel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameLabel name={"Evanescese"} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
