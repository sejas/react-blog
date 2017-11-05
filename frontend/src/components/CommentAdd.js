/**
* Antonio Sejas
* antonio@sejas.es
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ButtonAdd from './ButtonAdd'
import {createComment, fetchComments, editComment} from '../actions'


class CommentAdd extends Component {

  static propTypes = {
    postId: PropTypes.string.required
  }

  state = {
    showForm: false,
    form: {
      author: '',
      body: '',
      parentId: ''
    }
  }

  initState = () => {
    const {comment, postId} = this.props
    if (comment) {
      this.setState({form:comment})
    }else{
      this.setState({form:{
        author: '',
        body: '',
        parentId: postId,
      }})
    }
  }

  componentDidMount(){
    this.initState()
  }

  toogleForm = () => {
    this.setState(state => {
      return {
        ...state,
        showForm: !state.showForm
      }
    })
  }

  renderPlus = () => (<ButtonAdd rotate={this.state.showForm} onClick={this.toogleForm} />)

  renderForm = () => {

    return (
      <form onSubmit={this.submit}>
        {!this.props.comment && <h2>New Comment</h2>}
        <label htmlFor="author">
          Author
          <input type="text" name="author" onChange={this.onChange('author')} value={this.state.form.author} />
        </label>
        <label htmlFor="body">
          Body
          <textarea name="body" onChange={this.onChange('body')} cols="40" rows="5" value={this.state.form.body}></textarea>
        </label>
        <input type="submit" value="Save" />
      </form>
    )
  }

  onChange = key => event => {
    const {value} = event.target
    this.setState(state=>({
      ...state,
      form : {
        ...state.form,
        [key]: value
      }
    }))
  }

  submit = (e) => {
    e.preventDefault();
    const {createComment, editComment, comment, fetchComments, postId, callBack} = this.props
    const formTosend = {
      ...this.state.form
    }
    if (''===formTosend.author) {
      return alert('Sorry, the author is a required field. Try again.')
    }
    if (''===formTosend.body) {
      return alert('Sorry, the body is a required field. Try again.')
    }
    if (comment) {
      editComment(formTosend).then(()=>{
        fetchComments(postId)
        if ('function' === typeof callBack) {
          callBack()
        }
      })
    }else{
      createComment(formTosend).then(()=>{
        this.initState()
        fetchComments(postId)
        if ('function' === typeof callBack) {
          callBack()
        }
      })
    }
  }

  render() {
    if (this.props.comment) {
      //Edit
      return (
        <div className="comment-add">
          {this.renderForm()}
        </div>
      )
    }else{
      // Create
      return (
        <div className="comment-add">
          {this.state.showForm &&
            this.renderForm()
          }

          {this.renderPlus()}

        </div>
      )
    }

  }
}


const mapStateToProps = ({categories}) => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createComment,
      fetchComments,
      editComment
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd);