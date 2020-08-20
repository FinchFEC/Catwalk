import { connect } from "react-redux";
import Overview from "../../components/widgets/overview/Overview.js";
//import productId from "../../reducers/productId.js";
import getCurrentProductInfo from "../action-creators/getCurrentProductInfo.js";
import getStylesByProductId from "../action-creators/getStylesByProductId.js";

function mapStateToProps(state) {
  return {
    productId: state.productId,
    currentInfo: state.currentInfo,
    styles: state.styles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCurrentProductInfo(prodId) {
      dispatch(getCurrentProductInfo(prodId));
    },
    getStylesByProductId(prodId) {
      dispatch(getStylesByProductId(prodId));
    },
  };
}

const OverViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);

export default OverViewContainer;
