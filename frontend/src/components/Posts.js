import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class Posts extends Component {
	static propTypes = {
	};
	componentDidMount() {
		const { fetchPosts } = this.props
		fetchPosts()
	}
	render() {
		const {posts, isFetching} = this.props
		return (
			<div className="posts">
				{posts.map((post, index) => (
					<article key={post.id}>
						{post.title}
					</article>
				))}
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