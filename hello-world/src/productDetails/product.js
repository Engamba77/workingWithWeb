import React, { Component } from "react";

class ProductDetails extends Component {
  render() {
    return (
      <div className="div">
        <div className="products">
          <img src={this.props.image} id="image" />
        </div>
        <div className="items">
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
          <p>Price: ${this.props.price}</p>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
