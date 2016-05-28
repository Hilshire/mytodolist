import App from "./components/App.js"
import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"
import {Provider} from "react-redux"
import todos from "./reducer/todos.js"
import { initialState } from "./reducer/todos.js"
const store = createStore(todos, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);

console.log(initialState)

var app = document.createElement("div");
document.body.appendChild(app);
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>, app);
