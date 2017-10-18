import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PostFooterInfo extends Component {
	static propTypes = {
		post: PropTypes.object.isRequired,
	};

	info = [
		{id: 'author', label: 'Author'},
		{id: 'category', label: 'Category'},
		{id: 'voteScore', label: 'Score'},
		{id: 'comments', label: 'Nº Comments'},
	]

	render() {
		const {post} = this.props
		return (
			<div className="post-footer">
				{this.info.map((elem)=> (
					elem.id == 'comments'
					?<div key={elem.id} className={elem.id}>
						<u>{elem.label}</u>: {(post[elem.id] && post[elem.id].length) || 0}
					</div>
					:<div key={elem.id} className={elem.id}>
						<u>{elem.label}</u>: {post[elem.id]}
					</div>
				)
				)}
			</div>
		);
	}
}


export default PostFooterInfo