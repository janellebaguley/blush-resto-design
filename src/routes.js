import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Furniture from './components/Furniture/Furniture';
import Designs from './components/Designs/Designs';
import Cart from './components/Checkout/Cart';
import Contact from './components/Contact/Contact'


export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/furniture' component={Furniture}/>
        <Route path= '/designs' component={Designs}/>
        <Route path= '/login' component={Auth}/>
        <Route path= '/cart' component={Cart}/>
        <Route path= '/contact' component={Contact}/>
    </Switch>
)