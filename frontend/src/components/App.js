import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Blog from './Blog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
        	<Blog />
        )}/>

        <Route exact path='/category' render={() => (
        	<h1>Category</h1>
        )}/>

        <Route exact path='/detail' render={() => (
        	<h1>Detail</h1>
        )}/>

        <Route exact path='/edit' render={() => (
        	<h1>Edit</h1>
        )}/>


      </div>
    );
  }
}

export default App;
