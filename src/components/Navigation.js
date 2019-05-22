import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import firebase from "firebase";
import "firebase/auth";
import { Redirect } from "react-router-dom";

class Navigation extends React.Component {
  constructor() {
    super();
  }

  logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.setUser();
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Burguer Queen</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="/orders">Ordenes</Nav.Link>
            <Nav.Link href="/kitchen">Cocina</Nav.Link>
          </Nav>
          {this.props.user ? (
            <Nav>
              <Nav.Link href="#features" onClick={this.logOut}>
                Log Out
              </Nav.Link>
            </Nav>
          ) : (
            ""
          )}
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
