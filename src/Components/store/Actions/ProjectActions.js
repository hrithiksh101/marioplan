


const createProject = (project) => {
    return ( dispatch , getState , { getFirebase  , getFirestore } ) => {     // get Firestore was also added


        const firestore = getFirestore() ;
        const profile = getState().firebase.profile ;
        const authorId = getState().firebase.auth.uid ;


        const sate = getState() ;

   //     console.log( 'This is the part of getState fddddddddddddddddddddddddddddddddddddddddddddd' , sate ) ;


        firestore.collection('projects').add({ 
            ...project ,
           authorFirstName : 'abc' ,
           authorLastName : '123' ,
           authorId : authorId ,
           createdAt : new Date() 
        }).then( () =>{
         //   console.log(' error is caught in creating the project 1'  ) ;
            dispatch( { type : 'CREATE_PROJECT'  } ) ;
        } ).catch( (err) => {
         //   console.log(' error is caught in creating the project 2') ;
            dispatch( {type : 'CREATE_PROJECT_ERROR'  } ,err ) ;
        } ) ;

 
        
    }
}

export default createProject ;
