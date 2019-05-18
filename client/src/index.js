import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';

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
