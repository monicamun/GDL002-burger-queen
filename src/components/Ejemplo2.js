import React from "react";

class Ejemplo2 extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((str, i) => (
            <li key={i}>{str}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Ejemplo2;
