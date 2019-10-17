import React, { Component } from 'react'

interface WordsState {
  items: Array<string>;
  error?: string;
  value: string;
}

interface Props {
  something?: string;
}

class Words extends Component<Props, WordsState> {
  constructor(props : Props) {
    super(props);
    this.state = {
      items: [],
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event : any) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event : any ) {
    alert(`A word was submitted${this.state.value}`)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Words
