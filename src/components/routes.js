import React from 'react';
import Post from './Post';
import { isAuthenticated } from './auth';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props=>(
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: "/", state: { from: props.location } } } />
        )
    )} />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => 
                <div>
                    <h1>Hello Word</h1>
                    <Post title="REACTJS"/>
                    <Post title="É"/>
                    <Post title="MT"/>
                    <Post title="BA1"/>
                </div>
            } />
            <PrivateRoute path="/app" component={() => <h1>você está logado</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;