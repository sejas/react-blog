import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PostFooterInfo from './PostFooterInfo'
import Vote from './Vote'

class Post extends Component {
	static propTypes = {
		post: PropTypes.object.isRequired,
	};
	notFound = ()=>(
		<div>Post not found</div>
	)
	render() {
		const {post} = this.props
		if (!post.id) {
			return this.notFound()
		}
		return (
			<article className="post">
				<h2> <Link
	        to={`/${post.category}/${post.id}`}
	      	>{post.title}</Link> </h2>
				<div className="content"> {post.body} </div>
				<PostFooterInfo post={post} />
				<Vote elementId={post.id} />
			</article>
		);
	}
}


export default Post