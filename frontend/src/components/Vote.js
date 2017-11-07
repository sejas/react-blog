import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PostFooterInfo from './PostFooterInfo'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { upVotePost, downVotePost, upVoteComment, downVoteComment, sortPosts } from "../actions";

class Vote extends Component {
	static propTypes = {
		elementId: PropTypes.string.isRequired,
		isComment: PropTypes.bool,
	};

	upVote = () => {
		const { upVotePost, upVoteComment, elementId, isComment, sortPosts, lastSortKey} = this.props
		if (isComment) {
			upVoteComment(elementId)
		}else{
			upVotePost(elementId).then(()=>{
				sortPosts(lastSortKey)
			})
		}
	}
	downVote = () => {
		const { downVotePost, downVoteComment, elementId, isComment, sortPosts, lastSortKey} = this.props
		if (isComment) {
			downVoteComment(elementId)
		}else{
			downVotePost(elementId).then(()=>{
				sortPosts(lastSortKey)
			})
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



const mapStateToProps = ({posts}) => ({
	lastSortKey: posts.lastSortKey
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			upVotePost,
			downVotePost,
			upVoteComment,
			downVoteComment,
			sortPosts
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Vote);