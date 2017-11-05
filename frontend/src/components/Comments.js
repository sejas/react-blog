import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Vote from './Vote'

class Comments extends Component {
	static propTypes = {

	};

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
		const {post, comments} = this.props
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
								<span className="hover button" onClick={this.editPost}> Edit </span> /
								<span className="hover button" onClick={this.deletePost}> Delete </span>
						</div>
					</div>
				))}
			</div>
		);
	}
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Comments);