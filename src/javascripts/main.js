import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import auth from './components/auth/auth';
import authData from './helpers/data/authData';
import logout from './components/logout/logout';

import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.printSignInButton();
  authData.checkLoginStatus();
  logout.logoutEvent();
};

init();
