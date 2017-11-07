import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import PostDetail from "./PostDetail";
import PostAdd from './PostAdd'


class Posts extends Component {
	static propTypes = {
		categoryPath: PropTypes.string
	};
	componentDidMount() {
		const { fetchPosts } = this.props
		fetchPosts()
	}
	render() {
		const {posts, isFetching, categoryPath} = this.props
		var postsPosibleFiltered = posts
		if (categoryPath) {
			postsPosibleFiltered = posts.filter((p)=>(p.category === categoryPath))
		}

		return (
			<div className="posts">
				{!isFetching && postsPosibleFiltered.map((post, index) => (
					<PostDetail key={index} post={post} postId={post.id} />
				))}

				<PostAdd />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	posts: state.posts.items,
	isFetching: state.posts.isFetching,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			fetchPosts
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);