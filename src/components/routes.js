import React from 'react';
import Post from '../components/Post.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route exact path="/simulador" component={() => 
            <Post/>
        } />
    </Switch>
</BrowserRouter>
);

export default Routes;