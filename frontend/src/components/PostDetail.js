import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Post from './Post'
import Comments from './Comments'


class PostDetail extends Component {
	static propTypes = {

	};

	render() {
		const {posts, match} = this.props
		const post = posts.find((p)=>(p.id == match.params.postId))
		return (
			<div className="post-detail">
				<Link className="close-search" to="/">Home</Link>
				<Post
					post={post||{}}
				/>
				<Comments
					post={post}
				/>
			</div>
		);
	}
}


const mapStateToProps = state => ({
	posts: state.posts.items,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);