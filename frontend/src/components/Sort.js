import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { sortPosts } from "../actions";

class Sort extends Component {
  static propTypes = {

  }
  sortPosibilities = [
    {key: 'timestamp', name:'Date'},
    {key: 'voteScore', name:'Score'},
  ]
  sortPosts = (key)=>{
    this.props.sortPosts(key)
  }
  render() {
    const {lastSortKey} = this.props
    const sortPosibilitiesModified = this.sortPosibilities.map(({key, name},index)=>{
          const preffix = lastSortKey === key
          ? '-'
          : ''
          return {key: preffix+key, name: preffix+name}
        })
    return (
      <div className="sort">
        {sortPosibilitiesModified.map(({key, name},index)=>(
          <a href="" key={index} onClick={(e)=>{e.preventDefault(); this.sortPosts(key)}}> {name} </a>
        ))}
      </div>
    );
  }
}


const mapStateToProps = ({posts}) => ({
  lastSortKey: posts.lastSortKey
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sortPosts
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Sort);

