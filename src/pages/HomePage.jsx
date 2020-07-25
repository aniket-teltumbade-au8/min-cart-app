import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
class HomePage extends Component {
  componentDidMount() {
    console.log(this);
    this.props.fetchProducts();
  }
  render() {
    console.log(this.props.prod.rows);
    return this.props.prod.rows ? (
      <h1>{JSON.stringify(this.props.prod)}</h1>
    ) : (
      <h1>Loading</h1>
    );
  }
}
const mapsStatesToProps = storestate => {
  console.log(storestate);
  return { prod: storestate.productState.products };
};
export default connect(
  mapsStatesToProps,
  { fetchProducts }
)(HomePage);
