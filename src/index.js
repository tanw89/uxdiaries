//index.js is the main architecture of the app. 
//It wraps the app in a router to enable links, and then in a React Context.


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { ReviewProvider } from './context';

ReactDOM.render(
  <ReviewProvider>
    <Router>
      <App />
    </Router>
  </ReviewProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
