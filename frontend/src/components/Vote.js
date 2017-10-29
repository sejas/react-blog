import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PostFooterInfo from './PostFooterInfo'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { upVotePost, downVotePost, upVoteComment, downVoteComment } from "../actions";

class Vote extends Component {
	static propTypes = {
		elementId: PropTypes.string.isRequired,
		isComment: PropTypes.bool,
	};

	upVote = () => {
		const { upVotePost, elementId, isComment} = this.props
		if (isComment) {
			upVoteComment(elementId)
		}else{
			upVotePost(elementId)
		}
	}
	downVote = () => {
		const { downVotePost, elementId, isComment} = this.props
		if (isComment) {
			downVoteComment(elementId)
		}else{
			downVotePost(elementId)
		}
	}
	render() {
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
			downVotePost,
			upVoteComment,
			downVoteComment
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Vote);