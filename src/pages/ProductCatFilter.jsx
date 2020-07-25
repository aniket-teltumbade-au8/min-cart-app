import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProductsByCategory } from "../redux/actions/productActions";
import Products from "../components/Products";
import Loader from "react-loader-spinner";
class ProductCatFilter extends Component {
  componentDidUpdate() {
    this.props.filterProductsByCategory(this.props.match.params.categoryId);
  }
  render() {
    return this.props.prod ? (
      <div className="Home">
        {console.log(this.props.prod.rows)}
        {this.props.prod.rows.map(p => (
          <Products key={p.product_id} product={p} />
        ))}
      </div>
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
const mapStatesToProps = storeState => {
  return { prod: storeState.productState.prodCatFilter };
};
export default connect(
  mapStatesToProps,
  { filterProductsByCategory }
)(ProductCatFilter);
