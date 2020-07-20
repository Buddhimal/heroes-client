import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import Hero from  "./components/Hero"

let firstElement= <h1> Hello World! </h1>

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//



ReactDOM.render(<Hero/>, document.getElementById('root')
);

//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
