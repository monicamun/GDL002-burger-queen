import React from "react";

class ActivitySelection extends React.Component {
  render() {
    return (
      <div>
        <a href="/orders" className="btn btn-light">
          Ordenes
        </a>
        &nbsp;
        <a href="/kitchen" className="btn btn-light">
          Cocina
        </a>
      </div>
    );
  }
}

export default ActivitySelection;
