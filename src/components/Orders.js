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
      orderItems: [],
      orderName: ""
    };
  }
  // {orderItems, orderName}

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

  navChange = type => {
    this.setState({ showMenuFilter: type });
  };

  addToOrder = mi => {
    let list = Array.from(this.state.orderItems);
    list.push(mi);
    this.setState({ orderItems: list });
  };

  deleteItem = index => {
    let orders = Array.from(this.state.orderItems);
    let indexToRemove = index;
    let newArray = orders.slice(0, indexToRemove);
    let newArray2 = orders.slice(indexToRemove, orders.length);
    newArray2.shift();

    let newOrders = [...newArray, ...newArray2];
    this.setState({ orderItems: newOrders });
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
                  className="btn btn-outline-secondary m-1"
                  type="button"
                  onClick={() => this.addToOrder(mi)}
                  key={i}
                  value={mi.name}
                />
              ))}
          </div>
          <div className="">
            <ul className="list-group">
              <h1 className="mx-auto">{this.state.orderName}</h1>
              {this.state.orderItems.map((orderItem, i) => (
                <li className="list-group-item m-2" key={i}>
                  {orderItem.name} {"$" + orderItem.price}{" "}
                  <a href="#" onClick={() => this.deleteItem(i)}>
                    <i className="far fa-times-circle fa-2x" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>
              Total $
              {this.state.orderItems.length !== 0
                ? this.state.orderItems
                    .map(orderItem => orderItem.price)
                    .reduce((item1, item2) => +item1 + item2)
                : 0}
            </h3>
          </div>

          <Card.Body>
            <Card.Text />
            <Button
              variant="secondary"
              onClick={() =>
                this.props.addNewOrder({
                  orderItems: this.state.orderItems,
                  orderName: this.state.orderName
                })
              }
            >
              Crear pedido
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Orders;
