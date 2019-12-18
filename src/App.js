import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import SelectSellerId from './components/SelectSellerId'
import AppointmentRequest from './components/AppointmentRequest'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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

                        {routeList}
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

                        <Route path="*" component={NotFound}/>

                    </Switch>
                    <Footer/>
                </article>
            </div>
        </Route>
    </BrowserRouter>

    , document.getElementById('root')
);
