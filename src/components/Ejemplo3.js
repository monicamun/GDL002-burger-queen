import React from "react";

class Ejemplo3 extends React.Component {

  constructor(){
    super();
    this.state = {
      counter: 0
    }
  }

  addOne = () => {
    this.setState({counter: (this.state.counter + 1)});
  }

  render() {
    return (
      <div onClick={this.addOne}>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default Ejemplo3;
