import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';
import Home from './components/views/Home';
import CategoryPage from './components/views/CategoryPage';
import Details from './components/views/Details';
import Categories from './components/views/Categories';
import Login from './components/views/Login';
import Register from './components/views/Register'

// View Components
import Base from './Base';

// Enables redux devtools extension
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Applies middleware to global store
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Base>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/categories" component={Categories}/>
                    <Route path = "/category/:categoryType" component={CategoryPage}/>
                    <Route path = "/:posting/:id" component = {Details}/>
                    <Route path = "/login" component = {Login}/>
                    <Route path = '/register' component = {Register}/>
                    <Route path="/clothes"/>
                    <Route path="/food"/>
                    <Route path="/school"/>
                    <Route path="/supplies"/>
                </Switch>
            </Base>
        </BrowserRouter>
    </Provider>
    , document.getElementById("root")
);
