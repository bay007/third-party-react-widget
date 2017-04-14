import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      counter:0
    };
    this.countUP=this.countUP.bind(this);
  }

  countUP(){
    this.setState({counter:this.state.counter+1});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
         {this.state.counter} To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.countUP}>FIRE!</button>
      </div>
    );
  }
}

export default App;
