import React from "react";

class kitchen extends React.Component {
  render() {
    return (
      <div>
        <span>Cocina</span>
        {this.props.ordersList.map((order, index) => (
          <div className="card m-2 p-2" key={"kitchenOrder" + index}>
            <div>
              <h3>Nombre: {order.orderName}</h3>
            </div>
            <ul>
              {order.orderItems.map((item, itemIndex) => (
                <li key={"kitchenOrder" + index + "Item" + itemIndex}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default kitchen;
