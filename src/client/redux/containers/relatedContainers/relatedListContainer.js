import { connect } from "react-redux";
import RelatedList from "../../../components/widgets/related-products/relatedList";
// import actionCreators from "../../action-creators";

function mapStateToProps(state) {
  return {
    showComparison: state.showComparison,
    relatedInfo: state.relatedInfo,
    relatedImages: state.relatedImages
  };
}


const RelatedListContainer = connect(
  mapStateToProps
)(RelatedList);

export default RelatedListContainer;
