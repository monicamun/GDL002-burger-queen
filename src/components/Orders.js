import React from "react";
import firebase from "firebase";
import "firebase/firestore";

class orders extends React.Component {
  constructor() {
    super();
    this.state = {
      breakfast:[],
      meal:[]
    };

  }       

  render() {
    return (
      <div>
        <span>Ordenes</span>
      </div>
    );
  }
}

export default orders;
