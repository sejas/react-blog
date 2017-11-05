import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Post from './Post'
import Comments from './Comments'
import { fetchComments, fetchPosts, deletePost } from "../actions";
import CommentAdd from './CommentAdd'



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

	editPost = () => {

	}
	deletePost = (e) => {
		const {match, deletePost} = this.props
		const {postId} = match.params
		if (window.confirm("Are you sure, you want to delete this post?")) {
			deletePost(postId).then((p)=>{
				window.location.href = '/'
			})
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
				<div className="pd-edit-post">
						<span className="hover button" onClick={this.editPost}> Edit </span> /
						<span className="hover button" onClick={this.deletePost}> Delete </span>
				</div>
				{comments.length > 0 &&
					<div>
						<h3>Comments</h3>
						<Comments
							comments={comments[postId]||[]}
						/>
						<CommentAdd  />
					</div>
				}
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
			deletePost
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);