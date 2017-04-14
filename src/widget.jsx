import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Widget extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0
    };
    this.upCounter=this.upCounter.bind(this);
  }

upCounter(){
  this.setState({counter:this.state.counter+1});
}

  render() {
    return (
      
        <form>
          <p>-How are you today?-</p>
          <p>{this.state.counter}</p>
          <input type="text" />
          <button onClick={this.upCounter} >Answer</button>
        </form>
      
    );
  }
}

const container = document.querySelector('#widget');

ReactDOM.render(<Widget />, container);
