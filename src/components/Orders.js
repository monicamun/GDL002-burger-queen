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
      orderList: []
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

  navChange = type => {
    this.setState({ showMenuFilter: type });
  };

  addToOrder = mi => {
    let list = Array.from(this.state.orderList);
    list.push(mi);
    this.setState({ orderList: list });
    console.log(list)
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
          <OrderName />
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
               {this.state.orderList.map((li, i) =>(
                 <li key={i}>{li.name} {"$" + li.price}</li>
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
