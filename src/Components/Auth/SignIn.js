import React, { Component } from 'react';
import { connect } from 'react-redux' ;
import { signIn } from '../store/Actions/AuthActions' ;
import { Redirect } from 'react-router-dom';


export class SignIn extends Component {

    state = {
        email : '' ,
        password : ''
    }
  handleChange = (e) => {
     
    this.setState({
        [e.target.id] : e.target.value 
    })


  };

  handleSubmit = (e) => {
    e.preventDefault() ;
     this.props.signIn(this.state) ;
  

  };

  render() {

    const { authError , auth } = this.props ;

    if (auth.uid ) return<Redirect to ='/' />

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Sign In</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}></input>
          </div>


          <div className="input-field">
            <button className="btn pink z-depth-0 lighten-1">Login</button>
          </div>

           <div className = "red-text center" >
             { authError ? <p> { authError } </p> : null  } 
           </div>


        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    authError : state.auth.authError ,
    auth : state.firebase.auth
  }

}

const mapDispatchToProps = (dispatch) => {

  
  return {
     signIn : ( creds ) => dispatch(signIn(creds))
  }

}

export default  connect( mapStateToProps, mapDispatchToProps )(SignIn) ;

// export default SignIn ;
