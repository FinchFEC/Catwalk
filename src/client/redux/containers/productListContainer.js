import { connect } from "react-redux";
import ProductListComponent from "../../components/ProductList.js";

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
  };
};

const ProductListContainer = connect(mapStateToProps)(ProductListComponent);

export default ProductListContainer;
