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

        <Route exact path='/:categoryPath' component={Category}/>

        <Route exact path='/:categoryPath/:postId' component={PostDetail}/>

      </div>
    );
  }
}

export default App;
