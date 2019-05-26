import React from "react";

class OrderName extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <form >
            <label htmlFor="ordername">Nombre del cliente: </label>
            <div>
              <input
                type="text"
                name="orderName"
                onChange={this.props.handleInput}
                value={this.props.msg}
               
              />

            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default OrderName;
