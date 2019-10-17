import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import NameLabel from './NameLabel';
import Words from './Components/InputHolder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameLabel name={'Evanescese'} />
        <Words />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
