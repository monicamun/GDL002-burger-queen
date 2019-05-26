import React from "react";
import firebase from "firebase";
import "firebase/firestore";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import OrderName from "./OrderName";

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      showMenuFilter: "breakfast",
      orderList: [],
      orderName: ""
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("menu")
      .get()
      .then(querySnapshot => {
        let menu = [];
        querySnapshot.forEach(doc => {
          let item = doc.data();
          item.id = doc.id;
          menu.push(item);
        });

        this.setState({ menu });
      });
  }
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  navChange = type => {
    this.setState({ showMenuFilter: type });
  };

  addToOrder = mi => {
    let list = Array.from(this.state.orderList);
    list.push(mi);
    this.setState({ orderList: list });
  };

  deleteItem = index => {
    let orders = Array.from(this.state.orderList);
    let indexToRemove = index;
    let newArray = orders.slice(0, indexToRemove);
    let newArray2 = orders.slice(indexToRemove, orders.length);
    newArray2.shift();

    let newOrders = [...newArray, ...newArray2];
    this.setState({ orderList: newOrders });
  };

  render() {
    return (
      <div>
        <h1>Ordenes</h1>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#breakfast">
              <Nav.Item>
                <Nav.Link
                  href="#breakfast"
                  onClick={() => this.navChange("breakfast")}
                >
                  Desayuno
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#meal" onClick={() => this.navChange("meal")}>
                  Comida
                </Nav.Link>
              </Nav.Item>
              <Nav.Item />
            </Nav>
          </Card.Header>
          <OrderName
            handleInput={this.handleInput}
            msg={this.state.orderName}
          />

          <div className="meal">
            {this.state.menu
              .filter(mi => mi.type === this.state.showMenuFilter)
              .map((mi, i) => (
                <input
                  type="button"
                  onClick={() => this.addToOrder(mi)}
                  key={i}
                  value={mi.name}
                />
              ))}
          </div>
          <div className="card">
            <ul>
              <h1>{this.state.orderName}</h1>
              {this.state.orderList.map((orderItem, i) => (
                <li key={i} >
                  {orderItem.name} {"$" + orderItem.price}{" "}
                  <a href="#" onClick={() => this.deleteItem(i)}>
                    <i className="far fa-times-circle fa-2x" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <Card.Body>
            <Card.Text />
            <Button variant="primary">Crear pedido</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Orders;
