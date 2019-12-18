import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import SelectSellerId from "./components/SelectSellerId";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppointmentRequest from "./components/AppointmentRequest";
import layout from './layouts/layout'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

ReactDOM.render(
    <BrowserRouter>
        <Header/>
        <div>
            {/* < NotificationComponent/> */}
            <article className="primary-content">
                <Switch>
                    <Route exact path="/" component={SelectSellerId}/>

                </Switch>
            </article>
        </div>
    </BrowserRouter>

    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
