import React, { Component } from "react";
import PropTypes from 'prop-types'
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { receiveCategories, fetchCategories } from "../actions";
import CategoryMenuElement from "./CategoryMenuElement"


class Categories extends Component {
	static propTypes = {
		cateogryPath: PropTypes.string
	};

	componentDidMount() {
		const { fetchCategories } = this.props
		fetchCategories()
	}
	render() {
		const {categories, isFetching} = this.props
		const categoriesWithAll = [{name: "All", path: "/"}].concat(categories)
		return (
			<nav className="Categories">
				<h2>Categories</h2>
				<ul>
					{!isFetching && categoriesWithAll.map((category, index) => (
						<li key={index}>
							<CategoryMenuElement category={category} />
						</li>
					))}
				</ul>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	categories: state.categories.items,
	isFetching: state.categories.isFetching,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(
		{
			fetchCategories
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
