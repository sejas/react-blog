/**
* Antonio Sejas
* antonio@sejas.es
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Blog from './Blog'

class Category extends Component {

  static propTypes = {
  }

  state = {
  }

  componentDidMount(){}

  render() {
   return (
     <div>
       <Blog categoryPath={this.props.match.params.categoryPath} />
     </div>
   );

  }
}


const mapStateToProps = state => ({
  // categories: state.categories.items,
  // isFetching: state.categories.isFetching,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // fetchCategories
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Category);
