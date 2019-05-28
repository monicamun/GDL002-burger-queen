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
          <form onSubmit={e => { e.preventDefault(); }} >
            <label htmlFor="ordername">Nombre del cliente: </label>
            <div className="col">
              <input className="form-control"  placeholder="Cliente"
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
