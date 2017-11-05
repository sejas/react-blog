import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Vote from './Vote'
import { deleteComment } from "../actions";
import CommentAdd from './CommentAdd'
import Modal from 'react-modal';

class Comments extends Component {
	static propTypes = {

	};

	state = {
		showEdit: false,
		commentToEdit: {}

	}

	closeModal = () => {
		this.setState({showEdit: false})
	}


	editComment = comment => () => {
		this.setState({
			commentToEdit: comment,
			showEdit: true
		})
	}
	deleteComment = comment => () => {
		this.props.deleteComment(comment.id, comment.parentId)
	}


	keys = [
		{
			title: 'Author',
			key: 'author'
		},
		{
			title: 'Current score',
			key: 'voteScore'
		},
	]
	render() {
		const {comments, postId} = this.props
		const {commentToEdit} = this.state
		return (
			<div className="comments">
				{comments.map((c)=>(
					<div key={c.id} className="comment">
						<div className="comment-body">
							{c.body}
						</div>
						<div className="comment-extra">
								{this.keys.map(({title, key})=>(
									<div key={key} className={key}>
										{title}: {c[key]}
									</div>
								))}
								<Vote elementId={c.id} isComment={true}/>
						</div>
						<div className="pd-edit-comment">
								<span className="hover button" onClick={this.editComment(c)}> Edit </span> /
								<span className="hover button" onClick={this.deleteComment(c)}> Delete </span>
						</div>
					</div>
				))}

				<Modal
				  isOpen={this.state.showEdit}
				  onRequestClose={this.closeModal}
				  contentLabel="Modal"
				>
				  <h2>Edit Comment</h2>
				  <CommentAdd comment={commentToEdit} postId={postId} callBack={this.closeModal} />
				</Modal>


			</div>
		);
	}
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			deleteComment
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Comments);