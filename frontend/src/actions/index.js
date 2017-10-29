import * as types from './actionTypes'
import NetworkBlog from '../networkBlog'

console.log('NetworkBlog', NetworkBlog)

// CATEGORIES
export const requestCategories = () => ({
  type: types.REQUEST_CATEGORIES
})
export const receiveCategories = categories => ({
  type: types.RECEIVE_CATEGORIES,
  categories
})
export const sortPostsAction = key => ({
  type: types.SORT_POSTS,
  key: key,
});


export const fetchCategories = () => dispatch => {
  dispatch(requestCategories())
  return NetworkBlog
      .getCategories()
      .then(categories => {
        const categoriesFullLink = categories.map((category)=>{
          category.path = `/categories/${category.path}`
          return category
        })
      	return dispatch(receiveCategories(categoriesFullLink))
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

//VOTE
const upVotePostAction = (post) => ({
  type: types.UPVOTE_POST,
  post
})
const downVotePostAction = (post) => ({
  type: types.DOWNVOTE_POST,
  post
})

export const upVotePost = (id) => dispatch => {
  return NetworkBlog
      .upVotePost(id)
      .then(post => {
        console.log('upvote post', post)
        dispatch(upVotePostAction(post))
      })
}
export const downVotePost = (id) => dispatch => {
  return NetworkBlog
      .downVotePost(id)
      .then(post => {
        console.log('upvote post', post)
        dispatch(downVotePostAction(post))
      })
}

export const sortPosts = (key) => dispatch => {
  return dispatch(sortPostsAction(key))
}

// POST: ADD, EDIT, VOTE
// COMMENT: ADD
