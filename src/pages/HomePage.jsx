import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import Products from "../components/Products";
class HomePage extends Component {
  componentDidMount() {
    console.log(this);
    this.props.fetchProducts();
  }
  render() {
    //console.log(this.props.prod);
    return this.props.prod ? (
      <div className="Home">
        {console.log(this.props.prod.rows)}
        {this.props.prod.rows.map(p => (
          <Products key={p.product_id} product={p} />
         ))}
      </div>
    ) : (
      <h1>Loading</h1>
    );
  }
}
const mapsStatesToProps = storestate => {
  return { prod: storestate.productState.products };
};
export default connect(
  mapsStatesToProps,
  { fetchProducts }
)(HomePage);
