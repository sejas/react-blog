import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PostFooterInfo from './PostFooterInfo'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { upVotePost, downVotePost } from "../actions";

class Vote extends Component {
	static propTypes = {
		post_id: PropTypes.string.isRequired,
	};

	upVote = () => {
		const { upVotePost, post_id } = this.props
		upVotePost(post_id)
	}
	downVote = () => {
		const { downVotePost, post_id } = this.props
		downVotePost(post_id)
	}
	render() {
		const {post} = this.props
		return (
			<div className="vote">
				<span>Vote: </span>
				<span className="hover" onClick={this.upVote}>+1</span>
				<span className="hover" onClick={this.downVote}>-1</span>
			</div>
		);
	}
}



const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			upVotePost,
			downVotePost
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Vote);