// import all individual container components

import productListContainer from './productListContainer.js';
import RatingsReviewsContainer from './RatingsReviewsContainer';
import RelatedMasterContainer from './relatedContainers/relatedMasterContainer';
import ComparisonContainer from './relatedContainers/comparisonModalContainer';
import RelatedListContainer from './relatedContainers/relatedListContainer';
import RelatedItemContainer from './relatedContainers/relatedItemContainer';

const containers = { 
  productListContainer, 
  RatingsReviewsContainer, 
  RelatedMasterContainer, 
  ComparisonContainer,
  RelatedListContainer,
  RelatedItemContainer
};

export default containers;
