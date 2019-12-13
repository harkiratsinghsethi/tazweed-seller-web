import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import SelectSellerId from "./components/SelectSellerId";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppointmentRequest from "./components/AppointmentRequest";

ReactDOM.render(
    <BrowserRouter>
        <Route>
            <div>
                {/* < NotificationComponent/> */}
                <article className="primary-content">
                    {/*<DynamicHeader/>*/}
                    <Switch>
                        <Route exact path="/" component={SelectSellerId}/>
                        <Route exact path="/appointmentrequest" component={AppointmentRequest}/>

                        {/*{routeList}*/}
                        {/*<Route path="/CPReport/:catId" component={TablueReportsScreen}/>*/}
                        {/*<Route path="/ODSReport/:catId" component={TablueReportsScreen}/>*/}
                        {/*<Route path="/CGPBadErrorCodes/:catId" component={TablueReportsScreen}/>*/}
                        {/*<Route path="/ERAInsights/:catId" component={TablueReportsScreen}/>*/}
                        {/*<Route path="/DogfoodInsights/:catId" component={TablueReportsScreen}/>*/}
                        {/*<Route path="/psr/:catId" component={TablueReportsScreen}/>*/}
                        {/*<Route path="/psrHeatMap/:catId" component={TablueReportsScreen}/>*/}
                        {/*<Route path="/psrTrend/:catId" component={TablueReportsScreen}/>*/}

                        {/*{fetch('/api/getHeaderRecord')*/}
                        {/*.then(result => result.json())*/}
                        {/*.then((jsonResult) => {*/}
                        {/*jsonResult.map((item, index) => {*/}
                        {/*console.log(item.header_name);*/}
                        {/*// return <Route path={item.header_name} component={TablueReportsScreen}/>;*/}
                        {/*});*/}
                        {/*}*/}
                        {/*)*/}
                        {/*}*/}

                        {/*<Route path="*" component={NotFound}/>*/}

                    </Switch>
                    {/*<Footer/>*/}
                </article>
            </div>
        </Route>
    </BrowserRouter>

    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
