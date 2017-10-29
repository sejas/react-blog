import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Comments extends Component {
	static propTypes = {

	};

	render() {
		const {post} = this.props
		return (
			<div className="comments">
				Comentarios
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