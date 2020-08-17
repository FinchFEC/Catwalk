import { connect } from "react-redux";
import ComparisonModal from "../../../components/widgets/related-products/comparisonModal.jsx";
import toggleComparison from "../../action-creators/relatedActions/toggleComparison";

function mapStateToProps(state) {
  return {
    showComparison: state.comparison,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleComparison() {
      dispatch(toggleComparison);
    },
  };
}

const ComparisonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComparisonModal);

export default ComparisonContainer;