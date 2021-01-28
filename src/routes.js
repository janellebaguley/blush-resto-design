import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Auth from './components/Auth';
import Furniture from './components/Furniture';
import Designs from './components/Designs';
import Checkout from './components/Checkout';


export default (
    <Switch>
        <Route exact path= '/' component={App}/>
        <Route path= '/login' component={Auth}/>
        <Route path= '/furniture' component={Furniture}/>
        <Route path= '/designs' component={Designs}/>
        <Route path= '/checkout' component={Checkout}/>
    </Switch>
)