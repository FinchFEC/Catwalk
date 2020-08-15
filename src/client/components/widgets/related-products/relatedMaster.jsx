import React from "react";
import PropTypes from "prop-types";
import RelatedList from "./relatedList";
import OutfitList from "./outfitList";
import "../../../assets/scss/related.scss";

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.props.getRelatedProductsInfo(4);
  }

  render() {
    return (
      <div>
        {console.log('---relatedInfo', this.props.relatedInfo)}
        <RelatedList relatedInfo={this.props.relatedInfo} />
        <OutfitList />
      </div>
    );
  }
}



RelatedProducts.propTypes = {
  relatedInfo: PropTypes.array.isRequired,
  getRelatedProductsInfo: PropTypes.func.isRequired,
};

export default RelatedProducts;
