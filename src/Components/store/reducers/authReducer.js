const initState = {
  authError : null
};

const authReducer = (state = initState, action) => {

  switch( action.type ){

    case 'LOGIN_ERROR' :
      console.log('login error') ;
      return {
        ...state ,
        authError : 'login failed'
      }
    case 'LOGIN_SUCCESS' :
      console.log('login success') ;
      return {
        ...state ,
        authError : null
      }  
      
    case  'SIGNUP_SUCCESS' :
       console.log( 'sign up success' ) ;
       return {
         ...state ,
         authError : null  
       } ;
    
    case 'SIGNUP_ERROR' :
       console.log( 'sign out error' , action.err.message ) ;
       return {
         ...state ,
         authError : action.err.message 
       } ;

    default :
      return state ;  


  }

};

export default authReducer;
