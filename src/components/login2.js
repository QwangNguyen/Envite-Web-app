import React from 'react'; 
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'

//import the component
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//an object of configuration values
const firebaseUIConfig = {
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
  ],
  signInFlow: 'popup', //don't redirect to authenticate
  credentialHelper: 'none', //don't show the email account chooser
  callbacks: { //"lifecycle" callbacks
    signInSuccessWithAuthResult: () => {
      return false; //don't redirect after authentication
    }
  }
}

//the React compnent to render
export function MySignInScreen() {
  const auth = getAuth(); //access the "authenticator"
  return (
    <main className="loginPage centerMain">
      <h1>We envite you to go green!</h1>
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
    </main>
  );
}