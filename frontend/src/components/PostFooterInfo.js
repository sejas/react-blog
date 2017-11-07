import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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
		const {post, comments} = this.props
		return (
			<div className="post-footer">
				{this.info.map((elem)=> (
					elem.id == 'comments'
					?<div key={elem.id} className={elem.id}>
						<u>{elem.label}</u>: {(comments && comments.length) || 0}
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



const mapStateToProps = (state, props) => {
	const {post} = props
	return {
		comments: state.posts.comments[post.id],
	}
};

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(PostFooterInfo);