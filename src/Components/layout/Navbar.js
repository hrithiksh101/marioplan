import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux' ;

const Navbar = (props) => {

  const { auth , profile } = props ;


  const links = auth.uid ? <SignedInLinks />  :   <SignedOutLinks /> ;

  


  console.log( profile , 'profile here' ) ;


  return (
    <nav className="nav-wrapper purple darken-2">
      <div className="container">
        <Link to="/" className="brand-logo">
          Mario Planner
        </Link>
          {/* <SignedInLinks />
          <SignedOutLinks /> */}
          { links }
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {

  console.log(state) ;

  return {
    
    auth : state.firebase.auth

  }
}

export default connect(mapStateToProps)(Navbar);
