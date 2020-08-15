import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import 'font-awesome/css/font-awesome.min.css';

import Hero from "./components/Hero"
import Heroes from "./components/Heroes"
import NavBar from "./components/NavBar"
import HeroDetails from "./components/HeroDetails"

// let firstElement= <h1> Hello World! </h1>

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//


ReactDOM.render(
    <BrowserRouter>
        <NavBar/>
        <Route exact path="/heroes" component={Heroes} ></Route>
        <Route exact path="/heroes/:id" component={HeroDetails} ></Route>
        {/*<Route path="/hero" component={Heroes} ></Route>*/}
        {/*<Heroes/>*/}
    </BrowserRouter>,
    document.getElementById('root'));

//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
