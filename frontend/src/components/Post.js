import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PostFooterInfo from './PostFooterInfo'
import Vote from './Vote'

class Post extends Component {
	static propTypes = {
		post: PropTypes.object.isRequired,
	};

	render() {
		const {post} = this.props
		return (
			<article className="post">
				<h2> {post.title} </h2>
				<div className="content"> {post.body} </div>
				<PostFooterInfo post={post} />
				<Vote post_id={post.id} />
			</article>
		);
	}
}


export default Post