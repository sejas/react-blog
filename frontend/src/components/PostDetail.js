import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Post from './Post'
import Comments from './Comments'
import { fetchComments, fetchPosts, fetchCategories, deletePost } from "../actions";
import CommentAdd from './CommentAdd'
import PostAdd from './PostAdd'
import Modal from 'react-modal';



class PostDetail extends Component {
	static propTypes = {

	};

	state = {
		showEdit: false,
	}

	componentDidMount() {
		const { fetchComments, fetchPosts, fetchCategories, postsHasBeenRequested } = this.props
		fetchComments(this.postId())

		if (!postsHasBeenRequested) {
			fetchPosts()
			fetchCategories()
		}
	}

	editPost = () => {
		this.setState({showEdit: true})
	}
	closeModal = () => {
		this.setState({showEdit: false})
	}
	deletePost = (e) => {
		const {deletePost} = this.props
		const postId = this.postId()
		if (window.confirm("Are you sure, you want to delete this post and all its comments?")) {
			deletePost(postId).then((p)=>{
				window.location.href = '/'
			})
		}
	}

	showExtraForDetail = (comments, postId) => (
		<div>
			{(comments[postId] || []).length > 0 &&
				<div>
					<h3>Comments</h3>
					<Comments
						comments={comments[postId]}
						postId={postId}
					/>
				</div>}
			<CommentAdd postId={postId} />
		</div>
	)
	postId = () => {
		return this.props.postId || this.props.match.params.postId
	}
	render() {
		const {posts, comments, isDetail} = this.props
		const postId = this.postId()
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

				{isDetail && this.showExtraForDetail(comments, postId)}




				<Modal
				  isOpen={this.state.showEdit}
				  onRequestClose={this.closeModal}
				  contentLabel="Modal"
				>
				  <h2>Edit Post</h2>
				  <PostAdd post={post} callBack={this.closeModal} />
				</Modal>
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
			fetchCategories,
			deletePost
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);