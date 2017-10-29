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
const upVoteCommentAction = (comment) => ({
  type: types.UPVOTE_COMMENT,
  comment
})
const downVoteCommentAction = (comment) => ({
  type: types.DOWNVOTE_COMMENT,
  comment
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
export const upVoteComment = (id) => dispatch => {
  return NetworkBlog
      .upVoteComment(id)
      .then(comment => {
        console.log('upvote comment', comment)
        dispatch(upVoteCommentAction(comment))
      })
}
export const downVoteComment = (id) => dispatch => {
  return NetworkBlog
      .downVoteComment(id)
      .then(comment => {
        console.log('upvote comment', comment)
        dispatch(downVoteCommentAction(comment))
      })
}

export const sortPosts = (key) => dispatch => {
  return dispatch(sortPostsAction(key))
}





// COMMENTS
const requestComments = (postId) => ({
  type: types.REQUEST_COMMENTS,
  postId
})
const receiveComments = (postId, comments) => ({
  type: types.RECEIVE_COMMENTS,
  comments,
  postId
})

export const fetchComments = (postId) => dispatch => {
  dispatch(requestComments())
  return NetworkBlog
      .getCommentsForPost(postId)
      .then(comments => {
        console.log('received comments', comments)
        return dispatch(receiveComments(postId, comments))
      })
}

// POST: ADD, EDIT, VOTE
// COMMENT: ADD
