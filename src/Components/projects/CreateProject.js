import React, { Component } from 'react';
import { connect } from 'react-redux' ;
import createProject from '../store/Actions/ProjectActions' ;
import thunk from 'redux-thunk';
import { Redirect } from 'react-router-dom';

export class CreateProject extends Component {

    state = {
        title : '' ,
        content : ''
    }
  handleChange = (e) => {
    
    this.setState({
        [e.target.id] : e.target.value 
    })


  };

  handleSubmit = (e) => {
    e.preventDefault() ;

    console.log( this.state ) ;
    // console.log( this.props ) ;
    this.props.createProject(this.state) ;
    this.props.history.push('/') ;

  };

  render() {

    const { auth } = this.props ;

    if ( !auth.uid ) {  
      return <Redirect to = '/signin' /> 
     }


    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Create New Project</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id = "content" className = "materialize-textarea" onChange={this.handleChange} ></textarea>
          </div>


          <div className="input-field">
            <button className="btn pink z-depth-0 lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    auth : state.firebase.auth 
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    createProject : (project) => {
      dispatch( createProject(project) )
    }
  }
}

export default connect(  mapStateToProps , mapDispatchToProps) (CreateProject) ;
