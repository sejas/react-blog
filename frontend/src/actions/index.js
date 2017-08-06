import * as types from './actionTypes'
import { NetworkBlog } from '../networkBlog'

console.log('NetworkBlog', NetworkBlog)

// CATEGORIES
export const requestCategories = () => ({
  type: types.REQUEST_CATEGORIES
})
export const receiveCategories = categories => ({
  type: types.RECEIVE_CATEGORIES,
  categories
})


export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  return NetworkBlog
      .getCategories()
      .then(categories => {
      	console.log('received categories', categories)
      	return dispatch(receiveCategories(categories))
      })
}


// POSTS
export const requestPosts = () => ({
  type: types.REQUEST_POSTS
})
export const receivePosts = posts => ({
  type: types.RECEIVE_POSTS,
  posts
})


export const fetchPosts = () => dispatch => {
  dispatch(requestPosts())
  return NetworkBlog
      .getPosts()
      .then(posts => {
      	console.log('received posts', posts)
      	return dispatch(receivePosts(posts))
      })
}

// POST: ADD, EDIT, VOTE
// COMMENT: ADD
