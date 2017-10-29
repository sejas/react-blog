import {getOptionsWithMethod} from './getOptionsWithMethod'

const URL = "http://localhost:3001";

// API Methods
const getCategories = () => fetch(`${URL}/categories`, getOptionsWithMethod("GET"))
							.then(res => res.json())
							.then(res => res.categories || [])


const getPosts = () => fetch(`${URL}/posts`, getOptionsWithMethod("GET"))
							.then(res => res.json() || [])

const voteGeneric = (key) => (id) => fetch(`${URL}/posts/${id}`, getOptionsWithMethod("POST", {option: key}))
              .then(res => res.json() || [])

const NetworkBlog = {
  getCategories,
  getPosts,
  upVotePost: voteGeneric('upVote'),
  downVotePost: voteGeneric('downVote'),
}

export default NetworkBlog