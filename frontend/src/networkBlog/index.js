import {getOptionsWithMethod} from './getOptionsWithMethod'

const URL = "http://localhost:5001";

// API Methods
const getCategories = () => fetch(`${URL}/categories`, getOptionsWithMethod("GET"))
							.then(res => res.json())
							.then(res => res.categories || [])


const getPosts = () => fetch(`${URL}/posts`, getOptionsWithMethod("GET"))
							.then(res => res.json() || [])


export const NetworkBlog = {
	getCategories,
	getPosts,
}