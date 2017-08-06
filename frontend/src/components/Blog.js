import React, { Component } from 'react';
import Categories from './Categories'
import Posts from './Posts'

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <header>
            <h1>BLOG</h1>
            <Categories />
        </header>
        <section>
          <Posts />
        </section>
      </div>
    );
  }
}

export default Blog;
