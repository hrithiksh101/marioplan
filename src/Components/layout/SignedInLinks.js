import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux' ;
import { signOut } from '../store/Actions/AuthActions' ;
import  ProfileActions  from '../store/Actions/ProfileActions' ;

const SignedInLinks = (props) => {


//  console.log(' in the signed links ' , props ) ;

// ProfileActions(props.firebase.auth.uid) ;

     
  return (
    <ul className="right">
      <li><NavLink to="/Create"> New Project </NavLink></li>
      <li><a onClick = {props.signOut}> Log out </a></li>
      <li><NavLink to="/" className = "btn btn-floating pink lighten-1" >{ `HS`}</NavLink></li>
    </ul>
  );
};

const mapStateToProps = ( state ) => {
//  console.log('is the part of map state to props ' , state) ;
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut : () => dispatch( signOut() )
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(SignedInLinks) ;

//export default SignedInLinks;
