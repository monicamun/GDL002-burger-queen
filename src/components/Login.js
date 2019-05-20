import React from "react";
import firebase from "firebase";
import "firebase/auth";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      toSelection: false
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(() => {
        this.setState(() => ({
            toSelection: true
          }));
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert("No estás registrada o tus datos son incorrectos");
      });
  };

  render() {
    if (this.state.toSelection === true) {
      return <Redirect to="/selection" />;
    }
    return (
      <div>
        <div>
          <h2>Login</h2>
        </div>

        <div className="card">
          <form className="card-body">
            <div className="form-group">
              <label htmlFor="username">Email: </label>
              <input
                className="form-control"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña: </label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInput}
              />
            </div>

            <input
              type="button"
              className="btn btn-light"
              onClick={this.handleLogin}
              value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
