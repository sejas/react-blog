import * as types from './actionTypes'
import NetworkBlog from '../networkBlog'

console.log('NetworkBlog', NetworkBlog)

// MARK: - CATEGORIES
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
          category.path = `/${category.path}`
          return category
        })
      	return dispatch(receiveCategories(categoriesFullLink))
      })
}


// MARK: - POSTS
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


// MARK: - POST
//DELETE
const deletePostRequestAction = (postId) => ({
  type: types.DELETE_REQUEST_POST,
  postId
})
const deletePostAction = (postId) => ({
  type: types.DELETE_POST,
  postId
})
export const deletePost = (postId) => dispatch => {
  dispatch(deletePostRequestAction(postId))
  return NetworkBlog
      .deletePost(postId)
      .then(post => {
        console.log('post deleted', post)
        dispatch(deletePostAction(postId))
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
        console.log('downvote post', post)
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
        console.log('downvote comment', comment)
        dispatch(downVoteCommentAction(comment))
      })
}

export const sortPosts = (key) => dispatch => {
  return dispatch(sortPostsAction(key))
}





// MARK: - COMMENTS
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
        return dispatch(receiveComments(postId, comments.filter(c=>(!c.deleted && !c.parentDeleted))))
      })
}

//DELETE
const deleteCommentRequestAction = (commentId, parentId) => ({
  type: types.DELETE_REQUEST_COMMENT,
  commentId,
  parentId
})
const deleteCommentAction = (commentId, parentId) => ({
  type: types.DELETE_COMMENT,
  commentId,
  parentId
})
export const deleteComment = (commentId, parentId) => dispatch => {
  dispatch(deleteCommentRequestAction(commentId, parentId))
  return NetworkBlog
      .deleteComment(commentId)
      .then(answer => {
        console.log('commentId deleted', answer)
        dispatch(deleteCommentAction(commentId, parentId))
      })
}

//CREATE
const createCommentRequestAction = (comment) => ({
  type: types.CREATE_REQUEST_COMMENT,
  comment
})
const createCommentAction = (comment) => ({
  type: types.CREATE_COMMENT,
  comment
})
export const createComment = (comment) => dispatch => {
  dispatch(createCommentRequestAction(comment))
  return NetworkBlog
      .createComment(comment)
      .then(answer => {
        console.log('createComment', answer)
        dispatch(createCommentAction(comment))
      })
}
const createPostRequestAction = (post) => ({
  type: types.CREATE_REQUEST_POST,
  post
})
const createPostAction = (post) => ({
  type: types.CREATE_POST,
  post
})
export const createPost = (post) => dispatch => {
  dispatch(createPostRequestAction(post))
  return NetworkBlog
      .createPost(post)
      .then(answer => {
        console.log('createPost', answer)
        dispatch(createPostAction(post))
      })
}
//EDIT
const editCommentRequestAction = (comment) => ({
  type: types.EDIT_REQUEST_COMMENT,
  comment
})
const editCommentAction = (comment) => ({
  type: types.EDIT_COMMENT,
  comment
})
export const editComment = (comment) => dispatch => {
  dispatch(editCommentRequestAction(comment))
  return NetworkBlog
      .editComment(comment)
      .then(answer => {
        console.log('editComment', answer)
        dispatch(editCommentAction(comment))
      })
}
const editPostRequestAction = (post) => ({
  type: types.EDIT_REQUEST_POST,
  post
})
const editPostAction = (post) => ({
  type: types.EDIT_POST,
  post
})
export const editPost = (post) => dispatch => {
  dispatch(editPostRequestAction(post))
  return NetworkBlog
      .editPost(post)
      .then(answer => {
        console.log('editPost', answer)
        dispatch(editPostAction(post))
      })
}

// POST: ADD, EDIT, VOTE
// POST: ADD
