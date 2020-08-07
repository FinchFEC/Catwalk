import React from "react";
import ProductListContainer from "../redux/containers/productListContainer.js";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Hello {name}</h1>
        <div>
          <ProductListContainer />
        </div>
      </div>
    );
  }
}

export default App;
