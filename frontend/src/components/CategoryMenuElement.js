import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class CategoryMenuElement extends Component {
	static propTypes = {
		category: PropTypes.object.isRequired,
	};

	render() {
		const {category} = this.props
		return (
			<Link
	        to={category.path}
	        className='search'
	      	>
          		{category.name}
          	</Link>
		);
	}
}

export default CategoryMenuElement
