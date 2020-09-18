import { getFirestore } from "redux-firestore";

export const signIn = ( credentials ) => {

    return ( dispatch, getState , { getFirebase } ) => {

        const firebase = getFirebase() ;

        firebase.auth().signInWithEmailAndPassword(
            credentials.email ,
            credentials.password
        ).then( () => {
            dispatch( {type : 'LOGIN_SUCCESS'} ) ;
        } ).catch( (err) => {
            dispatch( {type : 'LOGIN_ERROR' , err } ) ;
        } ) ;

    }

}

export const signOut = () => {

    return ( dispatch , getState , { getFirebase } ) => {
        const firebase = getFirebase() ;


        firebase.auth().signOut().then( () => {
            dispatch( { type : 'SIGNOUT_SUCCESS' } ) 
        } ) ;

    }

}

export const signUp = (newUser) => {

    console.log(' in the new user property' , newUser ) ;
    let flag = false ;

    return ( dispatch , getState , { getFirebase } ) => {
        
        const firebase = getFirebase() ;
        const firestore = getFirestore() ;


        firebase.auth().createUserWithEmailAndPassword(
            newUser.email ,
            newUser.password
        ).then( (resp) => {





            return firestore.collection('users').doc( resp.user.uid ).set( {
                firstName : newUser.firstName ,
                lastName : newUser.lastName ,
                initials : newUser.firstName[0]  + newUser.lastName[0]
            } ).then(function() {
                console.log("Document successfully written! yooo");
                flag = true ;


            }).catch(function(error) {
                console.error("Error writing document: ", error);
            });

    

            return firestore.collection('users').doc( resp.user.uid ).set( {
                firstName : newUser.firesName ,
                lastName : newUser.lastName ,
                initials : newUser.firesName[0] + newUser.lastName[0]
            } )
        } ).then( () => {
            console.log('here i was storing the data in the users collection') ;

             return dispatch( { type : 'SIGNUP_SUCCESS' } ) 
        } ).catch( (err) => {

            if ( flag === true ){
                return dispatch( { type : 'SIGNUP_SUCCESS' } )
            }

            return dispatch( { type : 'SIGNUP_ERROR' , err  } )
        } )




       
    }
}


// export default signIn ;