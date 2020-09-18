import { getFirestore } from 'redux-firestore' ;

 const ProfileActions = (data) => {

     console.log('inside the ralsdkfjladsjfladjsffffffffffffffffffffffffffff' , data ) ;
  
   // console.log( typeof data.toString() ) ;
   
   var s = '19y4SJogFaSmi6PvdfksewiHUA92' ;

    const firestore = getFirestore() ;
    var docRef = firestore.collection("users").doc(s);
     
 

    docRef.get().then((doc) => { 

        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });


    return (dispatch, getState , { getFirebase , getFirestore } ) => {

       console.log( ' inside the profile action sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss' ) ;



    }

}

export default ProfileActions ;