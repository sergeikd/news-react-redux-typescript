import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { news } from "./reducers/newsReducer";
import { selection } from "./reducers/selectReducer";
import { search } from "./reducers/searchReducer";
import { sort } from "./reducers/sortReducer";

const reducers = combineReducers({
    news,
    selection,
    search,
    sort,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
  ));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();