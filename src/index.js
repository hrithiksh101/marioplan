import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Components/store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { reactReduxFirebase, getFirebase , ReactReduxFirebaseProvider } from 'react-redux-firebase';
import fbConfig from './config/fbConfig' ;
import firebase from 'firebase/app' ;
import  {useSelector}   from 'react-redux'
import { isLoaded  } from 'react-redux-firebase' ;


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore( firebase , fbConfig )   
  )
);
// , { useFirestoreForProfile :true , userProfile : 'users' , attachAuthIsReady : true  } 

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence',
  sessions: 'sessions'
}

// for some reasons use selector is not working

function AuthIsLoaded({ children }) {



  const auth = useSelector(state =>  state.firebase.auth )
   
  if (!isLoaded(auth)) return <div className="center"> <p>Loading Mario Plan...</p></div>;
  return children ; 
 

}



ReactDOM.render(
  <Provider store={store}>
<ReactReduxFirebaseProvider {...rrfProps}>  
   <AuthIsLoaded>
      <App />
   </AuthIsLoaded>

</ReactReduxFirebaseProvider>
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();
        

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA




