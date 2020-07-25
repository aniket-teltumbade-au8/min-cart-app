import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProductAttributes,
  singleProduct
} from "../redux/actions/productActions";
import Loader from "react-loader-spinner";
class ProductAttributes extends Component {
  state = {
    colors: null
  };
  componentDidMount() {
    this.props.singleProduct(this.props.match.params.productid);
    this.props.fetchProductAttributes(this.props.match.params.productid);
  }
  render() {
    /*console.log(this.props);
    if (this.props.attributes !== null || this.props.attributes !== undefined) {
      const color = this.props.attributes.filter(
        color => color.attribute_name === "color"
      );
      this.setState({
        colors: color
      });
    } else {
    }*/
    console.log(this.props.product);
    return this.props.product && this.props.attributes ? (
      <main>
        <div className="card">
          <div className="card__body">
            <div className="half">
              <div className="featured_text">
                <p className="sub">{this.props.product.name}</p>
                <p className="price">${this.props.product.price}</p>
              </div>
              <div className="image">
                <img
                  src={`https://backendapi.turing.com/images/products/${
                    this.props.product.image
                  }`}
                  alt=""
                />
              </div>
            </div>
            <div className="half">
              <div className="description">
                <p>{this.props.product.description}</p>
              </div>
              {this.props.attributes.map(p => (
                <div>
                  {p.attribute_name}:{p.attribute_value}
                </div>
              ))}
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
    ) : (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Loader type="Grid" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
const mapStatesToProps = stateStore => {
  //  let colors = stateStore.productState.prodAttributes.filter(color => color.attribute_name ==="color");
  //  let sizes = stateStore.productState.prodAttributes.filter(size => size.attribute_name ==="size");
  //console.log(colors)
  return {
    product: stateStore.productState.product,
    attributes: stateStore.productState.prodAttributes
  };
};
export default connect(
  mapStatesToProps,
  { fetchProductAttributes, singleProduct }
)(ProductAttributes);
