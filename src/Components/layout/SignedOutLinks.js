import React from 'react' ;
import { NavLink } from 'react-router-dom' ;

const SignedOutLinks = () => {


    return (

        <ul className = "right" >

           <li> <NavLink to = '/SignUp' >Sign up</NavLink> </li>
           <li> <NavLink to = '/SignIn' >Login In</NavLink> </li>


        </ul>



    )


}

export default SignedOutLinks ;