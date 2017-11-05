import {getOptionsWithMethod} from './getOptionsWithMethod'
import uuid from './uuid'

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

const deletePost = postId => fetch(`${URL}/posts/${postId}`, getOptionsWithMethod("DELETE"))
              .then(res => res.json() || [])
const deleteComment = commentId => fetch(`${URL}/comments/${commentId}`, getOptionsWithMethod("DELETE"))
              .then(res => res.json() || [])
const createComment = (comment) => fetch(`${URL}/comments`, getOptionsWithMethod("POST", {...comment, id:uuid()}))
              .then(res => res.json() || [])
const createPost = (post) => fetch(`${URL}/posts`, getOptionsWithMethod("POST", {...post, id:uuid()}))
              .then(res => res.json() || [])
const editComment = (comment) => fetch(`${URL}/comments${comment.id}`, getOptionsWithMethod("PUT", comment))
              .then(res => res.json() || [])
const editPost = (post) => fetch(`${URL}/posts${post.id}`, getOptionsWithMethod("PUT", post))
              .then(res => res.json() || [])

const NetworkBlog = {
  getCategories,
  getPosts,
  getCommentsForPost,
  createComment,
  createPost,
  editComment,
  editPost,
  deletePost,
  deleteComment,
  upVotePost: voteGeneric('posts', 'upVote'),
  downVotePost: voteGeneric('posts', 'downVote'),
  upVoteComment: voteGeneric('comments', 'upVote'),
  downVoteComment: voteGeneric('comments', 'downVote'),
}

export default NetworkBlog