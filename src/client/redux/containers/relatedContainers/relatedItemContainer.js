import { connect } from "react-redux";
import RelatedItem from "../../../components/widgets/related-products/relatedItem";
// import actionCreators from "../../action-creators";

function mapStateToProps(state) {
  return {
    showComparison: state.showComparison,
  };
}


const RelatedItemContainer = connect(
  mapStateToProps
)(RelatedItem);

export default RelatedItemContainer;
