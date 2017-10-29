import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Post from './Post'
import Comments from './Comments'
import { fetchComments, fetchPosts } from "../actions";



class PostDetail extends Component {
	static propTypes = {

	};

	componentDidMount() {
		const { fetchComments, fetchPosts, match, postsHasBeenRequested } = this.props
		fetchComments(match.params.postId)

		if (!postsHasBeenRequested) {
			fetchPosts()
		}
	}

	render() {
		const {posts, comments, match} = this.props
		const postId = match.params.postId
		const post = posts.find((p)=>(p.id == postId))
		return (
			<div className="post-detail">
				<Link className="close-search" to="/">Home</Link>
				<Post
					post={post||{}}
				/>
				<h3>Comments</h3>
				<Comments
					comments={comments[postId]||[]}
				/>
			</div>
		);
	}
}


const mapStateToProps = state => ({
	posts: state.posts.items,
	comments: state.posts.comments,
	postsHasBeenRequested: state.posts.postsHasBeenRequested,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			fetchComments,
			fetchPosts,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);