import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Blog from './Blog'
import Category from './Category'
import Post from './Post'
import PostDetail from './PostDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
        	<Blog />
        )}/>

        <Route path='/categories/:categoryPath' component={Category}/>

        <Route path='/category/:postId' component={PostDetail}/>

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
