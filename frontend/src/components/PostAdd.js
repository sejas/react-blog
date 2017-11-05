/**
* Antonio Sejas
* antonio@sejas.es
*/

import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ButtonAdd from './ButtonAdd'
import {createPost, fetchPosts, editPost} from '../actions'


class PostAdd extends Component {

  static propTypes = {}

  state = {
    showForm: false,
    form: {
      category: '',
      title: '',
      body: '',
    }
  }

  initState = () => {
    const {categories, post} = this.props
    if (post) {
      this.setState({form:post})
    }else{
      this.setState({form:{
        category: (categories[0]||{name:''}).name,
        title: '',
        body: '',
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
        <h2>New Post</h2>
        <label htmlFor="category">
          Category
          <select name="category" onChange={this.onChange('category')} value={this.state.form.category}>
            {this.props.categories.map(c => (
              <option key={c.name} value={c.name} >{c.name}</option>
            ))}
          </select>
        </label>
        <label htmlFor="title">
          Title
          <input type="text" name="title" onChange={this.onChange('title')} value={this.state.form.title} />
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
    const {createPost, editPost, post, fetchPosts, categories} = this.props
    const formTosend = {
      ...this.state.form
    }
    if (''===formTosend.title) {
      return alert('Sorry, the title is a required field. Try again.')
    }

    if ('' === formTosend.category) {
      formTosend.category = (categories[0]||{name:''}).name
    }
    if (post) {
      createPost(formTosend).then(()=>{
        this.initState()
        fetchPosts()
      })
    }else{
      editPost(formTosend).then(()=>{
        this.initState()
        fetchPosts()
      })
    }
  }

  render() {
   return (
     <div className="comment-add">
       {this.state.showForm &&
         this.renderForm()
       }

       {this.renderPlus()}

     </div>
   );

  }
}


const mapStateToProps = ({categories}) => ({
  categories: categories.items,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createPost,
      fetchPosts,
      editPost
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);