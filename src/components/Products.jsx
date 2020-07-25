import React, { Component } from "react";

class Products extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="product-info">
          <div
            className="product-image"
            style={{
              backgroundImage: `url(https://backendapi.turing.com/images/products/${
                this.props.product.thumbnail
              })`
            }}
          >
          <div className="product-title">{this.props.product.name}</div>
          </div>
        <div className="product-prices">
          <div className="product-price">
            <span style={{textDecoration:"line-through"}}>${this.props.product.price}</span>
            <span>${this.props.product.discounted_price}</span>
          </div>
        </div>
        </div>
        <div className="actions">
          <button>Add To Cart</button>
          <button>View Details</button>
        </div>
      </div>
    );
  }
}
export default Products;
