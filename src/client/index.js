import {hydrate} from 'react-dom'
import React from 'react'
import App from "../containers/App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {getClientStore} from "../store";
hydrate(
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,document.getElementById('root'))
