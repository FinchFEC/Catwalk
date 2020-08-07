import React from "react";
import ProductListContainer from "../redux/containers/productListContainer.js";
import Overview from "./widgets/overview/Overview.js";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Hello {name}</h1>
        <div>
          <Overview />
        </div>
      </div>
    );
  }
}

export default App;
