import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Furniture from './components/Furniture/Furniture';
import Designs from './components/Designs/Designs';
import Checkout from './components/Checkout/Checkout';


export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/furniture' component={Furniture}/>
        <Route path= '/designs' component={Designs}/>
        <Route path= '/login' component={Auth}/>
        <Route path= '/checkout' component={Checkout}/>
    </Switch>
)