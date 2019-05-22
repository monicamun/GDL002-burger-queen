import React from "react";

class OrderName extends React.Component {
  constructor() {
    super();
this.state = {
    orderName : "",
}
  }
  render() {
    return (
      <div>
        <div className="form-group">
              <label htmlFor="ordername">Nombre del cliente: </label>
              <input
                className="form-control"
                type="text"
                name="ordername"
                value={this.state.ordername}
                onChange={this.handleInput}
              />
            </div>
      </div>
    );
  }
}
export default OrderName;
