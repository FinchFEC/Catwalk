import React from "react";
import RelatedList from "./relatedList";
import OutfitList from "./outfitList";
import "../../../assets/scss/related.scss";
import PropTypes from 'prop-types';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.props.getRelatedProductIDs(4);
  }

  render() {
    return (
      <div>
        <RelatedList />
        <br />
        <OutfitList />
        <br />
      </div>
    );
  }
}

RelatedProducts.propTypes = {
};

export default RelatedProducts;
