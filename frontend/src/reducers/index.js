import * as types from '../actions/actionTypes'
import { combineReducers } from 'redux'

import {
  receivePosts,
  receiveCategories
} from '../actions'


const DEFAULT_STATE_POSTS = {
  isFetching: false,
  items: []
}
export const posts = (state=DEFAULT_STATE_POSTS, action) => {
  switch (action.type) {
    case types.REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }
    case types.RECEIVE_POSTS:
      return {
        ...state,
        items: action.posts,
        isFetching: false
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