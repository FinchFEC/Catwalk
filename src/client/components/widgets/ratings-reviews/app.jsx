import Stars from './stars';
import React from 'react';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return <Stars rating={2.35} />;
  }
}

export default App;
