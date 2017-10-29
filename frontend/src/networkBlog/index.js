import {getOptionsWithMethod} from './getOptionsWithMethod'

const URL = "http://localhost:3001";

// API Methods
const getCategories = () => fetch(`${URL}/categories`, getOptionsWithMethod("GET"))
							.then(res => res.json())
							.then(res => res.categories || [])


const getPosts = () => fetch(`${URL}/posts`, getOptionsWithMethod("GET"))
							.then(res => res.json() || [])

//What: posts or comments
//key: upVote or downVote
const voteGeneric = (what, key) => (id) => fetch(`${URL}/${what}/${id}`, getOptionsWithMethod("POST", {option: key}))
              .then(res => res.json() || [])

const getCommentsForPost = postId => fetch(`${URL}/posts/${postId}/comments`, getOptionsWithMethod("GET"))
              .then(res => res.json() || [])

const NetworkBlog = {
  getCategories,
  getPosts,
  getCommentsForPost,
  upVotePost: voteGeneric('posts', 'upVote'),
  downVotePost: voteGeneric('posts', 'downVote'),
  upVoteComment: voteGeneric('comments', 'upVote'),
  downVoteComment: voteGeneric('comments', 'downVote'),
}

export default NetworkBlog