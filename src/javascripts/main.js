import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';

import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.printSignInButton();
  authData.checkLoginStatus();
};

init();
