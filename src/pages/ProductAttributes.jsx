import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProductAttributes,
  singleProduct
} from "../redux/actions/productActions";
class ProductAttributes extends Component {
  componentDidMount() {
    this.props.singleProduct(this.props.match.params.productid);
    this.props.fetchProductAttributes(this.props.match.params.productid);
  }
  render() {
    return (
      <main>
        <div className="card">
          <div className="card__body">
            <div className="half">
              <div className="featured_text">
                <h1>Nurton</h1>
                <p className="sub">Office Chair</p>
                <p className="price">$210.00</p>
              </div>
              <div className="image">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/I/613A7vcgJ4L._SL1500_.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="half">
              <div className="description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  voluptatem nam pariatur voluptate perferendis, asperiores
                  aspernatur! Porro similique consequatur, nobis soluta minima,
                  quasi laboriosam hic cupiditate perferendis esse numquam
                  magni.
                </p>
              </div>
              <span className="stock">
                <i className="fa fa-pen" /> In stock
              </span>
              <div className="reviews">
                <ul className="stars">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card__footer">
            <div className="recommend" />
            <div className="action">
              <button type="button">Add to cart</button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
const mapStatesToProps = stateStore => {
  console.log(stateStore.productState.prodAttributes);
  let colors = null;
  return {
    product: stateStore.productState.product,
    attributes: stateStore.productState.prodAttributes
  };
};
export default connect(
  mapStatesToProps,
  { fetchProductAttributes, singleProduct }
)(ProductAttributes);
