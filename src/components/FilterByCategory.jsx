import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../redux/actions/productActions";
import { withRouter } from "react-router-dom";
class FilterByCategory extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  handleChangeCategory = e => {
    console.log(this);
    if (e.target.value !== "Filter by category") {
      this.props.history.push(`/prodbycat/${e.target.value}`);
    }
  };
  render() {
    console.log(this.props.category);
    return this.props.category ? (
      <select id="soflow" onChange={this.handleChangeCategory}>
        <option>Filter by category</option>
        {this.props.category.rows.map(cat => (
          <option key={cat.category_id} value={cat.category_id}>
            {cat.name}
          </option>
        ))}
      </select>
    ) : null;
  }
}
const mapStatesToProps = storeState => {
  return { category: storeState.productState.categories };
};
export default connect(
  mapStatesToProps,
  { fetchCategories }
)(withRouter(FilterByCategory));
