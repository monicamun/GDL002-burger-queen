import React from "react";

class Ejemplo1 extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.mensaje}</h1>
      </div>
    );
  }
}

export default Ejemplo1;