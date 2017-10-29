import * as types from '../actions/actionTypes'
import { combineReducers } from 'redux'
import sortBy from 'sort-by';

import {
  receivePosts,
  receiveCategories,
} from '../actions'


const DEFAULT_STATE_POSTS = {
  lastSortKey: '',
  postsHasBeenRequested: false, // Used to load posts if you refresh the browser
  isFetching: false,
  items: [],
  comments: {}
}
export const posts = (state=DEFAULT_STATE_POSTS, action) => {
  switch (action.type) {
    case types.REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        postsHasBeenRequested: true,
      }
    case types.RECEIVE_POSTS:
      return {
        ...state,
        items: action.posts,
        isFetching: false
      }
    case types.DOWNVOTE_POST:
    case types.UPVOTE_POST:
      const {post} = action
      const postWithUpdatedPost = state.items.map((p)=>((p.id === post.id)
        ?post
        :p))
      return {
        ...state,
        items: postWithUpdatedPost
      }
    case types.DOWNVOTE_COMMENT:
    case types.UPVOTE_COMMENT:
      const {comment} = action
      const commentsUpdated = state.comments[comment.parentId].map((c)=>((c.id === comment.id)
        ?comment
        :c))
      return {
        ...state,
        comments: {
          ...state.comments,
          [comment.parentId]: commentsUpdated
        }
      }
    case types.SORT_POSTS:
      const copyPosts = Object.assign([], state.items)
      return {
        ...state,
        items: copyPosts.sort(sortBy(action.key)),
        lastSortKey: action.key
      }
    case types.RECEIVE_COMMENTS:

    return {
      ...state,
      comments: {
        ...state.comments,
        [action.postId]: action.comments
      }
    }
    default :
      return state
  }
}

const DEFAULT_STATE_CATEGORIES = {
  isFetching: false,
  items: []
}
export const categories = (state=DEFAULT_STATE_CATEGORIES, action) => {
  switch (action.type) {
    case types.REQUEST_CATEGORIES:
      return {
        ...state,
        isFetching: true
      }
    case types.RECEIVE_CATEGORIES:
      return {
        ...state,
        items: action.categories,
        isFetching: false
      }
    default :
      return state
  }
}

export default combineReducers({
  categories,
  posts,
})