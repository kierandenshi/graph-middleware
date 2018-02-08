import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  
  render() {
    const { dispatch } = this.props;
    return (
      <div className="App">
        app yo
        <button onClick={() => { dispatch({ type: 'GO_FETCH_DATA' }); }}>Click me</button>
      </div>
    );
  }

}

export default connect(null)(App);
