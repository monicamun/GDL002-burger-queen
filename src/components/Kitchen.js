import React from "react";

class kitchen extends React.Component {
  render() {
    return (
      <div>
        <span>Cocina</span>
        <ul>
          {this.props.ordersList.map((order, index) => (
            <li key={"kitchenOrder" + index}>
            <div>
              <h3>Nombre: {order.orderName}</h3>
            </div>
            <ul>
              {order.orderItems.map((item, itemIndex)=>(
                <li key={"kitchenOrder" + index + "Item" + itemIndex}>{item.name}</li>
              ))}
            </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default kitchen;
