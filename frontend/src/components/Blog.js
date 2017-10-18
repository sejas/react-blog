import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Categories from './Categories'
import Posts from './Posts'
import Sort from './Sort'

export default class Blog extends Component {
  static propTypes = {
    cateogryPath: PropTypes.string
  }
  render() {
    return (
      <div className="blog">
        <header>
            <h1>BLOG</h1>
            <Categories categoryPath={this.props.categoryPath} />
            <Sort />
        </header>
        <section>
          <Posts categoryPath={this.props.categoryPath} />
        </section>
      </div>
    );
  }
}

